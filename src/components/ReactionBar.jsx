import React from "react";
import {AiOutlineUpCircle, AiOutlineDownCircle} from "react-icons/ai";
import {FaRegComments} from "react-icons/fa";

function ReactionBar(upVote, downVote) {
    return (
        <div className="reaction-bar">
        <div className="reaction-bar__vote">
            <AiOutlineUpCircle size={24} />
            <p>{upVote} Setuju</p>
        </div>
        <div className="reaction-bar__vote">
            <AiOutlineDownCircle size={24} />
            <p>{downVote} Tidak setuju</p>
        </div>
        <div className="reaction-bar__comments">
            <FaRegComments size={24} />
            <p>Komentar</p>
        </div>
    </div>
    )
}

export default ReactionBar;