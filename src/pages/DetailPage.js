import React, { useEffect, useState } from "react";
import ArgumentDetail from "../components/ArgumentDetail";
import CommentInput from "../components/CommentInput";
import { getComment, getDetailArgument } from "../utils/api";

function DetailPage() {
    const [argument, setArgument] = useState([]);
    const [comment, setComment] = useState([]);
  
    useEffect(() => {
        getDetailArgument().then((data) => setArgument(data));
        getComment().then((data) => setComment(data));
    }, []);

    return(
        <div className="detail-container">
            <div className="argument-detail">
                <p>DetailPage</p>
                <ArgumentDetail {...argument}/>
                <CommentInput/>
                <div>
                    {comment.map((comment) => (
                        <div key={comment.id}>
                            <p>{comment.name}</p>
                            <p>{comment.komentar}</p>
                            <a href={comment.sumber}>{comment.sumber}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailPage;