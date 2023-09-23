import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, HomepageLink } from './styles';
import { useTheme } from '../../hooks/useTheme';
import themes from '../../styles/themes';

export default function Header({ setCurrentTheme }) {
	const { theme, handleToggleTheme } = useTheme(); 
	const location = useLocation();

	const currentTheme = useMemo(() => {
		return themes[theme];
	}, [theme])

	useEffect(() => {
		setCurrentTheme(currentTheme);
	}, [currentTheme]);

	console.log(location.pathname);

	return(
		<Container>
			{ location.pathname === '/jogo' && (
				<HomepageLink to="/" >
					<img src={themes[theme].backArrow} alt="Homepage" />
				</HomepageLink>
			) }
			<h1>QuickTyping <span>Challenge</span></h1>
			<button onClick={handleToggleTheme}>{theme === 'dark' ? '🌞' : '🌚'}</button>
			{location.pathname !== '/jogo' && (<p>
				Domine a arte da digitação rápida e precisa com o <span>QuickTyping Challenge</span>, 
				a sua ferramenta de treinamento de digitação definitiva. 
				Seja você um iniciante buscando aprimorar suas habilidades ou um digitador experiente em busca de desafios.
			</p>)}

		</Container>
	)
}