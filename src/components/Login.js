import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'

import { RegisterLink } from './Register';
import { auth } from '../configuration';
import * as routes from '../routes';

import { Box, FormField, Grid, Button, RoundedButton, Image, Grommet, Text, TextInput } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";



const Login = ({ history }) =>
  <div>
    <h1>Login</h1>
    <LoginForm history={history} />
    <RegisterLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
    <Grommet theme={grommet}>

      <form onSubmit={this.onSubmit}>
        <TextInput
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <TextInput
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <Box align="start" gap="small">
        <Button primary disabled={isInvalid} label="Login" type="submit"/>
        { error && <p>{error.message}</p> }
        </Box>
      </form>
	</Grommet>

    	/*
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
      */
    );
  }
}

export default withRouter(Login);

export {
  LoginForm,
};