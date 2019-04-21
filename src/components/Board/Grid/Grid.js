import React, { Component } from "react";
import queen from "../../Assets/images/deneme2.png";

import classes from "./Grid.css";

class Grid extends Component {
  render() {
    

    let grid = (
      <td
        className={[classes.Grid, classes[this.props.gridType]].join(" ")}
        onClick={this.props.clicked}
      >
        {/* <img 
                  src={queen} 
                  alt=""/> */}
      </td>
    );



    if(this.props.board[this.props.row][this.props.column] === 1) {
        grid =  <td
        className={[classes.Grid, classes[this.props.gridType]].join(' ')}
        onClick={this.props.clicked} >
           <img
               src={queen}
               alt=""/>
     </td>
    }


    if (this.props.span) {
      grid = (
        <td className={[classes.Grid, classes[this.props.gridType]].join(" ")}>
          <span
            style={{ backgroundColor: "silver", height: "20px", width: "20px" }}
          >
            <font color="black">{this.props.number} </font>
          </span>
        </td>
      );
    }

    return grid;
  }
}

export default Grid;
