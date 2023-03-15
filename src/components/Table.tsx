import React from 'react';
import {
	Button,
	Link,
	Table as MuiTable,
	Paper,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Highlighter from 'react-highlight-words';
import { User } from '../models';

interface ITable {
	currentUsers: User[];
	setUserInfo: (user: User) => void;
	search: string[];
	handleDelete: (id: number) => void;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	backgroundColor: theme.palette.action.hover,
}));

export const Table: React.FC<ITable> = ({
	currentUsers,
	setUserInfo,
	search,
	handleDelete,
}) => {
	return (
		<TableContainer sx={{ mb: 4 }} component={Paper}>
			<MuiTable sx={{ minWidth: 700 }} size='small' aria-label='simple table'>
				<TableHead sx={{ backgroundColor: 'background.paper' }}>
					<StyledTableRow>
						<TableCell>Name</TableCell>
						<TableCell>Username</TableCell>
						<TableCell>Email</TableCell>
						<TableCell></TableCell>
					</StyledTableRow>
				</TableHead>
				<TableBody>
					{currentUsers.map((user) => (
						<TableRow
							key={user.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell>
								<Link
									onClick={() => setUserInfo(user)}
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
							<TableCell>
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
	);
};
