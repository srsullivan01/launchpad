import React, { Component } from "react";
import axios from "axios";


class AddTask extends Component{
  constructor(){
    super();
    this.state = {
      task: {
        name: "",
        details: ""
      }
    }
  };

_changeTask = e => {
  const newState = {...this.state };
  newState.task.name = e.target.value;
  this.setState(newState);
};

_changeDetails = e => {
  const newState = {...this.state};
  newState.task.details = e.target.value;
  this.setState(newState);
};

_handleSubmit = (e) => {
  e.preventDefault();
  axios.post("/daily/:dailyId", this.state).then((res) => {
    console.log("it worked!");
  })
  .catch(err => console.log(err));
};



render(){
return (
      <div>
        <h1>Add A Task</h1>
        <form onSubmit={this._handleSubmit}>
          <div>
            <label htmlFor="name">Task Name: </label>
            <input
              onChange={this._changeTask}
              value={this.state.task.name}
              type="text"
              name="name"
            />
            <label htmlFor="details">Task Details: </label>
            <input
              onChange={this._changeDetails}
              value={this.state.task.details}
              type="text"
              name="details"
            />
          </div>
          <button>Add Task</button>
        </form>
      </div>
      );
    };
  }
export default AddTask;
