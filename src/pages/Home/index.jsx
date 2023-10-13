import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, StartPlay, SelectsContainer, Button } from './styles';
import Typing from '../../components/Typing';

export default function Home() {
	const [gameDifficulty, setGameDifficulty] = useState('Normal');
	const [gameMode, setGameMode] = useState('time-on');

	const handleStartGame = () => {
		console.log(gameDifficulty);
		console.log(gameMode);
	}
	return (
		<Container>
			<Typing />
			<footer><a href="https://www.freepik.com/free-vector/typing-concept-illustration_10915594.htm#query=typing&position=1&from_view=search&track=sph">Image by storyset</a> on Freepik</footer>
		</Container>
	)
}