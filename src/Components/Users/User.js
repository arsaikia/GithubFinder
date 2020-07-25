import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos';

const User = ({ user, getUser, getUserRepos, loading, repos }) => {
	const { login } = useParams();
	const {
		name,
		avatar_url,
		location,
		bio,
		company,
		blog,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = user;

	useEffect(() => {
		login && getUser(login);
		// getUserRepos
		login && getUserRepos(login);
		// eslint-disable-next-line
	}, []);

	user && console.log('props', user);

	if (loading) return <Spinner />;
	else
		return (
			<Fragment>
				<Link to='/' className='btn btn-light'>
					Back to search{' '}
				</Link>
				Hireable: {' '}
				{hireable ? (
					<i className='fas fa-check text-success' />
				) : (
					<i className='fas fa-times-circle text-danger' />
				)}
				<div className='card grid-2'>
					<img src={avatar_url} alt='avatar..' className='round-img' style={{ width: '150px' }} />
					<h1>{name}</h1>
					<p>Location: {location}</p>
					<div>
						{bio && (
							<Fragment>
								<h3>Bio:</h3>
								<p>{bio}</p>
							</Fragment>
						)}
						<a href={html_url} className='btn btn-dark my-1'>
							Visit Github Profile
						</a>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Username: </strong> {login}
									</Fragment>
								)}
							</li>
							<li>
								{login && (
									<Fragment>
										<strong>Organization: </strong> {company}
									</Fragment>
								)}
							</li>
							<li>
								{login && (
									<Fragment>
										<strong>Website: </strong> <a href={blog}>{blog}</a>
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='card text center'>
					<div className='badge badge-primary'>Folowers: {followers}</div>
					<div className='badge badge-success'>Folowing: {following}</div>
					<div className='badge badge-light'>Public Repos: {public_repos}</div>
					<div className='badge badge-dark'>Public Gists: {public_gists}</div>
				</div>
				<Repos repos={repos} />
			</Fragment>
		);
};

export default User;
