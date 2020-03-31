import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import PostContainer from "./components/PostContainer";

function App() {
  const [activeSub, setactiveSub] = useState();

  return (
    <div className="App">
      <Nav setactiveSub={setactiveSub}></Nav>
      {activeSub ? <PostContainer subreddit={activeSub}></PostContainer> : null}
    </div>
  );
}

export default App;
