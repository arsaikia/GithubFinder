import React, { Fragment } from 'react';
import './App.css';
import Navar from './Components/Layout/Navar';
import Alert from '../src/Components/Layout/Alert';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/Pages/About';
import User from './Components/Users/User';
import NotFound from './Components/Pages/NotFound';

import GithubState from '../src/Context/Github/GithubState';
import AlertState from '../src/Context/Alert/AlertState';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<Fragment>
						<Navar title='Github Finder' icon={'fab fa-github'} />

						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/user/:login' component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</Fragment>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
