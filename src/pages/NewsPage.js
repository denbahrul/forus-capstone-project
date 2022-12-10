import React from "react";
import NewsItem from "../components/NewsItem";
import {BiNews} from "react-icons/bi"

function NewsPage() {
  return (
    <div className="detail-container" style={{marginTop:`10px`}}>
    <div className="sidebar-item">
      <div className="sidebar-menu">
        <BiNews size={28}/>
        <p style={{marginLeft:`10px`}} >Headline Indonesia</p>
      </div>
        <div className="news">
          <NewsItem />
        </div>
    </div>
</div>
  )
}

export default NewsPage;