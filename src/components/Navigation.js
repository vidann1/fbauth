import React from 'react';

import { Link } from 'react-router-dom';
import { Box, Button, RoundedButton, Grommet, Anchor} from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import LogoutBtn from './Logout';

import { Home } from 'grommet-icons';

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
	<ul className="topnav">
		<Anchor><li><Link to={routes.HOME}>Home</Link></li></Anchor>
		<Anchor><li><Link to={routes.ACCOUNT}>Profile</Link></li></Anchor>
		<Anchor><li><LogoutBtn /></li></Anchor>
	</ul>

const NavigationDefault = () => 
	<ul className="topnav">
		<Anchor><li><Link to={routes.INDEX}>Home</Link></li></Anchor>
		<Anchor><li><Link to={routes.LOGIN}>Login</Link></li></Anchor>
		<Anchor><li><Link to={routes.REGISTER}>Register</Link></li></Anchor>
	</ul>

export default Navigation;