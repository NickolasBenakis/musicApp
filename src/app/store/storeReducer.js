import { ALBUMS } from '../../api/albums';
import {
	SELECT_TRACK,
	SELECT_ALBUM,
	PAUSE_TRACK,
	PLAY_TRACK,
	NEXT_TRACK,
	PREV_TRACK,
	PERSIST_STATE
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
			const selectedTrack = state.currentAlbum.tracks.find(
				track => track.id === action.payload
			);
			if (
				Object.values(selectedTrack).length &&
				Object.values(state.currentTrack).length &&
				JSON.stringify(selectedTrack) === JSON.stringify(state.currentTrack)
			) {
				return {
					...state,
					controls: { ...state.controls, play: !state.controls.play }
				};
			} else {
				return {
					...state,
					currentTrack: selectedTrack,
					controls: { ...state.controls, play: true }
				};
			}
		case SELECT_ALBUM:
			const selectedAlbum = state.albums.find(
				album => album.id === action.payload
			);
			return { ...state, currentAlbum: selectedAlbum };
		case PLAY_TRACK:
			return {
				...state,
				controls: { ...state.controls, play: action.payload }
			};
		case PAUSE_TRACK:
			return {
				...state,
				controls: { ...state.controls, play: action.payload }
			};
		case NEXT_TRACK:
			const nextTrack = state.currentAlbum.tracks.find(
				track => track.index === action.payload
			);
			if (nextTrack === undefined) {
				return state;
			} else {
				return { ...state, currentTrack: nextTrack };
			}
		case PREV_TRACK:
			const prevTrack = state.currentAlbum.tracks.find(
				track => track.index === action.payload
			);
			if (prevTrack === undefined) {
				return state;
			} else {
				return { ...state, currentTrack: prevTrack };
			}
		case PERSIST_STATE:
			const currentAlbId = state.albums.find(
				album => album.id === action.payload
			);
			return { ...state, currentAlbum: currentAlbId };
		default:
			return state;
	}
}
