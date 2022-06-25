import React, { useState } from 'react';
import Post from '../../component/Post';
import axios from 'axios';

const BlogPostFunc = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await axios.get('http://localhost:3004/posts');
  };
  return (
    <>
      <p>Blog Post</p>
      {}
    </>
  );
};
