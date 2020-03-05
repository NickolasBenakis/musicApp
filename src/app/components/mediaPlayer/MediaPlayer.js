import React, { Fragment } from 'react';
import './MediaPlayer.scss';
import nextLogo from '../../../theme/next.svg';
import previousLogo from '../../../theme/previous.svg';
import mockAlbumLogo from '../../../theme/album.svg';
const MediaPlayer = () => {
	const audioRef = React.useRef(null);

	const pauseTrack = () => {
		console.log('pause');
	};
	const playTrack = () => {
		console.log('play');
	};

	const playNextTrack = () => {
		console.log('next');
	};
	const playPrevTrack = () => {
		console.log('prev');
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
			</header>
		</Fragment>
	);
};

export default MediaPlayer;
