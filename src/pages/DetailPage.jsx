import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostDetail from "../components/PostDetail";
import { getPost } from "../utils/api";
import { showFormattedDate } from "../utils/dateFormat";
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

    if (post === undefined) {
        return (
          <div>
            <p>data kosong</p>
          </div>
        );
      }


    return (
        <div>
            <PostDetail {...post}/>
            <h3>Komentar</h3>
            {post.comment.map((comment) =>
            <div className="post" key={comment.id}>
              <div className="post-avatar"></div>
              <div className="post-item">
                <h2>{comment.name}</h2>
                <p className="tanggal">{showFormattedDate(comment.createdAt)}</p>
                <p>{comment.komentar}</p>
              </div>
            </div>
            )}
        </div>
    )
}

export default DetailPage;