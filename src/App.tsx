import { Container } from '@mui/material';
import React from 'react';
import { Header } from './components/Header';
import { Table } from './components/Table';
import { useGetItemsQuery } from './store/usersList/usersList.api';

export const App = () => {
	const {
		isFetching: isFetchingUsers,
		isError: isErrorUsers,
		data: users,
	} = useGetItemsQuery();

	return (
		<>
			<Header />
			<Container>{users && <Table users={users} />}</Container>
		</>
	);
};
