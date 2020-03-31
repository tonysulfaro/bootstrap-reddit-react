import React from "react";
import { Card } from "react-bootstrap";

const Post = props => {
  return (
    <Card
      onClick={() => {
        props.setcurrentPost(props.post_id);
      }}
    >
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{JSON.stringify(props.title)}</p>
          <footer>/r/{props.subreddit}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Post;
