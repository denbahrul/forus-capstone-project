import React from "react";
import { useState, useEffect } from 'react'
import { getAllPost } from "../utils/api";
import PostItem from "../components/PostItem";
import Loader from "../components/loader";

function HomePage() {
  const [initializing, setInitializing] = useState(true);
  const [post, setPost] = useState([]);

  useEffect(() => {
    getAllPost()
    .then(({data}) => {
      setPost(data);
      setInitializing(false)
    })
  }, [])

  if (initializing) {
    return <Loader />
}

  return (
      <>
      {post.map((post) => {
        return (
          <PostItem key={post.id} {...post} />
        )
      })}
      </>
  );
}

export default HomePage;