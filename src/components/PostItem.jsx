import React from "react";
import { showFormattedDate } from "../utils/dateFormat";
import { Link } from 'react-router-dom';

function PostItem({id, title, name, createdAt, kategori, argument}) {
    return (
        <div className="post">
          <div className="post-avatar"></div>
          <div className="post-item">
          <Link to={`/post/${id}`}><h2>{title}</h2></Link>
          <p className="tanggal">{name} - {showFormattedDate(createdAt)}</p>
          <p className="kategori">#{kategori}</p>
          <p className="limit-char">{argument}</p>
          <p>👍 👎</p>
          </div>
        </div>
      )
}

export default PostItem;

