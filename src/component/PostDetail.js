import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const [post, setPost] = useState({
    userId: '',
    id: '',
    title: '',
    body: '',
  });
  // const [form, setForm] = useState({
  //   title: '',
  //   body: '',
  // });
  const { anak } = useParams();
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3004/posts/${anak}`);
      let tempPost = { ...post };
      Object.keys(data).forEach((key) => {
        console.log(data[key]);
        tempPost[key] = data[key];
      });
      //   let keys = Object.keys(data);
      //   for (let i = 0; i < keys.length; i++) {
      //     tempPost[keys[i]] = data[keys[i]];
      //   }
      setPost(tempPost);
    } catch (err) {
      console.log(err);
    }
  };
  const handleForm = (e) => {
    let tempPost = { ...post };
    tempPost[e.target.name] = e.target.value;
    setPost(tempPost);
  };
  const handleUpdate = async () => {
    try {
      let body = { id: anak, title: post.title, body: post.body, userId: 1 };
      await axios.put(`http://localhost:3004/posts/${anak}`, body);
      fetchData();
      // let obj = { title: '', body: '' };
      // setPost(obj);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [anak]);
  return (
    <>
      <div className="input-form">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" value={post.title} onChange={(event) => handleForm(event)}></input>
        <label for="body">Body</label>
        <input type="text" id="body" name="body" value={post.body} onChange={(event) => handleForm(event)}></input>
        <button className="update" onClick={() => handleUpdate()}>
          Update
        </button>
      </div>
      <div className="post">
        <div className="img-thumb">
          <img src="http://placeimg.com/200/150/tech" alt="dummy" />
        </div>
        <div className="content">
          <p className="title">{post.title}</p>
          <p className="desc">{post.body}</p>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
