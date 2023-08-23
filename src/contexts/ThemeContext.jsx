import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		const selectedTheme = JSON.parse(localStorage.getItem('@theme'));

		return selectedTheme || 'dark';
	});

	const handleToggleTheme = () => setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');

	useEffect(() => {
		localStorage.setItem('@theme', JSON.stringify(theme))
		console.log(theme);
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, handleToggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}