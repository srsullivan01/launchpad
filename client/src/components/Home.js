import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Daily from './Daily';

class Home extends Component {
render(){
  return(
    <div>
      Hello from home
    <Daily />
    </div>
  )
}
};

export default Home;
