import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers = null, clearUsers = null, showClear = false, setAlert=null }) => {
	const [ state, setstate ] = useState({ text: '' });
	const onChange = (e) => {
		setstate({ ...state, text: e.target.value });
	};
	const submitHandler = (e) => {
		searchUsers(state.text);
		state.text === '' && setAlert('Please enter Something', 'light');
		setstate({ text: '' });
	};
	return (
		<div>
			<from onSubmit={submitHandler} className='form'>
				<input type='text' value={state.text} name='text' placeholder='Search Users...' onChange={onChange} />
				<input type='submit' value={'Search'} className='btn btn-dark btn-block' onClick={submitHandler} />
				{showClear && (
					<button className='btn btn-light btn-block' onClick={clearUsers}>
						Clear
					</button>
				)}
			</from>
		</div>
	);
};

Search.ptopTypes = {
	searchUsers : PropTypes.func.isRequired,
	clearUsers  : PropTypes.func.isRequired,
	showClear   : PropTypes.func.isRequired,
	setAlert    : PropTypes.func.isRequired
};

export default Search;
