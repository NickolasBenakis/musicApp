import React, { Fragment } from 'react';
import { Store } from '../../store/storeContext';
import { SELECT_TRACK } from '../../store/index';

const Track = ({ track, albumPhoto }) => {
	const { state, dispatch } = React.useContext(Store);

	const handleTrack = () => {
		dispatch({
			type: SELECT_TRACK,
			payload: track.id
		});
	};

	return (
		<Fragment>
			<li className='list-group-item' onClick={handleTrack}>
				<div className='list-group-item__info'>
					<image
						src={albumPhoto || ''}
						alt='album-photo'
						className='album-photo'
					/>
					<span className='list-group-item__info-details'>
						<p>{track.title}</p>
						<p className='text-muted'>{track.artist}</p>
					</span>
				</div>
			</li>
		</Fragment>
	);
};

export default Track;
