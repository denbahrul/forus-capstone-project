import React from "react";
import { useState, useEffect } from 'react'
import { getNews } from "../utils/api";
import Loader from "./loader";
import { showFormattedDate } from "../utils";

function NewsItem() {
  const [initializing, setInitializing] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews()
    .then(({data}) => {
      setNews(data);
      setInitializing(false)
    })
  }, [])

  if (initializing) {
    return <Loader />
}

  return (
      <>
      {news.map((news) => {
        return (
        <div className="news-item" key={news.url}>
            <a href={news.url} target="_blank" rel="noopener noreferrer"><p>{news.title}</p>
            <p className="news-date">{showFormattedDate(news.publishedAt)}</p></a>
            <hr />
        </div>
    )
      })}
      </>
  );
}

export default NewsItem;