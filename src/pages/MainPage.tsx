import {
	Box,
	Button,
	Container,
	TextField,
	Toolbar,
	Alert,
	AlertTitle,
	LinearProgress,
	InputAdornment,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks/redux';
import { useActions } from '../hooks/useActions';
import { User } from '../models';
import { Modal } from '../components/Modal';
import SearchIcon from '@mui/icons-material/Search';
import { useGetUsersQuery } from '../store/usersList/usersList.api';
import { Table } from '../components/Table';

export const MainPage: React.FC = () => {
	const [search, setSearch] = useState<string[]>(['']);
	const [open, setOpen] = React.useState<boolean>(false);
	const [userInfo, setUserInfo] = useState<User | null>(null);

	const { currentUsers } = useAppSelector((state) => state.usersList);
	const { deleteUser, resetFilter, setUsers } = useActions();

	const {
		isFetching: isFetchingUsers,
		isError: isErrorUsers,
		data: users,
	} = useGetUsersQuery();

	const handleClose = (): void => {
		setOpen(false);
		setUserInfo(null);
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setSearch(e.target.value.split(' '));
	};

	const handleDelete = (id: number): void => {
		deleteUser(id);
	};

	const handleReset = (): void => {
		setSearch(['']);
		resetFilter();
	};

	useEffect(() => {
		if (users) {
			setUsers(users);
		}
	}, [users]);

	useEffect(() => {
		if (userInfo) {
			setOpen(true);
		}
	}, [userInfo]);

	return (
		<Container>
			{isFetchingUsers && <LinearProgress color='success' />}
			{isErrorUsers && (
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					Something was wrong <strong>try again later!</strong>
				</Alert>
			)}
			{!isErrorUsers && !isFetchingUsers && currentUsers && (
				<>
					<Box sx={{ mb: 4 }}>
						<Toolbar style={{ padding: 0 }} sx={{ display: 'flex', gap: 2 }}>
							<TextField
								size='small'
								onChange={handleSearch}
								fullWidth
								id='search'
								label='Search...'
								variant='outlined'
								value={search.join(' ')}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<SearchIcon />
										</InputAdornment>
									),
								}}
							/>
							<Button onClick={handleReset} variant='contained'>
								Reset
							</Button>
						</Toolbar>
					</Box>
					{!!currentUsers.length && (
						<Table
							currentUsers={currentUsers}
							setUserInfo={setUserInfo}
							search={search}
							handleDelete={handleDelete}
						/>
					)}
					{userInfo && (
						<Modal user={userInfo} handleClose={handleClose} open={open} />
					)}
				</>
			)}
		</Container>
	);
};
