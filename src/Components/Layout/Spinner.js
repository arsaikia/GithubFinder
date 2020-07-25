import React, { Fragment } from 'react';
import SpinnerImg from './spinner.gif';

const Spinner = () => {
	return (
		<Fragment>
			<img src={SpinnerImg} alt='Loading...' style={{ width: '200px', margin: 'auto', display: 'block' }} />
		</Fragment>
	);
};

export default Spinner;
