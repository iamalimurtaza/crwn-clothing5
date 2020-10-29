import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ children, googleSignIn, ...restProps }) => {
	return (
		<button {...restProps} className={`custom-button ${googleSignIn ? 'google-sign-in' : false}`}>
			{children}
		</button>
	);
};
export default CustomButton;
