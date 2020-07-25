import React, { useState, useContext } from 'react';
import GithubContext from '../../Context/Github/githubContext';
import AlertContext from '../../Context/Alert/alertContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [ text, setText ] = useState('');
	const onChange = (e) => {
		setText(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		githubContext.searchUsers(text);
		text === '' && alertContext.setAlert('Please enter Something', 'light');
		setText('');
	};
	return (
		<div>
			<from onSubmit={submitHandler} className='form'>
				<input type='text' value={text} name='text' placeholder='Search Users...' onChange={onChange} />
				<input type='submit' value={'Search'} className='btn btn-dark btn-block' onClick={submitHandler} />
				{githubContext.users.length > 0 && (
					<button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
						Clear
					</button>
				)}
			</from>
		</div>
	);
};

export default Search;
