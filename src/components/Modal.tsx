import { Avatar, Box, Link, Modal as MuiModal } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { styled } from '@mui/material/styles';
import { User } from '../models';

const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: 350,
	width: '100%',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
};

const textStyle = {
	mb: 1,
	fontSize: 12,
	color: 'text.secondary',
};

interface IModal {
	handleClose: () => void;
	open: boolean;
	user: User;
}

const StyledBox = styled('div')({
	display: 'flex',
	justifyContent: 'start',
	alignItems: 'center',
	marginBottom: 20,
});

export const Modal: React.FC<IModal> = ({ handleClose, open, user }) => {
	const { name, email, phone, website, address, company } = user;

	console.log('modal render');

	return (
		<div>
			<MuiModal open={open} onClose={handleClose}>
				<Box sx={modalStyle}>
					<StyledBox>
						<Avatar sx={{ mr: 2 }} />
						<Box>
							<Typography variant='h6'>{name}</Typography>
							<Link href={`mailto:${email}`} sx={{ fontSize: 14 }}>
								{email}
							</Link>
						</Box>
					</StyledBox>
					<Typography sx={textStyle}>Company: {company.name}</Typography>
					<Typography sx={textStyle}>
						Address: {address.city}, {address.street}
					</Typography>
					<Typography sx={textStyle}>
						Phone:{' '}
						<Link sx={{ ml: 1 }} href={`tel:${phone}`}>
							{phone}
						</Link>
					</Typography>
					<Typography sx={{ mb: 1, fontSize: 12 }} color='text.secondary'>
						Website:
						<Link sx={{ ml: 1 }} target='_blank' href={`https://${website}`}>
							{website}
						</Link>
					</Typography>
				</Box>
			</MuiModal>
		</div>
	);
};
