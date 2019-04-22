import React, { Component } from "react";
import GridRow from "./GridRow/GridRow";

import classes from "./Board.css";

class Board extends Component {
  

  render() {
    let fullBoard = Array.from(Array(10).keys()).map(i => (
      <GridRow
        clicked={this.props.clicked}
        board={this.props.board}
        key={i}
        row={i}
        queenPlacement={this.props.queenPlacement}
        redQueens={this.props.redQueens}
      />
    ));
    return (
      <div className={classes.Board}>
        <table>
          <tbody>{fullBoard}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;