import React, { Component } from 'react';
import GridRow from './GridRow/GridRow';

import classes from './Board.css'

class Board extends Component {

    state = {
        board:
        [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            
        ]
    }

    queenClickHandler = (row,column) => {
        
        let val = this.state.board[row][column]
        if(val === 1) {val = 0} else { val = 1}
        
        console.log(row,column,val)
        this.setState(prevState => ({
            ...prevState,
            board: prevState.board.map((brd,index) => {      
                 if(index === row ) {               
                 brd[column ] = val         
                 return brd    
                }
                return brd;
            })
        }))
    }

    render() {

        let fullBoard = Array.from(Array(10).keys()).map( i => ( 
            <GridRow 
                clicked={this.queenClickHandler}
                key={i}
                row={i}
                  /> 
            ) )
        return (
            <div className={classes.Board}>
                 <table >
                        <tbody >
                          {fullBoard}
                        </tbody>
                  </table>
            </div>               
        )
    }
}

export default Board