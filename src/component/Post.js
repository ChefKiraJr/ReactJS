import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="img-thumb" onClick={() => navigate(`/detail/${props.data.id}`)}>
        <img src="http://placeimg.com/200/150/tech" alt="dummy" />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <button className="remove" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
        <button className="update" onClick={() => props.getDataDetail(props.data)}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Post;
