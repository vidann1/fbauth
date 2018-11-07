import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from '../routes';

import Form from './Form';
import Navigation from './Navigation';
//import withAuthentication from './withAuth';


import Login from './Login';
import Register from './Register';
import Home from './Home';
import Account from './Account';

import { firebase } from '../configuration';


// css
import '../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      authUser: null,
    }
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState({authUser}) : this.setState({authUser: null})
    })
  }
  render() {
    return (
      <div className="app" id="page-wrap">
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />
            <hr />
            <Route exact path={routes.HOME} component={Home} />
            <Route exact path={routes.LOGIN} component={Login} />
            <Route exact path={routes.REGISTER} component={Register} />
            <Route exact path={routes.ACCOUNT} component={Account} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
