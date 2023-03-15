import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { User } from '../../models';

export const usersListApi = createApi({
	reducerPath: 'usersList/api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BASE_URL,
	}),
	endpoints: (build) => ({
		getUsers: build.query<User[], void>({
			query: () => ({
				url: 'users',
			}),
		}),
	}),
});

export const { useGetUsersQuery } = usersListApi;
