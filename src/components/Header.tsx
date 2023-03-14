import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

export const Header: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1, mb: 3 }}>
			<AppBar position='static'>
				<Container>
					<Toolbar style={{ padding: 0 }}>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							Users list
						</Typography>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};
