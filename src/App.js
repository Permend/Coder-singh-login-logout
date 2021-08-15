// import logo from './logo.svg';
import './App.css';


import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Admin from './components/Admin';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Admin" component={Admin} />
        <Route path="/Logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;