import React, { } from "react";

import './Backdrop.css';

const BackdropComponent = props => (

    <div className="backdrop" onClick={props.backdropClickHandler}></div>
);


export default BackdropComponent;