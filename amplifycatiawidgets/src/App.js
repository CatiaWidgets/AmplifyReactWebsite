//https://academind.com/tutorials/reactjs-navbar-side-drawer/

import React, { Component, useState, useEffect } from "react";

import ToolbarComponent from "./Components/Toolbar/ToolbarComponent";
import SideDrawComponent from "./Components/SideDraw/SideDrawComponent";
import BackdropComponent from "./Components/Backdrop/BackdropComponent";

class App extends Component {

    state = {
        sideDrawOpen: false
    };

    drawToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawOpen: !prevState.sideDrawOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawOpen: false});
           
    };

    render() {

        let backdrop;

        if (this.state.sideDrawOpen) {
            backdrop = <BackdropComponent backdropClickHandler={this.backdropClickHandler}/>;
        }
      return (
          <div className="App" style={{ height: '100%' }}>   
              
              <ToolbarComponent drawToggleClickHandler = {this.drawToggleClickHandler}/>
              <SideDrawComponent Show={this.state.sideDrawOpen}/>

              {backdrop}
              
              <main style={{marginTop:'64px'} }>
                  <p>Thisis the page content!</p>
              </main>
        </div>
      );
    }
}

export default App;
