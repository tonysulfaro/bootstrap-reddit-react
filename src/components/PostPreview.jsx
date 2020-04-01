import React from "react";
import { Card } from "react-bootstrap";

const PostPreview = props => {
  return (
    <a href={props.data.url} target="__blank">
      <Card>
        {props.data.thumbnail !== "self" && props.data.thumbnail ? (
          <Card.Img variant="top" src={props.data.url} />
        ) : null}
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>Submitted by: {props.data.author}</Card.Text>
          <Card.Text>Score: {props.data.score}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default PostPreview;
