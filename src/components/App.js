import React from "react";
import Header from "./Header/Header";
import EventControl from "./EventControl/EventControl";
import './App.css';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentlyVisible: 1
    }
  }
  

  render(){
    return (
    <React.Fragment>
      <Header />
      <EventControl />
    </React.Fragment>
    );
  }
}
