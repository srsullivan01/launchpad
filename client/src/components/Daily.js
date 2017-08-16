import React, { Component } from 'react';
import axios from 'axios';
import Task from './Task';
import AddTask from './AddTask';
import { Link, Redirect } from "react-router-dom";
import { DailyStyles, taskStyles, Header1 } from '../styles/BodyStyles';

class Daily extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      user: "",
      tasks: []
    }
  }
  componentWillMount(){
  console.log("mounting");
   const id = this.props.match.params.dailyId;
   console.log(id)
   axios.get(`/api/daily/${id}`)
    .then(res => {
     console.log(res)
     this.setState({
       id: res.data._id,
       user: res.data.user,
       tasks: res.data.tasks
     });
   });
 }
_updateDaily = (updatedDaily) => {
  const newState = {...this.state}
  newState.tasks.push(updatedDaily)
  console.log(updatedDaily);
  this.setState(newState)
}

_handleDelete = (index) => {
  const newState = {...this.state};
  newState.tasks.splice(index, 1);
  this.setState(newState);

}



  render(){
    const allTasks = this.state.tasks.map((task, i) =>{
      return <Task key={i} id={i} task={task} dailyId={task.dailyId} handleDelete={this._handleDelete}/>
    })
    return(
      <DailyStyles>
        <Header1>Daily Tasks</Header1>
        {allTasks}
        <AddTask dailyId={this.state.id} updateDaily={this._updateDaily} />

    </DailyStyles>
    )
  }
}

export default Daily;
