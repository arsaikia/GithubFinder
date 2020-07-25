import React, { Fragment, Component } from 'react';
import './App.css';
import Navar from './Components/Layout/Navar';
import UserItem from './Components/Users/UserItem';
import Users from './Components/Users/Users';
import axios from 'axios';
import Search from './Components/Users/Search';
import Alert from '../src/Components/Layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/Pages/About';
import User from './Components/Users/User';

class App extends Component {
	state = {
		users   : [],
		user    : {},
		repos   : [],
		loading : false,
		alert   : null
	};

	render () {
		const searchUsers = async (text) => {
			this.setState({ loading: true });
			const res = await axios.get(
				`https://api.github.com/search/users?q=${text}&client_id=${process.env
					.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			return this.setState({ users: res.data.items, loading: false });
		};

		const getUser = async (username) => {
			this.setState({ loading: true });
			const res = await axios.get(
				`https://api.github.com/users/${username}?client_id=${process.env
					.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			return this.setState({ user: res.data, loading: false });
		};

		const getUserRepos = async (username) => {
			this.setState({ loading: true });
			const res = await axios.get(
				`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env
					.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			return this.setState({ repos: res.data, loading: false });
		};

		const clearUsers = () => {
			return this.setState({ users: [], loading: false });
		};

		const setAlert = (msg, type) => {
			this.setState({ alert: { msg, type } });

			setTimeout(() => {
				this.setState({ alert: null, loading: false });
			}, 3500);
		};

		return (
			<Router>
				<Fragment>
					<Navar title='Github Finder' icon={'fab fa-github'} />

					<div className='container'>
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => {
									return (
										<Fragment>
											<Search
												searchUsers={searchUsers}
												clearUsers={clearUsers}
												showClear={this.state.users.length > 0}
												setAlert={setAlert}
											/>
											<Users loading={this.state.loading} users={this.state.users} />
										</Fragment>
									);
								}}
							/>
							<Route exact path='/about' component={About} />
							<Route
								exact
								path='/user/:login'
								render={(props) => {
									return (
										<User
											{...props}
											getUser={getUser}
											getUserRepos={getUserRepos}
											user={this.state.user}
											loading={this.state.loading}
											repos={this.state.repos}
										/>
									);
								}}
							/>
						</Switch>
					</div>
				</Fragment>
			</Router>
		);
	}
}

export default App;
