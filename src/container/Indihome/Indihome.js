import { Component } from 'react';
import BlogPostFunc from '../BlogPost/BlogPostFunc';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostDetail from '../../component/PostDetail';
// import BlogPost from '../BlogPost/BlogPost';

class Indihome extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <p>Blog Post</p>
          <hr />
          <Routes>
            <Route path="/" element={<BlogPostFunc />} />
            <Route path="/detail/:anak" element={<PostDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default Indihome;
