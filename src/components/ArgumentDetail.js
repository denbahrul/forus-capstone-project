import React from "react";
import { showFormattedDate } from "../utils";

function ArgumentDetail ( {title, createdAt, kategori, argument, sumber, instansi, name}) {
    return (
        <div className="detail-main">
            <h2>{title}</h2>
            <p className="detail-date">{name} • <i>{showFormattedDate(createdAt)}</i></p>
            <div className="detail-kategori__instansi">
                <p className="detail-kategori">{kategori}</p>
                <p className="detail-instansi">{instansi}</p>
            </div>
            <p className="detail-argument">{argument}</p>
            <p className="detail-sumber">-sumber : <a href={sumber}>{sumber}</a></p>
        </div>
    );
}

export default ArgumentDetail;