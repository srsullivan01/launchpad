import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { LandingPage, Button, Header1 } from '../styles/BodyStyles';
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

      <LandingPage>
        <Header1>LAUNCHPAD</Header1>
        <form>
          <input type="text"/>
          <Button>New User</Button>
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
    </LandingPage>

  );
}
}

export default Home;
