import React from 'react';
import { Button, Table as MuiTable } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ServerResponseUserList } from '../models';

interface ITable {
	users: ServerResponseUserList[];
}

export const Table: React.FC<ITable> = ({ users }) => {
	console.log(users);
	return (
		<TableContainer component={Paper}>
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
							key={users.name}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component='th' scope='row'>
								{users.name}
							</TableCell>
							<TableCell component='th' scope='row'>
								{users.username}
							</TableCell>
							<TableCell>{users.email}</TableCell>
							<TableCell align='right'>
								<Button variant='contained'>Delete</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</MuiTable>
		</TableContainer>
	);
};
