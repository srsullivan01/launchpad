import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Daily from './Daily';

class Home extends Component {
  componentWillMount() {
    axios.get("/api/daily").then(res => {
      this.setState({ daily: res.data });
    });
  }
render(){
  return(
    <div>
      <h1>LAUNCHPAD</h1>
      <button>Beans</button>
    </div>
    {this.state.daily.map((daily, i) => (
      <div key={i}>
        <Link to={`/daily/${daily._id}`}>
          {daily.user}'s Daily Tasks
        </Link>
      </div>
    ))}
    </div>
  )
}
};

export default Home;
