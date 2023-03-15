import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
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
