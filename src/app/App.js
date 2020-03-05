import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MediaPlayer from './components/mediaPlayer/MediaPlayer';
import HomePage from './components/homePage/HomePage';
import { StoreProvider } from './store/storeContext';

function App() {
	return (
		<div className='App'>
			<StoreProvider>
				<Router>
					<Route
						path='/'
						render={() => (
							<Fragment>
								<MediaPlayer />
								<HomePage />
							</Fragment>
						)}
					/>
				</Router>
			</StoreProvider>
		</div>
	);
}

export default App;
