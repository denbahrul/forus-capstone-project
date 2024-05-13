import React from "react";
import SearchNotFound from "./SearchNotFound";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
// import {AiOutlineUpCircle, AiOutlineDownCircle} from "react-icons/ai";
import {FaRegComments} from "react-icons/fa";

const SearchOutput = ({output}) => {
    return (
        <div>
           {
            (output === null) ?
            (output[0] === 'empty') ? <SearchNotFound /> :
            output.map((item) => 
            <div className="post" key={item.id}>
                <div className="post-item">
                    <Link to={`/argument/${item.id}`}><h2>{item.title}</h2></Link>
                    <p className="tanggal">{item.name} • <i>{showFormattedDate(item.createdAt)}</i></p>
                    <div className="detail-kategori__instansi">
                        <p className="detail-kategori">{item.kategori}</p>
                        <p className="detail-instansi">{item.instansi}</p>
                    </div>
                    <p className="limit-char">{item.argument}</p>
                    <div className="reaction-bar">
                        {/* <div className="reaction-bar__vote">
                            <AiOutlineUpCircle size={24} />
                            <p>{item.upVote} Setuju</p>
                        </div>
                        <div className="reaction-bar__vote">
                            <AiOutlineDownCircle size={24} />
                            <p>{item.downVote} Tidak setuju</p>
                        </div> */}
                        <div className="reaction-bar__comments">
                            <FaRegComments size={24} />
                            <p>{item.comment.length} Komentar</p>
                        </div>
                    </div>
                </div>
            </div>
            ) : <SearchNotFound />
           }
        </div>
    );
}

export default SearchOutput;