import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navar = ({ title = 'Github Finder', icon = 'fab fa-github-finder' }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>

			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navar;
