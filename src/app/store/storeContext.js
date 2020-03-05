import React from 'react';
import { initialState, reducer } from './storeReducer';
export const Store = React.createContext();

export function StoreProvider({ children }) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);
	return <Store.Provider value={value}>{children}</Store.Provider>;
}
