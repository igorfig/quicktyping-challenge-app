import { useState } from 'react';

import { Container } from './styles';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider } from '../../contexts/ThemeContext';

import themes from '../../styles/themes';

import Header from '../Header';
import Main from '../Main';

export default function App() {
	const [currentTheme, setCurrentTheme] = useState(themes.dark);

   const handleSetCurrentTheme = (theme) => setCurrentTheme(theme);

   console.log(currentTheme);

	return (
		<ThemeProvider theme={currentTheme}>
			<ThemeContextProvider>
				<Container>
					<Header setCurrentTheme={handleSetCurrentTheme}/>
				<Main />
			</Container>
		</ThemeContextProvider>
			
		</ThemeProvider>
		
	)
}