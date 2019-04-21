import React, { Component } from "react";
import GridRow from "./GridRow/GridRow";

import classes from "./Board.css";

class Board extends Component {
  state = {
    board: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    queenPlacement: []
  };

  componentDidUpdate() {

  }

  queenPlacementHandler = (row, column) => {
    let tempArr = this.arrayClone(this.state.queenPlacement);
    

    console.log(tempArr)

    if (tempArr.toString() === "") {
      console.log("insideee");
      tempArr.push(row, column);
      this.setState({ queenPlacement: tempArr });
    } else {
      for (let i = tempArr.length - 1; i >= 0; i -= 2) {
        console.log(tempArr[i - 1],tempArr[i], column, row);
        if (tempArr[i] === column && tempArr[i - 1] === row) {
          console.log(tempArr[i], tempArr[i - 1], "inside splice");
          tempArr.splice(i - 1, 2);
          this.setState({ queenPlacement: tempArr });
          return true;
        }
      }  
        
      for (let i = tempArr.length - 1; i >= 0; i -= 2) {
        console.log(tempArr[i], tempArr[i - 1], "push");
        tempArr.push(row, column);
        this.setState({ queenPlacement: tempArr });
        return true;
      }
    }
  };

  queenClickHandler = (row, column) => {
    let val = this.state.board[row][column];
    if (val === 1) {
      val = 0;
    } else {
      val = 1;
    }

    console.log(row, column, val);
    this.setState(prevState => ({
      ...prevState,
      board: prevState.board.map((brd, index) => {
        if (index === row) {
          brd[column] = val;
          return brd;
        }
        return brd;
      })
    }));

    this.queenPlacementHandler(row, column);
  };

  arrayClone = arr => {
    var i, copy;

    if (Array.isArray(arr)) {
      copy = arr.slice(0);
      for (i = 0; i < copy.length; i++) {
        copy[i] = this.arrayClone(copy[i]);
      }
      return copy;
    } else {
      return arr;
    }
  };

  render() {
    let fullBoard = Array.from(Array(10).keys()).map(i => (
      <GridRow
        clicked={this.queenClickHandler}
        board={this.state.board}
        key={i}
        row={i}
        queenPlacement={this.state.queenPlacement}
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
