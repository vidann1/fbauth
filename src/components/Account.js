import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordResetForm } from './PasswordReset';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const Account = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordResetForm />
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Account);

/*
import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordResetForm } from './PasswordReset';
import PasswordChangeForm from './PasswordChange';
import { auth, firebase } from '../configuration'

import '../css/App.css';

import { Box, FormField, Grid, Button, RoundedButton, Image, Grommet, Text, TextInput } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";



class Account extends React.Component{
	constructor(props){
		super(props)
		this.state={
			authUser: null,
			email: '',
		}
	}
		componentDidMount() {
			firebase.auth.onAuthStateChanged(authUser => {
				authUser ? this.setState({authUser}) : this.setState({authUser: null});
			});
		}
	render() {
		const authUser = this.state;
		const email = this.state;
		return(

      		<div id="page-wrap" className="app">
        		<h3>Account: {authUser.email}</h3>
        		<br />
        		<PasswordResetForm />
        		<br />
        		<PasswordChangeForm />
      		</div>
		)
	}
}
    
  

export default Account;
*/