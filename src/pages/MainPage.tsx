import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Table } from '../components/Table';
import { useActions } from '../hooks/useActions';
import { useGetItemsQuery } from '../store/usersList/usersList.api';

export const MainPage: React.FC = () => {
	const { setUsers } = useActions();

	const {
		isFetching: isFetchingUsers,
		isError: isErrorUsers,
		data: users,
	} = useGetItemsQuery();

	//when query only
	useEffect(() => {
		if (users) {
			setUsers(users);
		}
	}, [users]);

	return <Container>{users && <Table />}</Container>;
};
