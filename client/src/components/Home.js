import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { LandingPage, Button, Header1, LinkStyles, ManateeButton } from '../styles/BodyStyles';
import { StyledInput } from '../styles/FormStyles';
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

_changeName = e => {
  const newState = {...this.state };
  newState.daily.user = e.target.value;
  this.setState(newState);
}



  render(){
    return (

      <LandingPage>
        <Header1>LAUNCHPAD</Header1>
        <form onSubmit = {(e) => {this._changeName(e)}}>
          <StyledInput type="text"/>
          <Button>New User</Button>
        </form>
        <ul>
          {this.state.daily.map((daily, i) => {
            return(
              <li key={i}>
                <LinkStyles to={`/daily/${daily._id}`}>
                {daily.user}'s Daily Routine
              </LinkStyles>
            </li>
          );
        })}
      </ul>
       <a href="http://calmingmanatee.com/"><ManateeButton>MANATEE</ManateeButton></a>
    </LandingPage>

  );
}
}

export default Home;
