import React, { Fragment } from 'react';
import Album from '../album/Album';
import { Store } from '../../store/storeContext';

const AlbumList = () => {
	const { state } = React.useContext(Store);

	return (
		<Fragment>
			{state.albums.map((album, index) => {
				return <Album key={index} album={album} />;
			})}
		</Fragment>
	);
};

export default React.memo(AlbumList);
