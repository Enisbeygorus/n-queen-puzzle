import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import ChessBoardContainer from './container/ChessBoardContainer/ChessBoardContainer'


import classes from './App.css';

class App extends Component {
  render() {
    return (
        <div className={classes.App}>
             <Layout>
                  <ChessBoardContainer />
             </Layout>       
        </div>
    );
  }
}

export default App;
