import React from 'react';
import '../css/App.css';
import withAuthorization from './withAuthorization';

const authCondition = (authUser) => !!authUser;
class Home extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		

		return (
			<div className="app" id="page-wrap">
				<h1>welcome home</h1>
				<p>The Home Page is accessible by every signed in user.</p>

			</div>
		);
	}
}

export default withAuthorization(authCondition)(Home);