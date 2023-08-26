import {  
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

import { ThemeContextProvider } from '../contexts/ThemeContext';

import Header from '../components/Header';
import Home from '../pages/Home';
import GameWindow from '../pages/GameWindow';

export default function AppRoutes({ setCurrentTheme }) {
	return (
		<Router>
			<ThemeContextProvider>
				<Header setCurrentTheme={setCurrentTheme} />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/jogo" element={<GameWindow />} />
				</Routes>
			</ThemeContextProvider>
		</Router>
	)
}