import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./Menu.css";
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'

import {Link} from 'react-router-dom';

class Menu extends React.Component {
      
  constructor() {
    super()
    this.state ={
        menuOpen : false,
        seen: false
    }
   
  }
  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };
  openMenu(){
      this.setState({
          menuOpen : true
      })
  }

  closeMenu(){
      this.setState({
          menuOpen : false
      })

  }
  
  render() {
    return (
        
        <div className="menu">
      
        <CheeseburgerMenu
        isOpen={this.state.menuOpen}
        closeCallback={this.closeMenu.bind(this)}>
        {/* <MenuContent closeCallback={this.closeMenu.bind(this)}/> */}
        {/* <div>
        <div className="btn" onClick={this.togglePop}>
        
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div> */}
      {/* <Link to = "/help" target="_blank"> Help !</Link> */}


      <div >
        <h5>NOTE: Please check the below keyword if you find difficulties in choosing the request.</h5><br/>
        
        <div className="para"><p><strong>Overview of keywords :</strong></p>
            <p>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Infosys related"
                  }}>1. Infosys related
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Charter related"
                  }}>2. Charter related
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "ICOMS overview"
                  }}>3. ICOMS overview
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "High-Level Knowledge Transfer"
                  }}>4. High-Level Knowledge Transfer
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Detailed Knowledge Transfer"
                  }}>5. Detailed Knowledge Transfer
              </Link><br/>
            </p>
            <p><strong>INFOSYS RELATED:</strong></p>
            <p>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Adding Mail IDs to DL"
                  }}>1. Adding Mail IDs to DL 
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Cubicle or Desktop or Laptop allocation"
                  }}>2. Cubicle or Desktop or Laptop allocation (Note: you can type any one)
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Adding URLs to Trusted Sites"
                  }}>3. Adding URLs to Trusted Sites
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Allocating ALM asset in AMS"
                  }}>4. Allocating ALM asset in AMS
              </Link><br/>
            </p>
            <p><strong>CHARTER RELATED:</strong></p>
            <p>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "PID Activation"
                  }}>1. PID Activation
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "VPN Request"
                  }}>2. VPN Request
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "ALM request"
                  }}>3. ALM request
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "PID request"
                  }}> 4. PID request
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Adding Charter Mail to Charter DL"
                  }}> 5. Adding Charter Mail to Charter DL
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Application Access for New Users"
                  }}> 6. Application Access
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Configuring Charter Outlook"
                  }}> 7. Configuring Charter Outlook
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Field Glass"
                  }}> 8. Field Glass 
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Shared Folder Access request"
                  }}> 9. Shared Folder Access request
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "NCSS Portal Access request"
                  }}> 10. NCSS Portal Access request
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "BRF Access request"
                  }}> 11. BRF Access request
              </Link><br/>

            </p>
            <p><strong>ICOMS OVERVIEW:</strong></p><br/>
            <p>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Track Level Overview / Applications Used"
                  }}>  1. Track Level Overview / Applications Used
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Billing System"
                  }}>  2. Billing System
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Residential"
                  }}>  3. Residential/Commercial/Business
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "Transaction Supported/Scenario"
                  }}>   4. Transaction Supported/Scenario
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "ICOMS/ CRM/ ATLAS"
                  }}>   5. ICOMS/ CRM/ ATLAS
              </Link><br/>
            </p><br/>
            <p><strong>High-Level Knowledge Transfer</strong></p>
            <p>
            <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "ICOMS Residential"
                  }}>  1. ICOMS Residential
              </Link><br/>

              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "ICOMS Commercial"
                  }}>  2. ICOMS Commercial
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "CRM Residential"
                  }}>  3. CRM Residential
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "CRM Commercial"
                  }}>  4. CRM Commercial
              </Link><br/>
              <Link onClick={this.closeMenu.bind(this)}   to={{
                pathname: "/chat",
                data: "ATLAS-recordings"
                  }}>  5. ATLAS-recordings
              </Link><br/>
            </p>

            <h6>We are still updating to make you feel more comfort while using the chatbot. Thank you for using the application..!</h6>
        </div>

      </div>

      </CheeseburgerMenu>
      
      <HamburgerMenu
        isOpen={this.state.menuOpen}
        menuClicked={this.openMenu.bind(this)}
        width={26}
        height={16}
        strokeWidth={3}
        rotate={0}
        color='purple'
        borderRadius={0}
        animationDuration={0.5}
      />
      <h2 className="header">Hey Buddy...</h2>
      
      </div>
    )
  }
}
export default Menu;