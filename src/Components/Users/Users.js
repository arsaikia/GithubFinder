import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types';

const Users = ({ loading, users }) => {
	return loading ? (
		<Spinner />
	) : (
		<div style={userStyle}>
			{users.map((user) => {
				return <UserItem key={user.id} user={user} />;
			})}
		</div>
	);
};
const userStyle = {
	display             : 'grid',
	gridTemplateColumns : 'repeat(3, 1fr)',
	gridGap             : '1rem'
};

Users.propTypes = {
    users : PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default Users;
