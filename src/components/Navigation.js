import React from 'react';

import { Link } from 'react-router-dom';
import { Box, Button, RoundedButton, Grommet, Anchor} from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import LogoutBtn from './Logout';

import AuthUserContext from './AuthUserContext';


import * as routes from '../routes';

import '../css/Navbar.css';

let styles = {
	float: 'right'
}






const Navigation = ({ authUser }) => 
	<div>
		{authUser ? <NavigationAuth /> : <NavigationDefault />}
	</div>

const NavigationAuth = () => 
	<ul className="navbar">
		<li><Link to={routes.HOME}>Home</Link></li>
		<li><Link to={routes.ACCOUNT}>Profile</Link></li>
		<li><LogoutBtn /></li>
	</ul>

const NavigationDefault = () => 
	<ul className="navbar">
		<li><Link to={routes.INDEX}>Home</Link></li>
		<li><Link to={routes.LOGIN}>Login</Link></li>
		<li><Link to={routes.REGISTER}>Register</Link></li>
	</ul>

export default Navigation;