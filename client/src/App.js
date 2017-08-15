import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Daily from './components/Daily';
import Task from './components/Task';
import AddTask from './components/AddTask';
// import NavBar from './styles/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/daily/:dailyId" component={Daily} />
          <Route path="/tasks" component={Task}/>
          <Route exact path="/addTask" component={AddTask} />
        </div>
      </Router>
    );
  }
}

export default App;
