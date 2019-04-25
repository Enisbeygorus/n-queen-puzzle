import React, { Component } from "react";
import Board from "../../components/Board/Board";
import Stats from "../../components/Stats/Stats";

import classes from "./ChessBoardContainer.css";

class ChessBoardContainer extends Component {
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
    queenPlacement: [],
    redQueens: [],
    queenClick: true
  };

  componentDidUpdate() {
    this.arrayOfRedQueens();
    if (
      this.state.queenPlacement.length === 16 &&
      this.state.queenClick !== false
    ) {
      this.setState({ queenClick: false });
    }

    if (
      this.state.queenPlacement.length < 16 &&
      this.state.queenClick !== true
    ) {
      this.setState({ queenClick: true });
    }
  }

  arrayOfRedQueens = () => {
    let tempArr = [];

    if (this.state.queenPlacement.length >= 4) {
      for (let i = 0; i < this.state.queenPlacement.length - 2; i += 2) {
        for (let j = i + 2; j < this.state.queenPlacement.length; j += 2) {
          if (this.state.queenPlacement[i] === this.state.queenPlacement[j]) {
            tempArr.push(
              this.state.queenPlacement[i],
              this.state.queenPlacement[i + 1],
              this.state.queenPlacement[j],
              this.state.queenPlacement[j + 1]
            );
          }
        }
      }

      for (let i = 1; i < this.state.queenPlacement.length - 2; i += 2) {
        for (let j = i + 2; j < this.state.queenPlacement.length; j += 2) {
          if (this.state.queenPlacement[i] === this.state.queenPlacement[j]) {
            tempArr.push(
              this.state.queenPlacement[i - 1],
              this.state.queenPlacement[i],
              this.state.queenPlacement[j - 1],
              this.state.queenPlacement[j]
            );
          }
        }
      }

      for (let i = 0; i < this.state.queenPlacement.length - 2; i += 2) {
        for (let j = i + 2; j < this.state.queenPlacement.length; j += 2) {
          for (let k = 1; k < 8; k++) {
            if (
              this.state.queenPlacement[i] + k ===
                this.state.queenPlacement[j] &&
              this.state.queenPlacement[i + 1] + k ===
                this.state.queenPlacement[j + 1]
            ) {
              tempArr.push(
                this.state.queenPlacement[i],
                this.state.queenPlacement[i + 1],
                this.state.queenPlacement[j],
                this.state.queenPlacement[j + 1]
              );
            }
          }
        }
      }
      for (let i = 0; i < this.state.queenPlacement.length - 2; i += 2) {
        for (let j = i + 2; j < this.state.queenPlacement.length; j += 2) {
          for (let k = 1; k < 8; k++) {
            if (
              this.state.queenPlacement[i] - k ===
                this.state.queenPlacement[j] &&
              this.state.queenPlacement[i + 1] - k ===
                this.state.queenPlacement[j + 1]
            ) {
              tempArr.push(
                this.state.queenPlacement[i],
                this.state.queenPlacement[i + 1],
                this.state.queenPlacement[j],
                this.state.queenPlacement[j + 1]
              );
            }
          }
        }
      }

      for (let i = 0; i < this.state.queenPlacement.length - 2; i += 2) {
        for (let j = i + 2; j < this.state.queenPlacement.length; j += 2) {
          if (
            Math.abs(
              this.state.queenPlacement[i] + this.state.queenPlacement[i + 1]
            ) ===
            Math.abs(
              this.state.queenPlacement[j] + this.state.queenPlacement[j + 1]
            )
          ) {
            tempArr.push(
              this.state.queenPlacement[i],
              this.state.queenPlacement[i + 1],
              this.state.queenPlacement[j],
              this.state.queenPlacement[j + 1]
            );
          }
        }
      }

      for (let i = tempArr.length - 1; i >= 2; i -= 2) {
        for (let j = i - 2; j >= 0; j -= 2) {
          if (tempArr.length <= 4) break;
          if (tempArr[i] === tempArr[j] && tempArr[i - 1] === tempArr[j - 1]) {
            tempArr.splice(i - 1, 2);
          }
        }
      }
    }
    if (this.state.redQueens.toString() !== tempArr.toString()) {
      console.log(tempArr);
      this.setState({ redQueens: tempArr });
    }
  };

  queenPlacementHandler = (row, column) => {
    let tempArr = this.arrayClone(this.state.queenPlacement);

    if (tempArr.toString() === "") {
      tempArr.push(row, column);
      this.setState({ queenPlacement: tempArr });
    } else {
      for (let i = tempArr.length - 1; i >= 0; i -= 2) {
        if (tempArr[i] === column && tempArr[i - 1] === row) {
          tempArr.splice(i - 1, 2);
          this.setState({ queenPlacement: tempArr });
          return true;
        }
      }

      for (let i = tempArr.length - 1; i >= 0; i -= 2) {
        tempArr.push(row, column);
        this.setState({ queenPlacement: tempArr });
        return true;
      }
    }
  };

  queenClickHelper = (row, column) => {
    let val = this.state.board[row][column];
    if (val === 1) {
      val = 0;
    } else {
      val = 1;
    }

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
  }

  queenClickHandler = (row, column) => {
    if (this.state.queenClick) {
      this.queenClickHelper(row, column)
    } else {
      for (let i = 0; i < this.state.queenPlacement.length; i += 2) {
        if (
          this.state.queenPlacement[i] === row &&
          this.state.queenPlacement[i + 1] === column
        ) {
          this.queenClickHelper(row, column)
        }
      }
    }
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
    return (
      <div className={classes.ChessBoardContainerLayout}>
      <div className={classes.ChessBoardContainer}>
        <table className={classes.ChessBoardContainerTable}>
          <tbody>
            <tr>
              <td>
                <div className={classes.ChessBoardContainerDiv}>
                  <Board
                    clicked={this.queenClickHandler}
                    board={this.state.board}
                    queenPlacement={this.state.queenPlacement}
                    redQueens={this.state.redQueens}
                  />
                </div>
              </td>
              <td className={classes.ChessBoardContainerTd}>
                <Stats 
                  queenPlacement={this.state.queenPlacement}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}

export default ChessBoardContainer;
