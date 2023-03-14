import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
// import { ServerResponseItems } from '../../models';

export const usersListApi = createApi({
	reducerPath: 'usersList/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	endpoints: (build) => ({
		getItems: build.query<any, void>({
			query: () => ({
				url: 'users',
			}),
		}),
	}),
});

export const { useGetItemsQuery } = usersListApi;
