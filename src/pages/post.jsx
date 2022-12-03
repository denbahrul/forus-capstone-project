import React from "react";
import { useState, useEffect } from 'react'
import { showFormattedDate } from "../utils/dateFormat";

function Post() {

  const [user, setPost] = useState([])

  const getDataPost = async () => {
    const response = await fetch('https://63660b33046eddf1baf77f68.mockapi.io/api/v1//user')
    const data = await response.json()
    setPost(data)
  }

  useEffect(() => {
    getDataPost()
  }, [])

  return (
    <>
      {user.map((user) => {
        return (
          <>
          {user.post.map((post) =>
            <div className="post" key={post.id}>
              <div className="post-avatar"><img src={user.avatar} alt={user.avatar} /></div>
              <div className="post-item">
                <h2>{post.title}</h2>
                <p className="tanggal">{user.name} - {showFormattedDate(post.createdAt)}</p>
                <p className="kategori">#{post.kategori}</p>
                <p>{post.argument}</p>
                <p>👍 👎</p>
              </div>
            </div>
            )}
            </>
        )
      })}
    </>
  );
}

export default Post;