import {Component} from "react";
import React from "react";
// import "./App.css";
import Menu from "./Menu";
import "./Chat.css";
import {Link} from 'react-router-dom';
import Linkify from 'react-linkify';
// const messages = ['hi', 'hello'];
 
class MessageList extends React.Component {
  
  
  constructor(props) {
    super(props)
    
    this.state = {
      messages: [ ],
      message : "",
      identity: "user",
      obj: {
        "idname": "user",
        "message": "Hello"
      }

    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.assignData = this.assignData.bind(this)
    this.helpSearch = this.helpSearch.bind(this)
  
  }
  // scrollToBottom = () => {
  //   this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  // }
  
  handleChange(e) {
    // this.scrollToBottom();
    this.setState({
      
      obj: {
        "idname": "user",
        "message": e.target.value
      },
      message:e.target.value
    })
    
  }

  handleSubmit(e) {
    e.preventDefault()
    
    
    console.log(this.state.obj+"OBJ")
    var json = JSON.parse(JSON.stringify(this.state.obj))
    console.log(json+"JSON")

  
    this.setState({
      messages: this.state.messages.concat(json),
      message : ""
    })
    let url = "http://127.0.0.1:5000/home/chat"
    
  //   // fetch(url).then(resp => resp.json()).then(messages => this.setState({messages}));

  //   fetch(url,{
  //     "method" : "POST",
  //     "body" : json,
  //     headers:{
  //         "Content-Type" : "application/json",
  //     },
  // }).then(obj => this.setState({obj}));


  const options = { 
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
       body: JSON.stringify(this.state.obj)
       
  }    
  
  fetch(url, options)
  .then(response => {      
   if (response.ok) {
           return response.json();
         } else {
            throw new Error('Something went wrong ...');
         }
       })
         .then(obj => this.setState({obj}))
         .then(messages => this.setState({messages: this.state.messages.concat(this.state.obj)}))
         .catch(error => this.setState({ error }));
    
    // this.setState({
    //   messages: this.state.messages.concat(this.state.obj),
    // })

    console.log(this.state.messages)
    console.log(json)
   
  }
  scrollToBottom = () => {
    const chat = document.getElementById("chatList");
    
    chat.scrollTop = chat.scrollHeight;
    this.messagesEnd.scrollIntoView({behavior:"smooth"});
  };
  // scrollToBottom = () =>{
  //   this.messagesEnd.scrollIntoView({behavior:"smooth"});
  // }
  assignData = () => {
    if(this.props.location.userData){
      let newObj= {
        "idname": "bot",
        "message": this.props.location.userData
      }
      this.setState({
          messages: this.state.messages.concat(newObj),
        })
      console.log(this.props.location.user+"DATA")
      console.log(this.props.location.userData+"UserDATA")
      }
      else{
        console.log("NULLLLLLLLLLLLLLLLLLLLLL");
      }
  }
  sendUser() {
    
    let url ="http://127.0.0.1:5000/home/user";
    let userJson = {"user":this.props.location.user}
    const options = { 
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
         body: JSON.stringify(userJson)
         
    } 
    fetch(url, options)
  .then(response => {      
   if (response.ok) {
           return response.json();
         } else {
            throw new Error('Something went wrong ...');
         }
       })
         .then(obj => this.setState({obj}))
         .then(messages => this.setState({messages: this.state.messages.concat(this.state.obj)}))
         .catch(error => this.setState({ error }));
  }

  helpSearch() {
    var obj= {
      "idname": "user",
      "message": this.props.location.data
    }
    var json = JSON.parse(JSON.stringify(obj))
    console.log(json+"JSON")
    console.log("HELPSEARCH"+ obj.message)
  
    this.setState({
      messages: this.state.messages.concat(json),
      message : ""
    })
    this.props.location.data = ""
    let url = "http://127.0.0.1:5000/home/chat"

 console.log("OBJ:" +this.state.obj);

  const options = { 
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
       body: JSON.stringify(obj)
       
  }    
  
  fetch(url, options)
  .then(response => {      
   if (response.ok) {
           return response.json();
         } else {
            throw new Error('Something went wrong ...');
         }
       })
         .then(obj => this.setState({obj}))
         .then(messages => this.setState({messages: this.state.messages.concat(this.state.obj)}))
         .catch(error => this.setState({ error }));
         
        
  }
  componentDidMount() {
    console.log("did mount");
    this.scrollToBottom();
    this.assignData();
    this.sendUser();
  }
  componentDidUpdate() {
    this.scrollToBottom();
    
    console.log("did update");
    console.log(this.props.location.data+"IN COMPDIDUPDATE");

    if(this.props.location.data){
      this.assignData();
      this.sendUser(); 
       this.helpSearch();

     }

  }
  render() {
    // const { user } = this.props.location
    return (
      <div className="bg">
      <div className="chatWindow">
      <Menu />
        {/* <p className="title" >Welcome Buddies...</p> */}
        <ul  className="chat" id="chatList">
        {/* {this.state.messages.map(message =><div> <li className="self" >{message}</li></div>)} */}
        {/* {console.log(this.state.messages+"@@@@@")} */}
        {this.state.messages.map(data => (
            <div key={data.id}>
              {this.state.identity == data.idname ? (
               
                <li className="self">
                   {/* {console.log(this.state.identity+ "$$"+data.idname+"$$"+data.message)} */}
                  <div className="msg">
                    <p>{data.idname}</p>
                    {/* {console.log(data.message+" MSG In bot")} */}
                    <div className="message"> {data.message}</div>
                  </div>
                </li>
              ) : (
                <li className="other">
                   {/* {console.log(this.state.identity+ "&&"+data.idname+"&&"+data.message)} */}
                  <div className="msg">
                    <p>{data.idname}</p>
                    {/* {console.log(data.message+" MSG")} */}
                    {/* <div className="message"><pre> {data.message}</pre> </div> */}
                    {(data.message).split('\\n').map((item,i)=>{
                      return <Linkify properties={{target: '_blank'}}><div className="message" key={i}>{item}</div></Linkify>
                      })}
                  </div>
                </li>
              )}
            </div>
          ))}

        </ul>
        {/* <ul >
        {this.state.responses.map(resp => <li className="other" >{resp}</li>)}
        </ul> */}
        <div style = {{float:"left",clear:"both"}}
        ref = {(el)=>{this.messagesEnd=el;}}></div>

        <div className="chatInputWrapper">
          <form onSubmit={this.handleSubmit}>
            <input
              className="textarea input"
              type="text"
              value = {this.state.message}
              placeholder="Enter your message..."
              onChange={this.handleChange}
            />
          </form>
        </div>
        </div>
        </div>

  // <div style={{ float:"left", clear: "both", paddingTop: "50px" }}
  //            ref={(el) => { this.messagesEnd = el; }}>
  //       </div>
  // <input onChange={this.handleChange} placeholder="Type your question and hit ENTER" className="input"  value={this.state.message} ></input><button className="send" onClick = {this.handleSubmit}>Send</button></div>
  
     
    )
  }
}

export default MessageList;