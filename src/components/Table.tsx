import React, { useState } from 'react';
import {
	Box,
	Button,
	Table as MuiTable,
	TextField,
	Toolbar,
} from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User } from '../models';
import Highlighter from 'react-highlight-words';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/redux';

interface ITable {
	users: User[];
}

export const Table: React.FC<ITable> = ({ users }) => {
	const [search, setSearch] = useState<string[]>(['']);
	const { tableUsers } = useAppSelector((state) => state.usersList);
	const { deleteUser, resetFilter } = useActions();

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

	return (
		<>
			<Box sx={{ mb: 4 }}>
				<Toolbar style={{ padding: 0 }} sx={{ display: 'flex', gap: 2 }}>
					<TextField
						onChange={handleSearch}
						fullWidth
						id='search'
						label='Search...'
						variant='outlined'
						value={search.join(' ')}
					/>
					<Button onClick={handleReset} variant='contained'>
						Reset
					</Button>
				</Toolbar>
			</Box>
			<TableContainer sx={{ mb: 4 }} component={Paper}>
				<MuiTable sx={{ minWidth: 700 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Username</TableCell>
							<TableCell>Email</TableCell>
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tableUsers.map((user) => (
							<TableRow
								key={user.email}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									<Highlighter
										searchWords={[...search]}
										autoEscape={true}
										textToHighlight={user.name}
									/>
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
										variant='contained'
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</MuiTable>
			</TableContainer>
		</>
	);
};
