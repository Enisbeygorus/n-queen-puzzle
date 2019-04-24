import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact active>Main Menu</NavigationItem>
        <NavigationItem link="/solve">Try to Solve</NavigationItem>  
    </ul>
);

export default navigationItems;