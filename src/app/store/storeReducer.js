import { ALBUMS } from '../../api/albums';
import {
	SELECT_TRACK,
	SELECT_ALBUM,
	PAUSE_TRACK,
	PLAY_TRACK,
	NEXT_TRACK,
	PREV_TRACK
} from './index';

export const initialState = {
	currentTrack: {
		id: '',
		title: '',
		artist: '',
		genre: '',
		source: '',
		photo: ''
	},
	currentAlbum: {
		id: '',
		title: '',
		artist: '',
		photo: '',
		tracks: []
	},
	controls: {
		play: false
	},
	albums: ALBUMS
};

export function reducer(state, action) {
	switch (action.type) {
		case SELECT_TRACK:
		case SELECT_ALBUM:
			const album = state.albums.find(album => album.id === action.payload);
			return { ...state, currentAlbum: album };
		case PLAY_TRACK:
		case PAUSE_TRACK:
		case NEXT_TRACK:
		case PREV_TRACK:
		default:
			return state;
	}
}
