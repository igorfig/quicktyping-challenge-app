import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { 
	Container, 
	TitleContainer, 
	Title,
	Description,
	Image,
	HomepageLink 
} from './styles';
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
			<button onClick={handleToggleTheme}>{theme === 'dark' ? '🌞' : '🌚'}</button>
			<TitleContainer>
				<Title>QuickTyping <span>Challenge</span></Title>			
				<Description>
					Domine a arte da digitação rápida e precisa com o <span>QuickTyping Challenge</span>, 
					a sua ferramenta de treinamento de digitação definitiva. 
					Seja você um iniciante buscando aprimorar suas habilidades ou um digitador experiente em busca de desafios.
				</Description>
			</TitleContainer>

			<Image src={themes[theme].typingIllustration} href="illustration"/>
		</Container>
	)
}