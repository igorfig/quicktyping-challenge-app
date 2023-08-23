import { useEffect, useMemo } from 'react';
import { Container } from './styles';
import { useTheme } from '../../hooks/useTheme';
import themes from '../../styles/themes';

export default function Header({ setCurrentTheme }) {
	const { theme, handleToggleTheme } = useTheme(); 

	const currentTheme = useMemo(() => {
		return themes[theme];
	}, [theme])

	useEffect(() => {
		setCurrentTheme(currentTheme)
	}, [currentTheme]);

	console.log(currentTheme);
	return(
		<Container>
			<h1>QuickType <span>Challenge</span></h1>
			<button onClick={handleToggleTheme}>Tema</button>
			<p>
				Domine a arte da digitação rápida e precisa com o <span>QuickType Challenge</span>, 
				a sua ferramenta de treinamento de digitação definitiva. 
				Seja você um iniciante buscando aprimorar suas habilidades ou um digitador experiente em busca de desafios.
			</p>

		</Container>
		
	)
}