import sql from "better-sqlite3";

// Initialize the database connection
const db = sql("data.db");

// Function to simulate delay
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Define interfaces for news items
export interface News {
  id: number;
  title: string;
  content: string;
  date: string;
  slug: string;
}

// Fetch all news items
export async function getAllNews(): Promise<News[]> {
  try {
    const news = db.prepare("SELECT * FROM news").all() as News[];
    await delay(2000);
    return news;
  } catch (error) {
    console.error("Error fetching all news:", error);
    throw error;
  }
}

// Fetch a specific news item by slug
export async function getNewsItem(slug: string): Promise<News | undefined> {
  try {
    const newsItem = db
      .prepare("SELECT * FROM news WHERE slug = ?")
      .get(slug) as News;
    await delay(2000);
    return newsItem;
  } catch (error) {
    console.error(`Error fetching news item with slug ${slug}:`, error);
    throw error;
  }
}

// Fetch the latest 3 news items
export async function getLatestNews(): Promise<News[]> {
  try {
    const latestNews = db
      .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
      .all() as News[];
    await delay(2000);
    return latestNews;
  } catch (error) {
    console.error("Error fetching latest news:", error);
    throw error;
  }
}

// Fetch available news years
export async function getAvailableNewsYears(): Promise<string[]> {
  try {
    const years = db
      .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
      .all() as { year: string }[];
    const yearList = years.map((year) => year.year);
    await delay(2000);
    return yearList;
  } catch (error) {
    console.error("Error fetching available news years:", error);
    throw error;
  }
}

// Fetch available news months for a given year
export async function getAvailableNewsMonths(
  year: string | undefined
): Promise<string[]> {
  try {
    const months = db
      .prepare(
        "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
      )
      .all(year) as { month: string }[];
    const monthList = months.map((month) => month.month);
    return monthList;
  } catch (error) {
    console.error(
      `Error fetching available news months for year ${year}:`,
      error
    );
    throw error;
  }
}

// Fetch news items for a given year
export async function getNewsForYear(year: string): Promise<News[]> {
  try {
    const news = db
      .prepare(
        "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
      )
      .all(year) as News[];
    await delay(2000);
    return news;
  } catch (error) {
    console.error(`Error fetching news for year ${year}:`, error);
    throw error;
  }
}

// Fetch news items for a given year and month
export async function getNewsForYearAndMonth(
  year: string,
  month: string
): Promise<News[]> {
  try {
    const news = db
      .prepare(
        "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
      )
      .all(year, month) as News[];
    await delay(2000);
    return news;
  } catch (error) {
    console.error(
      `Error fetching news for year ${year} and month ${month}:`,
      error
    );
    throw error;
  }
}
