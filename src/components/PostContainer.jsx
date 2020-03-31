import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Post from "./Post";

const PostContainer = props => {
  return (
    <div className="pdd-sm">
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={6} md={4}>
          <Post></Post>
        </Col>
        <Col xs={12} md={8}>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </Col>
      </Row>
    </div>
  );
};

export default PostContainer;
