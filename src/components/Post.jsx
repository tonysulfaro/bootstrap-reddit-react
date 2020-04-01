import React from "react";
import { Media } from "react-bootstrap";

const Post = props => {
  return (
    <Media
      onClick={() => {
        props.setcurrentPost(props.post_id);
      }}
    >
      {props.thumbnail !== "self" && props.thumbnail ? (
        <img
          width={64}
          height={64}
          className="mr-3"
          src={props.thumbnail}
          alt="Generic placeholder"
        />
      ) : null}
      <Media.Body>
        <h5>{JSON.stringify(props.title)}</h5>
        <p>/r/{props.subreddit}</p>
      </Media.Body>
    </Media>
  );
};

export default Post;
