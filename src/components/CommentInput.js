import React, { useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import useInput from "../hooks/useinput";
import { addComment } from "../utils/api";

function CommentInput() {
    const { id } = useParams();
    const [komentar, onKomentarChange] = useInput("");
    const [sumber, onSumberChange] = useInput("");
    const [name] = useState(localStorage.getItem('name'));
    const [userId] = useState(localStorage.getItem('id'));

    async function onSubmitHandler(event) {
        event.preventDefault();

        const { error } = await addComment({
            komentar: komentar,
            sumber: sumber,
            id: id,
            userId: userId,
            name: name,
          });
          Swal.fire({icon: 'success', title:'Tanggapan ditambahkan', showConfirmButton: false, timer: 1500 });
          if (!error) {
            Swal.fire({icon: 'error', title:'Tanggapan gagal', showConfirmButton: false, timer: 1500 });
          }
    }

    return (
            <form className="form-add__comment" onSubmit={onSubmitHandler}>
                <textarea className="comment-input__body" type="text" placeholder="Tanggapan Anda.." required value={komentar} onChange={onKomentarChange} />
                <div>
                    <input className="comment-input__source" type="text" placeholder="Link Sumber" value={sumber} onChange={onSumberChange} />
                    <input type="text"  value={userId}/>
                    <input type="text" value={name}/>
                    <p className="source-desc">*Sertakan sumber untuk memperkuat argumen Anda (opsional)</p>
                    <button className="comment-button" type="submit">Kirim</button>
                </div>
            </form>
        );
    }


export default CommentInput;