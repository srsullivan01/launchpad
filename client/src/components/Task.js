import React, { Component } from "react";
import axios from 'axios';
import RemoveTask from './RemoveTask';
import { taskStyles, Button, Header3, Header4, TaskContainer } from '../styles/BodyStyles';


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
      <taskStyles>
        <TaskContainer>
        <Header3>{this.props.task.name}</Header3>
        {this.props.task.details} <br />
        <Header4>Time Commitment: {this.props.task.time} </Header4>
        <Button onClick={() => this.props.handleDelete(this.props.id)}>All done! </Button>
          </TaskContainer>
      </taskStyles>
    );
  };
}
export default Task;
