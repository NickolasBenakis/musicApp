import React, { Fragment } from 'react';
import { Store } from '../../store/storeContext';
import { Link } from 'react-router-dom';
import './Album.scss';
import { SELECT_ALBUM } from '../../store/index';

const Album = ({ album }) => {
	const { dispatch } = React.useContext(Store);

	const handleClick = e => {
		dispatch({
			type: SELECT_ALBUM,
			payload: album.id
		});
	};
	return (
		<Fragment>
			<div className='card album'>
				<img src={album.photo} className='card-img-top' alt='album_photo' />
				<div className='card-body'>
					<h5 className='card-title'>{album.title}</h5>
					<Link
						to={`details?id=${album.id}`}
						className='btn btn-primary'
						onClick={handleClick}>
						More details
					</Link>
				</div>
			</div>
		</Fragment>
	);
};

export default React.memo(Album);
