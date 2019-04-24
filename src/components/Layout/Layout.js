import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar'

import classes from './Layout.css'

class Layout extends Component{
    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <div className={classes.Layout}>
                     {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;