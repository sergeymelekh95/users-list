import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface usersListState {}

const initialState: usersListState = {};

export const usersListSlice = createSlice({
	name: 'usersList',
	initialState,
	reducers: {
		// setItems(state, action: PayloadAction<any>) {},
	},
});

export const usersListActions = usersListSlice.actions;
export const usersListReducer = usersListSlice.reducer;
