import React, { Component } from "react";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

import { Route, NavLink } from "react-router-dom";

import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/new-post",
                  hash: "#submit",
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;
