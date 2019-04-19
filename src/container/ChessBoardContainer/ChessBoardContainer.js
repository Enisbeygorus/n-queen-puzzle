import React, { Component } from 'react';
import Board from '../../components/Board/Board'

import classes from './ChessBoardContainer.css'

class ChessBoardContainer extends Component {
    render () {
        return (
            <div className={classes.ChessBoardContainer}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className={classes.ChessBoardContainerDiv}>
                                  <Board />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ChessBoardContainer;