import React from "react";
import { showFormattedDate } from "../utils";

function CommentList({ comment })  {
    return (
        <div>
        {comment.map((comment) => (
            <div className="comment-item" key={comment.id}>
                <p className="comment-name"><strong>{comment.name}</strong> • <i>{showFormattedDate(comment.createdAt)}</i></p>
                <p className="comment-body">{comment.komentar}</p>
                <p className="comment-source">-sumber : <a href={comment.sumber}>{comment.sumber}</a></p>
            </div>
        ))}
    </div>
    );
}

export default CommentList;
