import { useState } from 'react';
import { Container, 
	Section, 
	Subtitle, 
	Description, 
	TypingLink, 
	Illustration, 
	CardsContainer, 
	Card, 
	CardTitle, 
	CardDescription, 
	StartLearn, 
	ButtonContainer,
	Phrase
} from './styles';
import { useTheme } from '../../hooks/useTheme';
import themes from '../../styles/themes';
import Typing from '../../components/Typing';
import Footer from '../../components/Footer';

export default function Home() {
	const { theme } = useTheme();
	return (
		<Container>

			<Section>
				<Subtitle>Metodologia Ágil</Subtitle>
				<Description>Os usuários escolhem um nível de dificuldade, iniciam o cronômetro e digitam as frases o mais rápido e precisamente possível. O sistema avalia seu desempenho, te fornecendo em dados sua média de caracteres por minuto, erros e porcentagem de acerto.</Description>
			</Section>

			<Section>
				<Subtitle>Principais funcionalidades</Subtitle>
				<Description>
					Seleção de níveis de dificuldade, variando de fácil a difícil.
					<br />
					Um cronômetro para medir o tempo de digitação.
					<br />
					Uma ampla variedade de frases para prática.
					<br />
					Acompanhamento do progresso do usuário, incluindo palavras por minuto (WPM).
				</Description>
			</Section>	

			<TypingLink to="#">
				<img src={themes[theme].rocket} alt="" />
				COMEÇAR A PRATICAR
			</TypingLink>

			<Section>
				<Description>
					O propósito fundamental da nossa aplicação é capacitar os usuários a se tornarem mestres da digitação, 
					aprimorando suas habilidades para que possam não apenas escrever com precisão, mas também com notável rapidez.
				</Description>

				<Illustration src={themes[theme].laptopImg} alt="Ilustração" />
			</Section>

			<Subtitle>Níveis de dificuldade</Subtitle>

			<CardsContainer>
				

				<Card>
					<CardTitle>Fácil</CardTitle>
					<CardDescription>
						O nível de dificuldade fácil é projetado para iniciantes que desejam melhorar suas habilidades de digitação de maneira gradual. Neste nível, os usuários encontrarão um cronômetro configurado para um minuto, tornando a prática mais acessível e controlada. Além disso, as frases utilizadas são mais curtas, permitindo que os iniciantes se familiarizem com o treinamento de digitação de forma mais suave.
					</CardDescription>
				</Card>
				<Card className="translate">
					<CardTitle>Normal</CardTitle>
					<CardDescription>
						O nível de dificuldade normal é projetado para usuários intermediários que desejam aprimorar suas habilidades de digitação em um ambiente desafiador, 
						mas gerenciável. Neste nível, os usuários encontrarão um cronômetro configurado para um período de 2 minutos, 
						permitindo mais tempo para a prática. As frases apresentadas são de comprimento moderado, oferecendo um equilíbrio entre desafio e acessibilidade.
					</CardDescription>
				</Card>
				<Card>
					<CardTitle>Díficil</CardTitle>
					<CardDescription>
						O nível de dificuldade difícil é direcionado a usuários avançados que buscam um desafio considerável para aprimorar suas habilidades de digitação. Neste nível, os usuários enfrentarão um cronômetro configurado para 1 minuto e 30 segundos, o que exige um desempenho rápido e preciso. As frases apresentadas são complexas e desafiadoras, projetadas para testar e aprimorar as habilidades de digitação dos usuários em situações de alta pressão.
					</CardDescription>
				</Card>
			</CardsContainer>

			<Section>
				<Subtitle>Comece agora</Subtitle>
				<Description>
					Inicie sua jornada de aprendizado clicando no botão abaixo. Você será redirecionado para o campo de digitação para poder iniciar imediatamente os treinos!
				</Description>

				<StartLearn>
					<ButtonContainer>
						<TypingLink>
							<img src={themes[theme].rocket} alt="" />
							QUERO APRENDER!
						</TypingLink>

						<Phrase>"Cada pequeno passo que você dá em direção ao aprendizado é um grande salto em direção ao seu potencial ilimitado. Continue aprendendo, continue crescendo e nunca subestime o poder da educação em sua jornada para o sucesso."</Phrase>
					</ButtonContainer>

					<Illustration src={themes[theme].goodJobImg} alt="Ilustração" />
				</StartLearn>
			</Section>	
			{/*<Typing />*/}
			<Footer>
				<span>Desenvolvido por Igor Figueiredo &lt;3 </span>
			 	<a target="__blank" href="https://instagram.com/igufs123">@igufs123</a>
				<a href="https://storyset.com/work">Work illustrations by Storyset</a>
				<a href="https://storyset.com/people">People illustrations by Storyset</a>
			</Footer>

		</Container>
	)
}