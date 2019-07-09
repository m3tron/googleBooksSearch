import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Books from "./Books";
import Home from "./Home";

class Nav extends Component {
  render() {
    return (
      <Router>
        <div className="ui text menu">
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/books">
            View saved books
          </Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
      </Router>
    );
  }
}

export default Nav;
