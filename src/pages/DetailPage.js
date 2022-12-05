import React from "react";
import ArgumentDetail from "../components/ArgumentDetail";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/commentList";
import { addComment, getComment, getDetailArgument } from "../utils/api";

function DetailPage() {
    const [argument, setArgument] = React.useState([]);
    const [comment, setComment] = React.useState([]);
  
    React.useEffect(() => {
        getDetailArgument().then((data) => setArgument(data));
    }, []);

    React.useEffect(() => {
        getComment().then((data) =>  setComment(data));
    }, []);

    async function onAddCommentHandler(comment) {
        await addComment(comment);
      }

    return(
        <div className="detail-container">
            <div className="argument-detail">
                <ArgumentDetail {...argument}/>
                <CommentInput addComment={onAddCommentHandler}/>
                <CommentList comment={comment}/>
            </div>
        </div>
    );
};

export default DetailPage;