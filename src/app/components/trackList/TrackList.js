import React, { Fragment } from 'react';
import { Store } from '../../store/storeContext';
import Track from '../track/Track';

const TrackList = () => {
	const { state } = React.useContext(Store);

	return (
		<Fragment>
			<ul className='list-group'>
				{state.currentAlbum.tracks.map((track, index) => {
					return (
						<Track
							key={index}
							track={track}
							albumPhoto={state.currentAlbum.photo}
						/>
					);
				})}
			</ul>
		</Fragment>
	);
};

export default React.memo(TrackList);
