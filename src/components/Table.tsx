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
import { ServerResponseUserList } from '../models';
import Highlighter from 'react-highlight-words';

interface ITable {
	users: ServerResponseUserList[];
}

export const Table: React.FC<ITable> = ({ users }) => {
	const [search, setSearch] = useState<string[]>(['']);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value.split(' '));
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
					/>
					<Button variant='contained'>Reset</Button>
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
						{users.map((users) => (
							<TableRow
								key={users.email}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									<Highlighter
										searchWords={[...search]}
										autoEscape={true}
										textToHighlight={users.name}
									/>
								</TableCell>
								<TableCell component='th' scope='row'>
									<Highlighter
										searchWords={[...search]}
										autoEscape={true}
										textToHighlight={users.username}
									/>
								</TableCell>
								<TableCell>
									<Highlighter
										searchWords={[...search]}
										autoEscape={true}
										textToHighlight={users.email}
									/>
								</TableCell>
								<TableCell align='right'>
									<Button variant='contained'>Delete</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</MuiTable>
			</TableContainer>
		</>
	);
};
