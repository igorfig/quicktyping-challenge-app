import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Container, Title, Time, ToggleButton, ToggleArrow, ClockButton } from './styles';
import { useTheme } from '../../hooks/useTheme';
import themes from '../../styles/themes';

export default function Timer({ difficulty }) {
	const timerPerDifficulty = {
		easy: 180, // 3 minutes in seconds;
		normal: 60, // 2 minutes in seconds;
		hard: 60 // 1 minutes in seconds
	}

	
	const [isTimeHide, setIsTimeHide] = useState(true);
	const [minutes, setMinutes] = useState((timerPerDifficulty[difficulty] / 60) < 1 ? 0 : timerPerDifficulty[difficulty] / 60);
	const [seconds,setSeconds] = useState(timerPerDifficulty[difficulty] < 60 ? timerPerDifficulty[difficulty] : 0 );
	const [totalSecondsAmount, setTotalSecondsAmount] = useState(timerPerDifficulty[difficulty]);
	const [start, setStart] = useState(false);
  	const didMountRef = useRef(false);

  	const { theme } = useTheme();

  	useLayoutEffect(() => {
	    if (!didMountRef.current) {
	     	didMountRef.current = true;
	    }
  	}, [isTimeHide]);

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
		<>
			{didMountRef.current && (
				<Container className={isTimeHide ? 'hide' : 'active'}>
					<Title>
						⏰ Cronômetro
					</Title>
					
					<Time> {minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")}</Time>

					<ToggleButton onClick={() => setIsTimeHide(true)}>
						<ToggleArrow src={themes[theme].timerArrow} alt="Fechar/Abrir" transform={true} />
					</ToggleButton>
				</Container>
			)}

			{isTimeHide && <ClockButton onClick={() => setIsTimeHide(false)}>
				<ToggleArrow src={themes[theme].timerArrow} alt="" />
			</ClockButton>}
		</>
	)
}