import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Box, FormField, Grid, Button, RoundedButton, Image, Grommet, Text, TextInput } from "grommet";
import { grommet } from "grommet/themes";

import '../css/App.css';
import { deepMerge } from "grommet/utils";

import {auth} from '../configuration';
import * as routes from '../routes';
import '../css/App.css';

const PasswordResetChange = () => 
	<div>
		<p>Reset Password</p>
		<PasswordResetForm />
	</div>


const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value,
});

const INIT_STATE = {
	email: '',
	error: null,
};

class PasswordResetForm extends Component {
	constructor(props){
		super(props)
		this.state={ ...INIT_STATE };
	}

	handleSubmit = (e) => {
		const { email } = this.state;
		auth.doPasswordReset(email)
			.then(() => {this.setsState({...INIT_STATE});
		}).catch(error => {this.setState(byPropKey('error', error));
	});
		e.preventDefault();
	}
	render() {
		const {
			email,
			error
		} = this.state;
		const isInvalid = email === '';
		return (
			<div id="page-wrap" className="app">
				<form onSubmit={this.handleSubmit}>
					<TextInput value={this.state.email} onChange={event => this.setState(byPropKey('email', event.target.value))} type="text" placeholder="email address" />
					<br />
					<Button primary disabled={isInvalid} label="reset password" type="submit" />
					{error && <p> {error.message} </p>}
				</form>
			</div>
		);
	}
}

const PasswordResetLink = () =>
  <p>
    <Link to={routes.PASSWORD_RESET}>Forgot Password?</Link>
  </p>

export default PasswordResetForm;

export {
	PasswordResetForm,
	PasswordResetLink,
}