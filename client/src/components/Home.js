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
      Hello from home
    <Daily />
    </div>
  )
}
};

export default Home;
