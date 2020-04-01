import React from "react";
import { Card } from "react-bootstrap";

const PostPreview = props => {
  return (
    <a href={props.data.url} target="__blank">
      <Card>
        {props.data.thumbnail !== "self" && props.data.thumbnail ? (
          <Card.Img variant="top" src={props.data.thumbnail} />
        ) : null}
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default PostPreview;
