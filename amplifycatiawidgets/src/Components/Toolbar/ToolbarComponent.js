import React, { } from "react";

import './Toolbar.css';

import SideDrawToggleComponent from "../SideDraw/SideDrawToggleComponent";

const ToolbarComponent = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <SideDrawToggleComponent drawToggleClickHandler={props.drawToggleClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="http://www.catiawidgets.net/">CatiaWidgets</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default ToolbarComponent;
