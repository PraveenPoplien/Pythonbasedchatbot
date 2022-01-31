import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import Menu from "./Menu";
import HelpContent from "./HelpContent";
import MainPage from "./MainPage";

class App extends React.Component {
      
  constructor() {
    super()
   
  }
  
  render() {
    return (
      <div className="app">
        {/* <Menu />
        <MessageList /> */}
        <Switch>
          
          <Route  exact path = "/" component = {MainPage}></Route>
          <Route exact path = "/chat" component ={Chat}></Route>
          <Route  exact path = "/help" component = {HelpContent}></Route>
        </Switch>
        
     </div>
    )
  }
}
export default App;