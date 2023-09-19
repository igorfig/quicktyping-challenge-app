import { useState, useEffect } from 'react';
import { Container } from './styles';

export default function Timer({ difficulty }) {
	const timerPerDifficulty = {
		easy: 180, // 3 minutes in seconds;
		normal: 60, // 2 minutes in seconds;
		hard: 60 // 1 minutes in seconds
	}

	const [minutes, setMinutes] = useState((timerPerDifficulty[difficulty] / 60) < 1 ? 0 : timerPerDifficulty[difficulty] / 60);
	const [seconds,setSeconds] = useState(timerPerDifficulty[difficulty] < 60 ? timerPerDifficulty[difficulty] : 0 );
	const [totalSecondsAmount, setTotalSecondsAmount] = useState(timerPerDifficulty[difficulty]);
	const [start, setStart] = useState(false);

	useEffect(() => {
		if(totalSecondsAmount === 0) {
			setStart(false);
		}
	}, [totalSecondsAmount]) 

	useEffect(() => {
		if(start) {
			const interval = setInterval(() => {
				setTotalSecondsAmount(prevState => prevState - 1);

				setSeconds(prevState => prevState > 0 ? prevState - 1 : 59);

				if(seconds === 0 && minutes > 0) {
					setMinutes(prevState => prevState - 1);
				}

				}, 1000);

			return () => clearInterval(interval);
		}
	})

	return (
		<Container>
			
			{minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")}	

			<button onClick={() => setStart(prevState => totalSecondsAmount > 0 && !prevState)}>Iniciar / Pausar</button>
		</Container>
	)
}