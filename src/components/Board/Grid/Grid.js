import React, { Component } from "react";
import Red from "../../Assets/images/Red.png";
import Light from "../../Assets/images/Light.png";
import Dark from "../../Assets/images/Dark.png";
import Green from "../../Assets/images/Green.png";

import classes from "./Grid.css";

class Grid extends Component {
  render() {
    let grid = (
      <td
        className={[classes.Grid, classes[this.props.gridType]].join(" ")}
        onClick={this.props.clicked}
      />
    );

    if (this.props.board[this.props.row][this.props.column] === 1) {
      if (this.props.row % 2 === 1) {
        if (this.props.column % 2 === 1) {
          grid = (
            <td
              className={[classes.Grid, classes[this.props.gridType]].join(" ")}
              onClick={this.props.clicked}
            >
              <img src={Light} alt="" />
            </td>
          );
        } else {
          grid = (
            <td
              className={[classes.Grid, classes[this.props.gridType]].join(" ")}
              onClick={this.props.clicked}
            >
              <img src={Dark} alt="" />
            </td>
          );
        }
      } else {
        if (this.props.column % 2 === 0) {
          grid = (
            <td
              className={[classes.Grid, classes[this.props.gridType]].join(" ")}
              onClick={this.props.clicked}
            >
              <img src={Light} alt="" />
            </td>
          );
        } else {
          grid = (
            <td
              className={[classes.Grid, classes[this.props.gridType]].join(" ")}
              onClick={this.props.clicked}
            >
              <img src={Dark} alt="" />
            </td>
          );
        };
      };
    };

    if (this.props.span) {
      grid = (
        <td className={[classes.Grid, classes[this.props.gridType]].join(" ")}>
          <span
            style={{ backgroundColor: "silver", height: "20px", width: "20px" }}
          >
            <font color="black">&nbsp;{this.props.number}&nbsp;</font>
          </span>
        </td>
      );
    };

    for (let i = 0; i < this.props.redQueens.length; i += 2) {
      if (
        this.props.redQueens[i] === this.props.row &&
        this.props.redQueens[i + 1] === this.props.column
      ) {
        grid = (
          <td
            className={[classes.Grid, classes["Red"]].join(" ")}
            onClick={this.props.clicked}
          >
            <img src={Red} alt="" />
          </td>
        );
      };
    };

    if(this.props.redQueens.length === 0 && this.props.queenPlacement.length === 16) {
      for(let i = 0; i < this.props.queenPlacement.length; i+=2) {
        if(this.props.queenPlacement[i] === this.props.row && this.props.queenPlacement[i+1] === this.props.column){
          grid = (
            <td
              className={[classes.Grid, classes["Green"]].join(" ")}
              onClick={this.props.clicked}
            >
              <img src={Green} alt="" />
            </td>
          );
        };
      };
    };

    return grid;
  };
};

export default Grid;
