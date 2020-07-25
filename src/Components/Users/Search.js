import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers = null }) => {
	const [ state, setstate ] = useState({ text: '' });
	const onChange = (e) => {
		setstate({ ...state, text: e.target.value });
	};
	const submitHandler = (e) => {
		searchUsers(state.text);
		setstate({ text: '' });
	};
	return (
		<div>
			<from onSubmit={submitHandler} className='form'>
				<input type='text' value={state.text} name='text' placeholder='Search Users...' onChange={onChange} />
				<input type='submit' value={'Search'} className='btn btn-dark btn-block' onClick={submitHandler} />
			</from>
		</div>
	);
};

Search.ptopTypes = {
	searchUsers : PropTypes.func.isRequired
};

export default Search;
