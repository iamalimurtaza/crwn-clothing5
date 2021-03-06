import React from 'react';
import './Input.styles.scss';

const Input = ({ type, name, value, onChange, labelText }) => {
	return (
		<div className='group'>
			<input className='form-input' type={type} name={name} value={value} onChange={onChange} />
			{labelText ? (
				<label className={`form-input-label ${value.length > 0 ? 'shrink' : false}`}>
					{labelText}
				</label>
			) : null}
		</div>
	);
};
export default Input;
