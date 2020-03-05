import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './AlbumDetails.scss';
import TrackList from '../trackList/TrackList';

const Details = () => {
	return (
		<Fragment>
			<Link to='/'>
				<button className='btn btn-primary float-left ml-45'>Back</button>
			</Link>
			<div className='container card-group'>
				<div className='card card-boy'>
					<TrackList />
				</div>
			</div>
		</Fragment>
	);
};

export default Details;
