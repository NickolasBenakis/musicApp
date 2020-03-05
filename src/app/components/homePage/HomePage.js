import React, { Fragment } from 'react';
import './HomePage.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlbumList from '../albumList/AlbumList';
import Details from '../details/Details';

const HomePage = () => {
	return (
		<Fragment>
			<main className='main'>
				<section className='main__section container-fluid'>
					<Router>
						<Switch>
							<Route path='/' exact component={AlbumList} />
							<Route path='/details' exact component={Details} />
						</Switch>
					</Router>
				</section>
			</main>
		</Fragment>
	);
};

export default HomePage;
