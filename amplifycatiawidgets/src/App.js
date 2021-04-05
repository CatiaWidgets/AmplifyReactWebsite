//https://academind.com/tutorials/reactjs-navbar-side-drawer/

import React, { Component } from "react";

import ToolbarComponent from "./Components/Toolbar/ToolbarComponent";
import SideDrawComponent from "./Components/SideDraw/SideDrawComponent";
import BackdropComponent from "./Components/Backdrop/BackdropComponent";


import TestRest from "./Components/DataModel/DataModelViewComponent";

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
                  <p>This is the page content!</p>
                  <TestRest />
              </main>
        </div>
      );
    }
}

export default App;
