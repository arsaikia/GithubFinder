import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers = null, clearUsers = null, showClear = false, setAlert = null }) => {
	const [ text, setText ] = useState('');
	const onChange = (e) => {
		setText(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		searchUsers(text);
		text === '' && setAlert('Please enter Something', 'light');
		setText('');
	};
	return (
		<div>
			<from onSubmit={submitHandler} className='form'>
				<input type='text' value={text} name='text' placeholder='Search Users...' onChange={onChange} />
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
