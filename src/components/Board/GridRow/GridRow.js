import React, { Component } from "react";
import Grid from "../Grid/Grid";

import classes from "./GridRow.css";

let aplhabet = "abcdefgh";

class gridRow extends Component {
  render() {
    let grid = Array.from(Array(10).keys()).map(i => {
      if (this.props.row === 9 && i >= 1 && i <= 8) {
        return (
          <Grid
            key={i}
            span
            number={aplhabet[i - 1]}
            gridType="Black"
            row={this.props.row}
            column={i}
            queenPlacement={this.props.queenPlacement}
            board={this.props.board}
          />
        );
      }

      if (this.props.row === 0 && i >= 1 && i <= 8) {
        return (
          <Grid
            key={i}
            span
            number={aplhabet[i - 1]}
            gridType="Black"
            row={this.props.row}
            column={i}
            queenPlacement={this.props.queenPlacement}
            board={this.props.board}
          />
        );
      }

      if (i === 9 && this.props.row >= 1 && this.props.row <= 8) {
        return (
          <Grid
            key={i}
            span
            number={9 - this.props.row}
            gridType="Black"
            row={this.props.row}
            column={i}
            queenPlacement={this.props.queenPlacement}
            board={this.props.board}
          />
        );
      }

      if (i === 0 && this.props.row >= 1 && this.props.row <= 8) {
        return (
          <Grid
            key={i}
            span
            number={9 - this.props.row}
            gridType="Black"
            row={this.props.row}
            column={i}
            queenPlacement={this.props.queenPlacement}
            board={this.props.board}
          />
        );
      }

      if (this.props.row === 0 || this.props.row === 9 || i === 0 || i === 9) {
        return (
          <Grid
            key={i}
            gridType="Black"
            row={this.props.row}
            column={i}
            queenPlacement={this.props.queenPlacement}
            board={this.props.board}
          />
        );
      }

      if (this.props.row % 2 === 0) {
        if (i % 2 === 0) {
          return (
            <Grid
              gridType="Light"
              row={this.props.row}
              column={i}
              key={i}
              clicked={() => this.props.clicked(this.props.row, i)}
              queenPlacement={this.props.queenPlacement}
              board={this.props.board}
            />
          );
        } else {
          return (
            <Grid
              gridType="Dark"
              row={this.props.row}
              column={i}
              key={i}
              clicked={() => this.props.clicked(this.props.row, i)}
              queenPlacement={this.props.queenPlacement}
              board={this.props.board}
            />
          );
        }
      } else {
        if (i % 2 === 0) {
          return (
            <Grid
              gridType="Dark"
              row={this.props.row}
              column={i}
              key={i}
              clicked={() => this.props.clicked(this.props.row, i)}
              queenPlacement={this.props.queenPlacement}
              board={this.props.board}
            />
          );
        } else {
          return (
            <Grid
              gridType="Light"
              row={this.props.row}
              column={i}
              key={i}
              clicked={() => this.props.clicked(this.props.row, i)}
              queenPlacement={this.props.queenPlacement}
              board={this.props.board}
            />
          );
        }
      }
    });
    return <tr className={classes.Gridtr}>{grid}</tr>;
  }
}

export default gridRow;
