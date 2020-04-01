import React, { useState, useEffect } from "react";
import { Row, Col, Card, Media } from "react-bootstrap";

import Post from "./Post";
import PostPreview from "./PostPreview";

const PostContainer = props => {
  const [posts, setPosts] = useState([]);
  const [comments, setcomments] = useState([]);
  const [currentPost, setcurrentPost] = useState([]);
  const [postData, setPostData] = useState();

  // keep posts in sync
  useEffect(() => {
    async function getRedditPosts() {
      const response = await fetch(
        `https://www.reddit.com/${props.subreddit}/.json`
      );
      const json = await response.json();

      setPosts(json.data.children);
    }

    // keep current viewing post in sync
    getRedditPosts();
  }, [props.subreddit]);

  useEffect(() => {
    async function getPostDetails() {
      const response = await fetch(`https://www.reddit.com${currentPost}.json`);
      const json = await response.json();

      setcomments(json[1].data.children);
      setPostData(json[0].data.children[0].data);
    }

    if (currentPost !== "") {
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
                thumbnail={post.data.thumbnail}
                subreddit={post.data.subreddit}
                post_id={post.data.permalink}
                setcurrentPost={setcurrentPost}
              />
            ))}
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div className="post-view">
            {postData ? <PostPreview data={postData}></PostPreview> : null}
            {postData ? <h2>Comments</h2> : null}
            {comments.map(comment => (
              <Media>
                <Media.Body>
                  <h5>
                    {comment.data.author} - Score: {comment.data.score}
                  </h5>
                  <p>{comment.data.body}</p>
                </Media.Body>
              </Media>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostContainer;
