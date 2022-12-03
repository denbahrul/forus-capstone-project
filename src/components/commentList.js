import React from "react";
import { showFormattedDate } from "../utils";

function CommentList({ comment })  {
    return (
        <div>
        {comment.map((comment) => (
            <div key={comment.id}>
                <p>{comment.name}-{showFormattedDate(comment.createdAt)}</p>
                <p>{comment.komentar}</p>
                <a href={comment.sumber}>{comment.sumber}</a>
            </div>
        ))}
    </div>
    );
}

export default CommentList;
