import React from "react";
import { showFormattedDate } from "../utils";

function ArgumentDetail ( {title, createdAt, kategori, argument, sumber, instansi}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{showFormattedDate(createdAt)}</p>
            <p>{kategori} - {instansi}</p>
            <p>{argument}</p>
            <a href={sumber}>{sumber}</a>
        </div>
    );
}

export default ArgumentDetail;