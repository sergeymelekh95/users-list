import React from 'react';
import { Table } from './components/Table';
import { useGetItemsQuery } from './store/usersList/usersList.api';

export const App = () => {
	const {
		isFetching: isFetchingUsers,
		isError: isErrorUsers,
		data: users,
	} = useGetItemsQuery();

	return <div className='App'>{users && <Table users={users} />}</div>;
};
