import React from 'react';
import MenuItem from '../MenuItem/MenuItem.component';
import sections from './directory.data';
import './Directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: sections,
		};
	}
	render() {
		const { sections } = this.state;
		return (
			<div className='directory-menu'>
				{sections.map(({ id, ...restProps }) => (
					<MenuItem key={id} {...restProps} />
				))}
			</div>
		);
	}
}
export default Directory;
