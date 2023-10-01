import { useState, useEffect, useCallback } from 'react';

import { 
	Container,
	Dots,
	Options,
	AverageContainer,
	Average,
	ImageContainer,
	Phrase,
	TypingField
} from './styles';

import typosMobImg from '../../assets/images/icons/typosMob.svg';
import accuracyImg from '../../assets/images/icons/accuracy.svg';
import charPerMinutesImg from '../../assets/images/icons/charPerMinutes.svg';
import clockImg from '../../assets/images/icons/clock.svg';

export default function Typing() {

	/* TIMER STATES */
	const [minutes, setMinutes] = useState(120 / 60);
	const [seconds,setSeconds] = useState(0);
	const [totalSecondsAmount, setTotalSecondsAmount] = useState(120);
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

	/* TYPING STATES*/

	const [typing, setTyping] = useState('');
	const [phrase, setPhrase] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eligendi accusantium, adipisci fugit eos provident aliquid excepturi quos fugiat itaque voluptates voluptate eaque, culpa harum sit incidunt sapiente pariatur recusandae.');
	const [hasTypo, setHasTypo] = useState(false);
	const [typosDetails, setTyposDetails] = useState([])
	// const verifyTyping = (typing) => phrase.charAt(typing?.length - 1) !== typing.charAt(typing?.length - 1);

	const handleChange = useCallback((event) => {
		const typingSplitted = event.target.value.split('');
	 	const newTyposDetails = [];

		typingSplitted.forEach((letter, index) => {
			if(letter !== phrase.charAt(index)) {
				newTyposDetails.push({ typo: letter, position: index });
			} 
		})

		setTyposDetails(newTyposDetails);
  		setTyping(event.target.value);
	}, [typing, phrase]);

	useEffect(() => {
		if(typosDetails.length > 0) {
			setHasTypo(true);
		} else {
			setHasTypo(false);
		}
	}, [typosDetails])

	useEffect(() => {
		const typosFixed =  typosDetails.filter(
    		typo => typing.charAt(typo.position) !== phrase.charAt(typo.position)
	 	);

		setTyposDetails(typosFixed);
	}, [typing, phrase]);

	return (
		<Container>
			<Dots>
					<div className="red"></div>
					<div className="yellow"></div>
					<div className="green"></div>
			</Dots>

			<Options>
				<select name="difficulty" id="difficulty">
					<option value="Normal">Normal</option>
					<option value="easy">Fácil</option>
					<option value="hard">Díficil</option>
				</select>
			</Options>

			<AverageContainer>
				<Average>
							<ImageContainer>
								<img src={clockImg} alt="Cronômetro" />
							</ImageContainer>
							<div>
								<span>{minutes.toString().padStart(2, "0")} : {seconds.toString().padStart(2, "0")}</span>
								<small>Cronômetro</small>
							</div>
				</Average>

				<Average>
						<ImageContainer>
							<img src={charPerMinutesImg} alt="Caracteres por minuto" />
						</ImageContainer>
						<div>
							<span>39</span>
							<small>caract/min</small>
						</div>
				</Average>

				<Average>
					<ImageContainer>
						<img src={accuracyImg} alt="Precisão de acertos" />
					</ImageContainer>
					<div>
						<span>100%</span>
						<small>Acertos</small>
					</div>
				</Average>

				<Average>
					<ImageContainer>
						<img src={typosMobImg} alt="Erros de digitação" />
					</ImageContainer>
					<div>
						<span>{typosDetails?.length}</span>
						<small>Erros</small>
					</div>
				</Average>
			</AverageContainer>

			<Phrase>
				{phrase}
			</Phrase>

			<TypingField 
				error={hasTypo ? 1 : 0}
				onChange={handleChange}
				value={typing}
				placeholder="Aqui vai a frase..."/>
		</Container>
	)
}