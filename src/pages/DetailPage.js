import React from "react";
import ArgumentDetail from "../components/ArgumentDetail";
import CommentList from "../components/commentList";
import { getPost, addComment } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import useInput from "../hooks/useinput";
import Swal from "sweetalert2";

function DetailPage() {
    const {id} = useParams();
    const [initializing, setInitializing] = useState(true);
    const [post, setPost] = useState(null);
    const [komentar, onKomentarChange] = useInput("");
    const [sumber, onSumberChange] = useInput("");

    useEffect(() => {
        getPost(id)
        .then(({data}) => {
            setPost(data);
            setInitializing(false);
        });
    }, [id]);

    async function onSubmitHandler(event) {
        event.preventDefault();

        const { error } = await addComment({
            komentar: komentar,
            sumber: sumber,
            id: id,
          });
          Swal.fire({icon: 'success', title:'Tanggapan ditambahkan', showConfirmButton: false, timer: 1500 });
            const { data } = await getPost(id);
          setPost(data);
          if (!error) {
            Swal.fire({icon: 'error', title:'Tanggapan gagal', showConfirmButton: false, timer: 1500 });
          }
    }

    if (initializing) {
        return <Loader />
    }

    return(
        <div className="detail-container">
            <div className="argument-detail">
                <ArgumentDetail {...post}/>
                <form className="form-add__comment" onSubmit={onSubmitHandler}>
                <textarea className="comment-input__body" type="text" placeholder="Tanggapan Anda.." required value={komentar} onChange={onKomentarChange} />
                <div>
                    <input className="comment-input__source" type="text" placeholder="Link Sumber" value={sumber} onChange={onSumberChange} />
                    <p className="source-desc">*Sertakan sumber untuk memperkuat argumen Anda (opsional)</p>
                    <button className="comment-button" type="submit">Kirim</button>
                </div>
            </form>
                <CommentList comment={post.comment}/>
            </div>
        </div>
    );
};

export default DetailPage;