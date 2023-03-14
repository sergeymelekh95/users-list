import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models';

interface usersListState {
	users: User[];
	tableUsers: User[];
}

const initialState: usersListState = {
	users: [],
	tableUsers: [],
};

export const usersListSlice = createSlice({
	name: 'usersList',
	initialState,
	reducers: {
		setUsers(state, action: PayloadAction<User[]>) {
			state.users = action.payload;
			state.tableUsers = action.payload;
		},
		deleteUser(state, action: PayloadAction<number>) {
			state.tableUsers = state.tableUsers.filter(
				(user) => user.id !== action.payload
			);
		},
		resetFilter(state) {
			state.tableUsers = state.users;
		},
	},
});

export const usersListActions = usersListSlice.actions;
export const usersListReducer = usersListSlice.reducer;
