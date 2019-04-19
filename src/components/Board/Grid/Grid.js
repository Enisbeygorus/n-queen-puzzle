import React from 'react';
import queen from '../../Assets/images/deneme2.png'

import classes from './Grid.css'

const grid = (props) => {

     let grid =
      <td 
         className={[classes.Grid, classes[props.gridType]].join(' ')}
         onClick={props.clicked}
      >
             {/* <img 
                src={queen} 
                alt=""/> */}
      </td>

    if(props.span) {
        console.log('asd')
        grid =
        <td className={[classes.Grid, classes[props.gridType]].join(' ')}>
            <span style={{backgroundColor: "silver", height: '20px', width: '20px'}}>
                <font color="black">{props.number} </font>
            </span>
        </td>
    }
    return (
        grid
    )
}

export default grid;

//[classes.Grid, classes[props.btnType]].join(' ')