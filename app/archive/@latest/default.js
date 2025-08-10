import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function Latest() {
  const news = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
}
