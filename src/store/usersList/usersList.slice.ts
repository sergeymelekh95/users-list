import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models';

interface usersListState {
	initialUsers: User[];
	currentUsers: User[];
}

const initialState: usersListState = {
	initialUsers: [],
	currentUsers: [],
};

export const usersListSlice = createSlice({
	name: 'usersList',
	initialState,
	reducers: {
		setUsers(state, action: PayloadAction<User[]>) {
			state.initialUsers = action.payload;
			state.currentUsers = action.payload;
		},
		deleteUser(state, action: PayloadAction<number>) {
			state.currentUsers = state.currentUsers.filter(
				(user) => user.id !== action.payload
			);
		},
		resetFilter(state) {
			state.currentUsers = state.initialUsers;
		},
	},
});

export const usersListActions = usersListSlice.actions;
export const usersListReducer = usersListSlice.reducer;
