import React, { useEffect, useState } from 'react';
import Post from '../../component/Post';
import axios from 'axios';

const BlogPostFunc = () => {
  const [post, setPost] = useState([]);
  const [form, setForm] = useState({
    title: '',
    body: '',
  });
  const [id, setId] = useState('');
  const fetchData = async () => {
    try {
      const { data } = await axios.get('http://localhost:3004/posts');
      console.log(data);
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:3004/posts/${id}`);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  const handleForm = (e) => {
    let tempForm = { ...form };
    tempForm[e.target.name] = e.target.value;
    setForm(tempForm);
  };
  const handlePost = async () => {
    try {
      let body = { title: form.title, body: form.body, userId: 1 };
      await axios.post('http://localhost:3004/posts', body);
      fetchData();
      let obj = { title: '', body: '' };
      setForm(obj);
    } catch (err) {
      console.log(err);
    }
  };
  const getDataDetail = (data) => {
    console.log(data);
    let tempForm = { ...form };
    tempForm.title = data.title;
    tempForm.body = data.body;
    setForm(tempForm);
    setId(data.id);
  };
  const handleUpdate = async () => {
    try {
      let body = { id: id, title: form.title, body: form.body };
      await axios.put(`http://localhost:3004/posts/${id}`, body);
      fetchData();
      let obj = { title: '', body: '' };
      setForm(obj);
      setId('');
    } catch (err) {
      console.log(err);
    }
  };

  console.log(form, 'ADASD');
  return (
    <>
      <div className="input-form">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" value={form.title} onChange={(event) => handleForm(event)}></input>
        <label for="body">Body</label>
        <input type="text" id="body" name="body" value={form.body} onChange={(event) => handleForm(event)}></input>
        <button className="add" disabled={id} onClick={() => handlePost()}>
          Add
        </button>
        <button className="update" disabled={!id} onClick={() => handleUpdate()}>
          Update
        </button>
      </div>
      {post.map((post) => {
        return <Post key={post.id} data={post} remove={handleRemove} getDataDetail={getDataDetail} />;
      })}
    </>
  );
};

export default BlogPostFunc;
