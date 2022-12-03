import React from "react";
import { showFormattedDate } from "../utils/dateFormat";

function PostDetail({title, name, createdAt, kategori, argument}) {
    return (
        <div className="post">
          <div className="post-avatar"></div>
          <div className="post-item">
          <h2>{title}</h2>
          <p className="tanggal">{name} - {showFormattedDate(createdAt)}</p>
          <p className="kategori">#{kategori}</p>
          <p>{argument}</p>
          <p>👍 👎</p>
          </div>
        </div>
      )
}

export default PostDetail;