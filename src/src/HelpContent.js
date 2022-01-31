import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./HelpContent.css";

class HelpContent extends React.Component {
      
  constructor() {
    super()
   
  }
  
  render() {
    return (
      <div className="content">
        <h4>NOTE: Please check the below keyword if you find difficulties in choosing the request.</h4><br/>
        
        <div className="para"><p><strong>Overview of keywords :</strong></p>
            <p>
                1. Infosys related<br/>
                2. Charter related<br/>
                3. ICOMS overview<br/>
                4. High-Level Knowledge Transfer<br/>
                5. Detailed Knowledge Transfer<br/>
            </p>
            <p><strong>INFOSYS RELATED:</strong></p>
            <p>
                1. Adding Mail IDs to DL <br/>
                2. Cubicle or Desktop or Laptop allocation (Note: you can type any one)<br/>
                3. Adding URLs to Trusted Sites<br/>
                4. Allocating ALM asset in AMS<br/>
            </p>
            <p><strong>CHARTER RELATED:</strong></p>
            <p>
                1. PID Activation<br/>
                2. Adding Charter Mail to Charter DL<br/>
                3. ALM request<br/>
                4. PID request<br/>
                5. VPN Request<br/>
                6. Application Access for New Users<br/>
                7. Trouble Tickets for Existing Users<br/>
                8. Field Glass<br/>
                9. Shared Folder Access request<br/>
                10. NCSS Portal Access request<br/>
                11. BRF Access request<br/>
                12. Configuring Charter Outlook<br/>
            </p>
            <p><strong>ICOMS OVERVIEW:</strong></p><br/>
            <p>
                1. Track Level Overview / Applications Used<br/>
                2. Billing System<br/>
                3. Residential<br/>
                4. Commercial/Business<br/>
                5. Transaction Supported/Scenario<br/>
                6. ICOMS/ CRM/ ATLAS (Note: You can type any one request)<br/>
            </p><br/>
            <p>
              <p><strong>High-Level Knowledge transfer</strong></p>
              <p>
                1. ICOMS Residential<br/>
                2. ICOMS Commercial<br/>
                3. CRM Residential<br/>
                4. CRM Commercial<br/>
                5. ATLAS-recordings<br/>
              </p>

            </p>
            <h6>We are still updating to make you feel more comfort while using the chatbot. Thank you for using the application..!</h6>
        </div>

      </div>
    )
  }
}
export default HelpContent;