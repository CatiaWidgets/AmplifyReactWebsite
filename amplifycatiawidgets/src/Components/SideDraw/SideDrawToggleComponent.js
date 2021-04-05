import React, { } from "react";

import './SideDrawToggle.css';

const SideDrawToggleComponent = props => (

    <button className="toggle-button" onClick={props.drawToggleClickHandler}>
        <div className="toggle-button_line"></div>
        <div className="toggle-button_line"></div>
        <div className="toggle-button_line"></div>
        </button>
 );


export default SideDrawToggleComponent;