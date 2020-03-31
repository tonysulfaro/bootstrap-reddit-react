import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import PostContainer from "./components/PostContainer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <PostContainer></PostContainer>
    </div>
  );
}

export default App;
