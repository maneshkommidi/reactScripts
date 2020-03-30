import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch,Link} from "react-router-dom";
import GetAll from './GetAll';
import Get from './Get';
import Create from './Create';
import Update from './Update';
import Delete from './Delete';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={GetAll}/>
        <Route path="/Create" component={Create}/>
        <Route path="/Update" component={Update}/>
        <Route path="/Delete" component={Delete}/>
        <Route path="/Get" component={Get}/>
      </Switch>
      <br/>
      <Link to="/Create">Create</Link><br/>
      <Link to="/Update">Update</Link><br/>
      <Link to="/Get">Get</Link><br/>
      <Link to="/Delete">Delete</Link>
    </div>
  );
  }
}

export default App;
