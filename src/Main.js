import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,

} from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import {AppContextProvider, AppContext} from "./AppContext";
import Stuff from "./Stuff";
import Contact from "./Contact";


Stuff.contextType = AppContext;
Contact.contextType= AppContext
 
class Main extends Component {
  render() {
    return (
      <AppContextProvider>
        <BrowserRouter>
        <Drawer
        variant="permanent"
        anchor="left"
      >   
          <ul className="header margin ">
          <div className="color-black">
            <div className="alto">
             <p className="color-white color-blue-strong margin">e-Ventas</p>
            </div>
            <li><NavLink to="/stuff">Datos</NavLink></li>
            <li><NavLink to="/contact">Estadisticas</NavLink></li>
            </div>
          </ul>
          </Drawer>
          <div className="content">
          <p className="color-blue color-blue-back margin alto-dash"></p>
            
            <Route path="/stuff" component={Stuff}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        
        </BrowserRouter>
        </AppContextProvider>  
    );
  }
}
 
export default Main;