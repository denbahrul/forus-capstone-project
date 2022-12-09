import React from "react";
import ArgumentDetail from "../components/ArgumentDetail";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/commentList";
import { addComment, getPost } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";

function DetailPage() {
    const {id} = useParams();
    const [initializing, setInitializing] = useState(true);
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPost(id)
        .then(({data}) => {
            setPost(data);
            setInitializing(false);
        })
    }, [id]);

    if (initializing) {
        return <Loader />
    }

    async function onAddCommentHandler(comment) {
        await addComment(comment);
      }

    return(
        <div className="detail-container">
            <div className="argument-detail">
                <ArgumentDetail {...post}/>
                <CommentInput addComment={onAddCommentHandler}/>
                <CommentList comment={post.comment}/>
            </div>
        </div>
    );
};

export default DetailPage;