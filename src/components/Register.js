import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../configuration';

import * as routes from '../routes';

import { Box, FormField, Grid, Button, RoundedButton, Image, Grommet, Text, TextInput } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";


const Register = ({ history }) => <div> <h1>Register</h1> <RegisterForm history={history} /> </div>

const INIT_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
}

const byPropKey = (propertyName, value) => () => ({
	[propertyName]: value,
})

class RegisterForm extends React.Component{
	constructor(props){
		super(props)
		this.state={ ...INIT_STATE };
	}
	handleSubmit = (e) => {
		const {
			username,
			email,
			passwordOne,
		} = this.state;

		auth.doCreateUserWithEmailAndPassword(email, passwordOne).then(authUser => {this.setState({ ...INIT_STATE });
			history.push(routes.HOME);
		}).catch(error => {this.setState(byPropKey('error', error));
	});
	e.preventDefault();
	const {history} = this.props;
	}
	
	render(){
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error
		} = this.state;

		const isInvalid = 
			passwordOne != passwordTwo ||
			passwordOne === '' ||
			email === '' ||
			username === '';

		return(
			<Grommet theme={grommet}>

			<form onSubmit={this.handleSubmit}>
				<TextInput value={username} onChange={e => this.setState(byPropKey('username', e.target.value))} type="text" placeholder="Full Name"/>
				<TextInput value={email} onChange={e => this.setState(byPropKey('email', e.target.value))} type="text" placeholder="email"/>
				<TextInput value={passwordOne} onChange={e => this.setState(byPropKey('passwordOne', e.target.value))} type="password" placeholder="password"/>
				<TextInput value={passwordTwo} onChange={e => this.setState(byPropKey('passwordTwo', e.target.value))} type="password" placeholder="password again"/>
				<Button primary label="Register" type="submit" disabled={isInvalid}/>
					
				
				{error && <p>{error.meesage}</p>}	
			</form>

			</Grommet>
				
			
		)
	}
}

const RegisterLink = () => <div><p>Not a member?</p><Link to={routes.REGISTER}>Register</Link></div>

export default withRouter(Register);

export {
	RegisterForm,
	RegisterLink,
};