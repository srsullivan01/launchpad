import React, { Component } from "react";
import axios from 'axios';
import RemoveTask from './RemoveTask';

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
        {this.props.task.details} <br />
        <h4>Time Commitment: {this.props.task.time} </h4>
        <button onClick={() => this.props.handleDelete(this.props.id)}>All done! </button>

      </div>
    );
  };
}
export default Task;
