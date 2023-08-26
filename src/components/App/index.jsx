import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';

import themes from '../../styles/themes';

import GlobalStyles from '../../styles/global';
import AppRoutes from '../../routes';

export default function App() {
	const [currentTheme, setCurrentTheme] = useState(themes.dark);

   	const handleSetCurrentTheme = (theme) => setCurrentTheme(theme);
	return (
		<ThemeProvider theme={currentTheme}>
			<Container>
				<GlobalStyles />
				<AppRoutes setCurrentTheme={handleSetCurrentTheme}/>
			</Container>
		</ThemeProvider>
		
	)
}