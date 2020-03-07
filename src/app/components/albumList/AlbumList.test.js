import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AlbumList from './AlbumList';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from '../../store/storeContext';

test('renders the Heroes Album', () => {
	const msg = 'Heroes';
	render(
		<StoreProvider>
			<Router>
				<AlbumList>{msg}</AlbumList>
			</Router>
		</StoreProvider>
	);
	expect(screen.queryByText(msg)).toBeInTheDOM();
});

