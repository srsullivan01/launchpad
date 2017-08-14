import React, { Component } from 'react';
import axios from 'axios';
import Task from './Task';

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
   const id = this.props.match.params.gameId;
   axios.get(`/api/daily/${id}`).then(res => {
     this.setState({
       id: res.data._id,
       user: res.data.user,
       tasks: res.data.tasks
     });
   });
 }

  render(){
    return(
      <div>
        <h1>Daily Tasks:</h1>
      <Task tasks={this.state.tasks} />
    </div>
    )
  }
}

export default Daily;
