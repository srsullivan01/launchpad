import React, { Component } from "react";
import axios from "axios";
import { TaskStyles, Button, Header1, AddTaskStyles } from '../styles/BodyStyles';


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
  axios.post(`/api/task/${this.props.dailyId}/new`, this.state).then((res) => {
    console.log(res);
    this.props.updateDaily(res.data)
  })
  .catch(err => console.log(err));
};



render(){
  console.log(this.props.dailyId)
return (
      <AddTaskStyles>
        <Header1>Add A Task</Header1>
        <form onSubmit= {(e) => {this._handleSubmit(e)}}>
          <div>
            <label htmlFor="name">Task Name: </label>
            <input
              onChange={this._changeTask}
              value={this.state.task.name}
              type="text"
              name="name"
            />
            <br /> <br />
            <label htmlFor="details">Task Details: </label>
            <input
              onChange={this._changeDetails}
              value={this.state.task.details}
              type="text"
              name="details"
              id="DetailsText"
            />
            <br /> <br />
            <label htmlFor="time">Time Commitment: </label>
            <select>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </div>
          <Button>Add Task</Button>
        </form>
      </AddTaskStyles>
      );
    };
  }
export default AddTask;
