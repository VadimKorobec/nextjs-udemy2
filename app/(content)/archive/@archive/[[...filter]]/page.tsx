import NewsList from "@/components/newsList/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

interface FilteredNewsPageProps {
  params: {
    filter: string[];
  };
}

interface FilteredNewsProps {
  year: string | undefined;
  month: string | undefined;
}

interface FilterHeaderProps {
  year: string | undefined;
  month: string | undefined;
}

const FilterHeader = async ({ year, month }: FilterHeaderProps) => {
  const availableYear = await getAvailableNewsYears();
  let links = availableYear;

  if (
    (year && !availableYear.includes(year)) ||
    (month && !getAvailableNewsMonths(year!).includes(month))
  ) {
    throw new Error("Invalid filter");
  }

  if (year && !month) {
    links = await getAvailableNewsMonths(month);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const FilteredNews = async ({ year, month }: FilteredNewsProps) => {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
};

const FilteredNewsPage = async ({ params }: FilteredNewsPageProps) => {
  const filter = params.filter;

  const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter && filter.length > 1 ? filter[1] : undefined;

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;
