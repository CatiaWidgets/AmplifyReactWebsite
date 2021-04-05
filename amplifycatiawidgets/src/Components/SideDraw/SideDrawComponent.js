import React, { } from "react";

import './SideDraw.css';

const SideDrawComponent = props => {
    let drawerClasses = ['SideDraw'];
    if (props.Show) {
        drawerClasses = ['SideDraw SideDrawOpen']
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
    );
};


export default SideDrawComponent;