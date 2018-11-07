import React, { Component } from 'react';

// React Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Routes
import * as routes from '../routes';

//import Form from './Form';
import { Box, FormField, Grid, Button, RoundedButton, Image, Grommet, Text, TextInput } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
// Nav
import Navigation from './Navigation';

// import withAuthentication from './withAuth';

// components
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Account from './Account';
import Index from './Index'
import PasswordReset from './PasswordReset';
// firebase
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
      <div className="app" id="">
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />
            <br />
            <Route exact path={routes.HOME} component={Home} />
            <Route exact path={routes.INDEX} component={Index} />
            <Route exact path={routes.LOGIN} component={Login} />
            <Route exact path={routes.REGISTER} component={Register} />
            <Route exact path={routes.ACCOUNT} component={Account} />
            <Route exact path={routes.PASSWORD_RESET} component={PasswordReset} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
