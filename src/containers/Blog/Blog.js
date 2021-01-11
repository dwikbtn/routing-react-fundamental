import React, { Component } from "react";
import Post from "./Posts/Posts";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new-post">New Post</a>
            </li>
          </ul>
        </header>
        <Post />
      </div>
    );
  }
}

export default Blog;
