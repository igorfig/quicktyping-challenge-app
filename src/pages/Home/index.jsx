import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, StartPlay, SelectsContainer, Button } from './styles';

import typeWriterBgImage from '../../assets/images/typewriter-undraw.svg';

export default function Home() {
	const [gameDifficulty, setGameDifficulty] = useState('Normal');
	const [gameMode, setGameMode] = useState('time-on');

	const handleStartGame = () => {
		console.log(gameDifficulty);
		console.log(gameMode);
	}
	return (
		<Container>
			<h2>Recursos em destaque:</h2>

			<ul>
				<li>
					🌟Supere-se com Serenidade: Ultrapasse o relógio ao digitar frases cronometradas em um ambiente tranquilo. Aumente sua velocidade e acompanhe seu progresso gradual.
				</li>

				<li>
					🌈Variedade de Níveis de Dificuldade: Escolha entre diversos níveis de dificuldade, de iniciante a especialista. Personalize o treinamento de acordo com suas habilidades e observe seu crescimento com satisfação.
				</li>

				<li>
					🌿Treinamento Livre e Calmo: Desfrute de um treinamento sem pressão de tempo. Aprimore sua técnica e explore diferentes estilos de digitação enquanto se prepara para enfrentar novos desafios.
				</li>
			</ul>

			<h2>
				Comece Agora e Desenvolva suas Habilidades de Digitação 
			</h2>

			<p> Desejamos a você uma jornada suave e produtiva de treinamento!</p>

			<img src={typeWriterBgImage} alt="" />

			<StartPlay>
				<SelectsContainer>
					<div>
						<label htmlFor="select-difficulty">Selecionar dificuldade de jogo:</label>
						<select 
							id="select-difficulty" 
							onChange={(event) => setGameDifficulty(event.target.value)}
							>
								<option value="normal">Normal</option>
								<option value="easy">Fácil</option>
								<option value="hard">Díficil</option>
						</select>
					</div>

					<div>
						<label htmlFor="select-game-mode">
							Selecionar modo de jogo:
						</label>

						<select 
							id="select-game-mode"
							onChange={(event) => setGameMode(event.target.value)}
							>
								<option value="time-on">🌟 Treinamento cronometrado</option>
								<option value="time-off">🌿 Treinamento Livre</option>
						</select>
					</div>
				</SelectsContainer>

				<Button to={'/jogo'} onClick={handleStartGame}>Iniciar treinamento</Button>
			</StartPlay>
		</Container>
	)
}