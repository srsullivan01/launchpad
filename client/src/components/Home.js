import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Daily from './Daily';


class Home extends Component {
  constructor(){
    super();
    this.state = {
      user: "",
      id: "",
      daily: []
    };
  }

  componentWillMount() {
    axios.get("/api/daily").then(res => {
      this.setState({ daily: res.data });
    });
  }



  render(){
    return (
      <div>
        <h1>LAUNCHPAD</h1>
        <form>
          <input type="text"/>
          <button>New User</button>
        </form>
        <ul>
          {this.state.daily.map((daily, i) => {
            return(
              <li key={i}>
                <Link to={`/daily/${daily._id}`}>
                {daily.user}'s Daily Routine
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
}

export default Home;
