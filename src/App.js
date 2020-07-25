import React, { Fragment, Component } from 'react';
import './App.css';
import Navar from './Components/Layout/Navar';
import UserItem from './Components/Users/UserItem';
import Users from './Components/Users/Users';
import axios from 'axios';

class App extends Component {
	state = {
		users   : [],
		loading : false
	};

	async componentDidMount () {
		this.setState({ loading: true });
		const res = await axios.get('https://api.github.com/users');
		this.setState({ users: res.data, loading: false });
	}

	render () {
		return (
			<Fragment>
				<Navar title='Github Finder' icon={'fab fa-github'} />
				<div className='container'>
					<Users loading={this.state.loading} users={this.state.users}/>
				</div>
			</Fragment>
		);
	}
}

export default App;
