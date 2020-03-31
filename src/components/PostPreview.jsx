import React from "react";
import { Card, Button } from "react-bootstrap";

const PostPreview = props => {
  return (
    <Card>
      <Card.Img variant="top" src="http://placekitten.com/200/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostPreview;
