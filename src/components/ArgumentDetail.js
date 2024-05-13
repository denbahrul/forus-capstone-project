import React from "react";
import { showFormattedDate } from "../utils";
import {FaRegComments} from "react-icons/fa";

function ArgumentDetail ( {title, createdAt, kategori, argument, sumber, instansi, name, comment}) {
    return (
        <>
        <div className="detail-main">
            <h2 className="detail-title">{title}</h2>
            <p className="detail-date">{name} • <i>{showFormattedDate(createdAt)}</i></p>
            <div className="detail-kategori__instansi">
                <p className="detail-kategori">{kategori}</p>
                <p className="detail-instansi">{instansi}</p>
            </div>
            <p className="detail-argument">{argument}</p>
            <p className="detail-sumber">-sumber : <a href={sumber}>{sumber}</a></p>
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
        </>
    );
}

export default ArgumentDetail;