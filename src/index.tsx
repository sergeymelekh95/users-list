import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { App } from './App';
import './index.css';

const theme = createTheme({
	palette: {
		primary: {
			main: '#366fa1',
		},
	},
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
);
