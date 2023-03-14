import { Container } from '@mui/material';
import React from 'react';
import { Table } from '../components/Table';
import { useGetItemsQuery } from '../store/usersList/usersList.api';

export const MainPage: React.FC = () => {
	const {
		isFetching: isFetchingUsers,
		isError: isErrorUsers,
		data: users,
	} = useGetItemsQuery();

	return <Container>{users && <Table users={users} />}</Container>;
};
