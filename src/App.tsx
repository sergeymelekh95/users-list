import React from 'react';
import { useGetItemsQuery } from './store/usersList/usersList.api';

export const App = () => {
	const {
		isFetching: isFetchingUsers,
		isError: isErrorUsers,
		data: users,
	} = useGetItemsQuery();

	console.log(users);

	return <div className='App'>hello users list</div>;
};
