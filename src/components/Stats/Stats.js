import React from "react";

import classes from "./Stats.css";

let alphabet = 'abcdefgh'

const stats = props => {

    let queenList = []

    for(let i = 0; i < props.queenPlacement.length; i+=2){
        let list = <li></li>
        list = <li key={i}>Q{alphabet[props.queenPlacement[i+1] - 1]}{9 - props.queenPlacement[i]}</li>
        queenList.push(list)
    }

  return (
    <div className={classes.Stats}>
      <p>Information</p>
      <p>&nbsp;</p>

      <h4>Queen's Locations</h4>
      <ol>
          {queenList}
      </ol>
    </div>
  );
};

export default stats;
