import React, { Component } from 'react';
import axios from 'axios';
import Task from './Task';
import { Link, Redirect } from "react-router-dom";

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

  render(){
    const allTasks = this.state.tasks.map((task, i) =>{
      return <Task key={i} task={task} />
    })
    return(
      <div>
        <h1>Daily Tasks:</h1>
        {allTasks}
        <Link to={`/addTask`} >Add New Task</Link>
    </div>
    )
  }
}

export default Daily;
