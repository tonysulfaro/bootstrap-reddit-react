import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import Post from "./Post";

const PostContainer = props => {
  const [posts, setPosts] = useState([]);
  const [comments, setcomments] = useState([]);
  const [currentPost, setcurrentPost] = useState([]);

  // keep posts in sync
  useEffect(() => {
    async function getRedditPosts() {
      const response = await fetch("https://www.reddit.com/r/all.json");
      const json = await response.json();

      console.log(json.data.children);
      setPosts(json.data.children);
    }

    // keep current viewing post in sync
    getRedditPosts();
  }, []);

  useEffect(() => {
    async function getPostDetails() {
      const response = await fetch(`https://www.reddit.com${currentPost}.json`);
      const json = await response.json();

      console.log(json[1].data.children);
      setcomments(json[1].data.children);
    }

    if (currentPost != "") {
      getPostDetails();
    }
  }, [currentPost]);

  return (
    <div className="pdd-sm">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={6} md={4}>
          <div className="post-view">
            {posts.map(post => (
              <Post
                key={post.data.id}
                title={post.data.title}
                subreddit={post.data.subreddit}
                post_id={post.data.permalink}
                setcurrentPost={setcurrentPost}
              />
            ))}
          </div>
        </Col>
        <Col xs={12} md={8}>
          <p>{currentPost}</p>
          <div className="post-view">
            {comments.map(comment => (
              <Card>
                <Card.Body>
                  <Card.Text>{comment.data.body}</Card.Text>
                  <Card.Subtitle>
                    <strong>{comment.data.author}</strong>
                  </Card.Subtitle>
                  <Card.Text>Score: {comment.data.score}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostContainer;
