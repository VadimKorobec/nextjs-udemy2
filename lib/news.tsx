import sql from "better-sqlite3";

import { DUMMY_NEWS } from "@/dummy-news";
import { News } from "@/app/(content)/news/page";

const db = sql("data.db");

interface NewsItem {
  date: string;
  // другие поля новости
}

export function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all() as News[];
  return news;
}

export function getLatestNews(): NewsItem[] {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce((years: number[], news: NewsItem) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: string): number[] {
  return DUMMY_NEWS.reduce((months: number[], news: NewsItem) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth() + 1;
      if (!months.includes(month)) {
        months.push(month);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year: string) {
  return DUMMY_NEWS.filter(
    (news: NewsItem) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year: string, month: string) {
  return DUMMY_NEWS.filter((news: NewsItem) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
