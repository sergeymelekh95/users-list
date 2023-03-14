import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Item } from '../../models';

interface usersListState {}

const initialState: usersListState = {};

export const usersListSlice = createSlice({
	name: 'usersList',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<any>) {},
	},
});

export const usersListActions = usersListSlice.actions;
export const usersListReducer = usersListSlice.reducer;
