import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Post from "./Post";

const PostContainer = props => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setcurrentPost] = useState([]);

  useEffect(() => {
    async function getRedditPosts() {
      const response = await fetch("https://www.reddit.com/r/all.json");
      const json = await response.json();

      console.log(json.data.children);
      setPosts(json.data.children);
    }

    getRedditPosts();
  }, []);

  return (
    <div className="pdd-sm">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={6} md={4}>
          <div className="post-view">
            {posts.map(post => (
              <Post
                title={post.data.title}
                subreddit={post.data.subreddit}
                post_id={post.data.id}
                setcurrentPost={setcurrentPost}
              />
            ))}
          </div>
        </Col>
        <Col xs={12} md={8}>
          <p>{currentPost}</p>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </Col>
      </Row>
    </div>
  );
};

export default PostContainer;
