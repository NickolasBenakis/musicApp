import React from 'react';
import { initialState, reducer } from './storeReducer';
import { PERSIST_STATE } from './index';
export const Store = React.createContext();

export function StoreProvider({ children }) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);
	React.useEffect(() => {
		if (window.location.search.substring(4).length) {
			dispatch({
				type: PERSIST_STATE,
				payload: window.location.search.substring(4)
			});
		}
	}, []);
	return <Store.Provider value={value}>{children}</Store.Provider>;
}
