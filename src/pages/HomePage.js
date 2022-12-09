import React from "react";
import { useState, useEffect } from 'react'
import { getAllPost } from "../utils/api";
import PostItem from "../components/PostItem";
import Loader from "../components/loader";
import AddButton from "../components/AddButton";
// import ArgumentDetail from "../components/ArgumentDetail";

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
      <AddButton />
      {post.map((post) => {
        return (
          <PostItem key={post.id} {...post} />
          // <ArgumentDetail key={post.id} {...post} />
        )
      })}
      </>
  );
}

export default HomePage;