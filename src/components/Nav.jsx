import React, { useState, useEffect } from "react";
import { Navbar, NavDropdown } from "react-bootstrap";

const Nav = props => {
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    async function getSubreddits() {
      const response = await fetch("https://www.reddit.com/subreddits/.json");
      const json = await response.json();
      setSubreddits(json.data.children);
    }

    getSubreddits();
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Client for Reddit</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <NavDropdown title="Subreddit" id="basic-nav-dropdown">
        {subreddits.map(subreddit => (
          <NavDropdown.Item
            href="#action/3.3"
            key={subreddit.data.id}
            onClick={() => {
              props.setactiveSub(subreddit.data.display_name_prefixed);
            }}
          >
            {subreddit.data.display_name_prefixed}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </Navbar>
  );
};

export default Nav;
