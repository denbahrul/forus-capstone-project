import React from "react";
import { showFormattedDate } from "../utils/index";
import { Link } from 'react-router-dom';
import {FaRegComments} from "react-icons/fa";

function PostItem({id, title, name, createdAt, kategori, argument, instansi, upVote, downVote, comment}) {
    return (
        <div className="post">
          {/* <div className="post-avatar"></div> */}
          <div className="post-item">
          <Link to={`/argument/${id}`}><h2>{title}</h2></Link>
          <p className="tanggal">{name} • <i>{showFormattedDate(createdAt)}</i></p>
          <div className="detail-kategori__instansi">
                <p className="detail-kategori">{kategori}</p>
                <p className="detail-instansi">{instansi}</p>
            </div>
          <p className="limit-char">{argument}</p>
          <div className="reaction-bar">
        <div className="reaction-bar__vote">
            {/* <AiOutlineUpCircle size={24} />
            <p>{upVote} Setuju</p> */}
        </div>
        <div className="reaction-bar__vote">
            {/* <AiOutlineDownCircle size={24} />
            <p>{downVote} Tidak setuju</p> */}
        </div>
        <div className="reaction-bar__comments">
            <FaRegComments size={24} />
            <p>{comment.length} Komentar</p>
        </div>
    </div>
          </div>
        </div>
      )
}

export default PostItem;

