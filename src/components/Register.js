import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../configuration';

import * as routes from '../routes';



import { Box, FormField, Grid, Button, RoundedButton, Image, Grommet, Text, TextInput } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import '../css/App.css';

const Register = ({ history }) => <div> <h1>Register</h1> <RegisterForm history={history} /> <p>Already have an account?</p><Link to={routes.LOGIN}><Button label="login"></Button></Link>  </div>

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
			<div id="page-wrap" className="app">
			<form onSubmit={this.handleSubmit}>
				<TextInput value={username} onChange={e => this.setState(byPropKey('username', e.target.value))} type="text" placeholder="Full Name"/>
				<br />
				<TextInput value={email} onChange={e => this.setState(byPropKey('email', e.target.value))} type="text" placeholder="email"/>
				<br />
				<TextInput value={passwordOne} onChange={e => this.setState(byPropKey('passwordOne', e.target.value))} type="password" placeholder="password"/>
				<br />
				<TextInput value={passwordTwo} onChange={e => this.setState(byPropKey('passwordTwo', e.target.value))} type="password" placeholder="password again"/>
				<br />
				<Button primary label="Register" type="submit" disabled={isInvalid}/>
				{error && <p>{error.meesage}</p>}	
			</form>
			</div>
			</Grommet>
				
			
		)
	}
}

const RegisterLink = () => <div><p>Don't have account?</p><Link to={routes.REGISTER}><Button label="register"></Button></Link></div>

export default withRouter(Register);

export {
	RegisterForm,
	RegisterLink,
};