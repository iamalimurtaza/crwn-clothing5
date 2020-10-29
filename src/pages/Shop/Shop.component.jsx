import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';
import collections from './shop.data';

class Shop extends React.Component {
	constructor() {
		super();
		this.state = {
			collections: collections,
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div>
				{collections.map(({ id, ...restProps }) => (
					<CollectionPreview key={id} {...restProps} />
				))}
			</div>
		);
	}
}
export default Shop;
