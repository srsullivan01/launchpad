import React, { Component } from "react";
import axios from 'axios';

class Task extends Component {
  constructor(){
    super();
    this.state= {
      name: "",
      details: "",
      time: ""
    }
  }

  render(){
    return(
      <div className= 'TaskContainer'>
        <h3>{this.props.task.name}</h3>
        {this.props.task.details}
      </div>
    );
  };
}
export default Task;
