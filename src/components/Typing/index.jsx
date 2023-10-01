import { useState, useEffect, useCallback, useMemo } from 'react';

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
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [start])

	/* TYPING STATES*/

	const [typing, setTyping] = useState('');
	const [phrase, setPhrase] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eligendi accusantium, adipisci fugit eos provident aliquid excepturi quos fugiat itaque voluptates voluptate eaque, culpa harum sit incidunt sapiente pariatur recusandae.');
	const [hasTypo, setHasTypo] = useState(false);
	const [typosDetails, setTyposDetails] = useState([])
	const [lettersTyped, setLettersTyped] = useState(0);

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

	// Typing Average 
	const typingAccuracy = useMemo(() => {
		return (typing.length - typosDetails.length) * 100 / typing.length || 0;
	}, [typosDetails, typing])
	
	useEffect(() => {
		if(start) {
			const letterTypedHandler = () => {
				setLettersTyped(prevState => prevState + 1);
			}

			window.addEventListener('keypress', letterTypedHandler);

			return () => window.removeEventListener('keypress', letterTypedHandler);
		}
	}, [start])


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
								<span>
									{Math.floor(totalSecondsAmount / 60).toString().padStart(2, "0")} 
									: 
									{(totalSecondsAmount % 60).toString().padStart(2, "0")}</span>
								<small>Cronômetro</small>
							</div>
				</Average>

				<Average>
						<ImageContainer>
							<img src={charPerMinutesImg} alt="Caracteres por minuto" />
						</ImageContainer>
						<div>
							<span>{Math.round((lettersTyped / (120 - totalSecondsAmount)) * 60) || 0}</span>
							<small>caract/min</small>
						</div>
				</Average>

				<Average>
					<ImageContainer>
						<img src={accuracyImg} alt="Precisão de acertos" />
					</ImageContainer>
					<div>
						<span>{typingAccuracy.toFixed(1)} %</span>
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

			<button onClick={() => setStart(prevState => !prevState)}>START</button> {/* TIMER HANDLER TEST */}
		</Container>
	)
}