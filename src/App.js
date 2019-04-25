import React, { Component } from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ChessBoardContainer from "./container/ChessBoardContainer/ChessBoardContainer";
import MainMenu from "./container/MainMenu/MainMenu";

import classes from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
            <Route path="/" exact component={MainMenu} />
            <Route path="/solve" component={ChessBoardContainer} />      
        </Layout>
      </div>
    );
  }
}

export default App;
