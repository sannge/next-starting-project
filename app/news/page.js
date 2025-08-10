import React from "react";
import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

function News() {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

export default News;
