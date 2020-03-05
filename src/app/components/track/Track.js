import React, { Fragment } from 'react';
import { Store } from '../../store/storeContext';
import { SELECT_TRACK } from '../../store/index';
import playIcon from '../../../theme/play.svg';
import pauseIcon from '../../../theme/pause.svg';
import classNames from 'classnames';
import './Track.scss';
const Track = ({ track, albumPhoto }) => {
	const { state, dispatch } = React.useContext(Store);

	const handleTrack = () => {
		dispatch({
			type: SELECT_TRACK,
			payload: track.id
		});
	};

	const applySvg = () => {
		if (state.controls.play && state.currentTrack.id === track.id) {
			return pauseIcon;
		} else {
			return playIcon;
		}
	};

	const logoClass = classNames('control-logo', {
		active: track.id === state.currentTrack.id
	});

	return (
		<Fragment>
			<li className='list-group-item' onClick={handleTrack}>
				<div className='list-group-item__info'>
					<img src={albumPhoto || ''} alt='album' className='album-photo' />
					<span className='list-group-item__info-details'>
						<p>{track.title}</p>
						<p className='text-muted'>{track.artist}</p>
						<img src={applySvg()} alt='logo-player' className={logoClass} />
					</span>
				</div>
			</li>
		</Fragment>
	);
};

export default Track;
