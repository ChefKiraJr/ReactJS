import { Component } from 'react';
import Post from '../../component/Post';
import axios from 'axios';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };

    // This binding is necessary to make `this` work in the callback
    this.handleRemove = this.handleRemove.bind(this);
  }

  fetchData = () => {
    axios
      .get('http://localhost:3004/posts')
      .then((res) => {
        this.setState({
          post: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  handleRemove = (data) => {
    axios
      .delete(`http://localhost:3004/posts/${data}`)
      .then((res) => this.fetchData())
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchData();
  }
  render() {
    console.log(this.state.post);
    return (
      <>
        <p>Blog Post</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </>
    );
  }
}

export default BlogPost;
