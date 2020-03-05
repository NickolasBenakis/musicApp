import React, { Fragment } from 'react';
import './MediaPlayer.scss';
import { Store } from '../../store/storeContext';
import {
	PLAY_TRACK,
	PAUSE_TRACK,
	NEXT_TRACK,
	PREV_TRACK
} from '../../store/index';
import nextLogo from '../../../theme/next.svg';
import previousLogo from '../../../theme/previous.svg';
import mockAlbumLogo from '../../../theme/album.svg';
const MediaPlayer = () => {
	const audioRef = React.useRef(null);
	const { state, dispatch } = React.useContext(Store);
	const trackIdRef = React.useRef('');

	React.useEffect(() => {
		console.log('change track');
		if (
			state.currentTrack.source !== audioRef.current.src ||
			state.currentTrack.id !== trackIdRef.current
		) {
			audioRef.current.src = state.currentTrack.source || '';
			trackIdRef.current = state.currentTrack.id;
		}
		console.log('change controls');
		state.controls.play ? audioRef.current.play() : audioRef.current.pause();
	}, [state.currentTrack, state.controls]);

	const pauseTrack = () => {
		console.log('pause');
		dispatch({
			type: PAUSE_TRACK,
			payload: false
		});
	};
	const playTrack = () => {
		console.log('play');
		dispatch({
			type: PLAY_TRACK,
			payload: true
		});
	};

	const playNextTrack = () => {
		console.log('next');
		dispatch({
			type: NEXT_TRACK,
			payload: state.currentTrack.index + 1
		});
	};
	const playPrevTrack = () => {
		console.log('prev');
		dispatch({
			type: PREV_TRACK,
			payload: state.currentTrack.index - 1
		});
	};

	return (
		<Fragment>
			<header className='media-player-container'>
				<div className='artwork-container'>
					<img
						src={mockAlbumLogo}
						alt='artwork-album'
						className='artwork-album'
					/>
				</div>
				<audio
					className='media-player'
					controls
					ref={audioRef}
					onPause={pauseTrack}
					onPlay={playTrack}>
					<source crossOrigin='anonymous' src type='audio/mp3' />
				</audio>
				<div className='media-player-extra-buttons'>
					<img
						src={previousLogo}
						alt='previous'
						className='button-control-logo'
						onClick={playPrevTrack}></img>
					<img
						src={nextLogo}
						alt='next'
						className='button-control-logo'
						onClick={playNextTrack}></img>
				</div>
				<div className='current-titles'>
					<span className='text-muted'>{state.currentTrack.artist || ''}</span>
					<span>{state.currentTrack.title || ''}</span>
				</div>
			</header>
		</Fragment>
	);
};

export default MediaPlayer;
