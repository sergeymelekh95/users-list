import { configureStore } from '@reduxjs/toolkit';
import { usersListApi } from './usersList/usersList.api';
import { usersListReducer } from './usersList/usersList.slice';

export const store = configureStore({
	reducer: {
		[usersListApi.reducerPath]: usersListApi.reducer,
		usersList: usersListReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersListApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
