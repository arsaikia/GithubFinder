import React, { Component } from 'react';

const Navar = ({ title = 'Github Finder', icon = 'fab fa-github-finder' }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>
		</nav>
	);
};

export default Navar;
