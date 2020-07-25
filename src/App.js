import React, { Fragment, Component } from 'react';
import './App.css';
import Navar from './Components/Layout/Navar';
import UserItem from './Components/Users/UserItem';
import Users from './Components/Users/Users';
import axios from 'axios';
import Search from './Components/Users/Search';

class App extends Component {
	state = {
		users   : [],
		loading : false
	};

	render () {
		const searchUsers = async (text) => {
			this.setState({ loading: true });
			const res = await axios.get(
				`https://api.github.com/search/users?q=${text}&client_id=${process.env
					.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			this.setState({ users: res.data.items, loading: false });
		};
		return (
			<Fragment>
				<Navar title='Github Finder' icon={'fab fa-github'} />

				<div className='container'>
					<Search searchUsers={searchUsers} />
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</Fragment>
		);
	}
}

export default App;
