import {
	Box,
	Button,
	Container,
	Link,
	Table as MuiTable,
	TextField,
	Toolbar,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { useAppSelector } from '../hooks/redux';
import { useActions } from '../hooks/useActions';
import { User } from '../models';
import { Modal } from '../components/Modal';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { useGetItemsQuery } from '../store/usersList/usersList.api';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	backgroundColor: theme.palette.action.hover,
}));

export const MainPage: React.FC = () => {
	const [search, setSearch] = useState<string[]>(['']);
	const [open, setOpen] = React.useState(false);
	const [clickedUser, setClickedUser] = useState<User | null>(null);

	const { tableUsers } = useAppSelector((state) => state.usersList);
	const { deleteUser, resetFilter, setUsers } = useActions();

	const {
		isFetching: isFetchingUsers,
		isError: isErrorUsers,
		data: users,
	} = useGetItemsQuery();

	const handleClose = (): void => {
		setOpen(false);
		setClickedUser(null);
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
		if (clickedUser) {
			setOpen(true);
		}
	}, [clickedUser]);

	console.log('main page');

	return (
		<Container>
			{tableUsers && (
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
					{!!tableUsers.length && (
						<TableContainer sx={{ mb: 4 }} component={Paper}>
							<MuiTable
								sx={{ minWidth: 700 }}
								size='small'
								aria-label='simple table'
							>
								<TableHead sx={{ backgroundColor: 'background.paper' }}>
									<StyledTableRow>
										<TableCell>Name</TableCell>
										<TableCell>Username</TableCell>
										<TableCell>Email</TableCell>
										<TableCell></TableCell>
									</StyledTableRow>
								</TableHead>
								<TableBody>
									{tableUsers.map((user) => (
										<TableRow
											key={user.id}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell component='th' scope='row'>
												<Link
													onClick={() => setClickedUser(user)}
													component='button'
													variant='body2'
												>
													<Highlighter
														searchWords={[...search]}
														autoEscape={true}
														textToHighlight={user.name}
													/>
												</Link>
											</TableCell>
											<TableCell component='th' scope='row'>
												<Highlighter
													searchWords={[...search]}
													autoEscape={true}
													textToHighlight={user.username}
												/>
											</TableCell>
											<TableCell>
												<Highlighter
													searchWords={[...search]}
													autoEscape={true}
													textToHighlight={user.email}
												/>
											</TableCell>
											<TableCell align='right'>
												<Button
													onClick={() => handleDelete(user.id)}
													variant='outlined'
													size='small'
												>
													Delete
												</Button>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</MuiTable>
						</TableContainer>
					)}
					{clickedUser && (
						<Modal user={clickedUser} handleClose={handleClose} open={open} />
					)}
				</>
			)}
		</Container>
	);
};
