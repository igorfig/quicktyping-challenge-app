import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { ThreeDots } from 'react-loader-spinner'

import { 
	Container,
	Dots,
	Options,
	AverageContainer,
	Average,
	ImageContainer,
	Phrase,
	TypingField,
	NextPhraseButton,
	ArrowImg
} from './styles';

import typosMobImg from '../../assets/images/icons/typosMob.svg';
import accuracyImg from '../../assets/images/icons/accuracy.svg';
import charPerMinutesImg from '../../assets/images/icons/charPerMinutes.svg';
import clockImg from '../../assets/images/icons/clock.svg';
import { useTheme } from '../../hooks/useTheme';
import themes from '../../styles/themes';
import phrases from '../../data/phrases';

export default function Typing() {
	// THEME

	const { theme } = useTheme();

	/* TIMER STATES */
	const [totalSecondsAmount, setTotalSecondsAmount] = useState(60);
	const initialSecondsReference = useRef(60);
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

	const [difficulty, setDifficulty] = useState('normal');
	const [typing, setTyping] = useState('');
	const [phrase, setPhrase] = useState(phrases[difficulty][0]);
	const [hasTypo, setHasTypo] = useState(false);
	const [typosDetails, setTyposDetails] = useState([])
	const [lettersTyped, setLettersTyped] = useState(0);
	const [success, setSuccess] = useState(false);

	const typingTextAreaRef = useRef(null);

	const handleChangeDifficulty = (event) => setDifficulty(event.target.value);

	useEffect(() => {
		if(difficulty === 'hard') {
			setTotalSecondsAmount(90)
			initialSecondsReference.current = 90;
		} else if(difficulty == 'normal') {
			setTotalSecondsAmount(120);
			initialSecondsReference.current = 120;
		} else if (difficulty === 'easy') {
			setTotalSecondsAmount(60);
			initialSecondsReference.current = 60;
		}
	}, [difficulty]);

	const handleGenerateNewPhrase = useCallback(() => {
 	 const getRandomUniqueIndex = () => {
	    let randomIndex;
	    do {
	      randomIndex = Math.floor(Math.random() * phrases[difficulty].length);
	    } while (randomIndex === lastRandomIndex);
	    	lastRandomIndex = randomIndex;
	    	return randomIndex;
	  };

  	const randomIndex = getRandomUniqueIndex();

	  setPhrase('');
	  setTyping('');
	  setHasTypo(false);
	  setTyposDetails([]);
	  setLettersTyped(0);
	  setStart(false);
	  setTimeout(() => {
	    setPhrase(phrases[difficulty][randomIndex]);
	  }, 300);
	}, [phrases, difficulty]);

	let lastRandomIndex = -1;

	useEffect(() => {
		handleGenerateNewPhrase();
	}, [phrases, difficulty])

	const autoResize = (event) => {
	   	const textarea = typingTextAreaRef.current;
    	textarea.style.height = 'auto';
    	textarea.style.height = `${textarea.scrollHeight}px`;
	}

	const handleChange = (event) => {
		const typingSplitted = event.target.value.split('');
	 	const newTyposDetails = [];

		typingSplitted.forEach((letter, index) => {
			if(letter !== phrase.charAt(index)) {
				newTyposDetails.push({ typo: letter, position: index });
			} 
		})

		setTyposDetails(newTyposDetails);
  		setTyping(event.target.value);
  		autoResize();
	}

	const handleFocus = (event) => {
		setStart(true);
		typingTextAreaRef.current.placeholder = ''
	}

	const handleBlur = (event) => {
		if(start) {
			typingTextAreaRef.current.placeholder = 'Digite Aqui!';
		}
	}

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

			typingTextAreaRef.current.addEventListener('keypress', letterTypedHandler);

			return () => typingTextAreaRef.current?.removeEventListener('keypress', letterTypedHandler);
		}
	}, [start])


	const charPerMinutes = useMemo(() => {
		 const divisor = initialSecondsReference.current - totalSecondsAmount;
		return divisor === 0 ? 0 : Math.round((lettersTyped / divisor) * 60);;

	}, [lettersTyped, initialSecondsReference.current, totalSecondsAmount])


	useEffect(() => {
		if(start && phrase) {
			if(typosDetails.length === 0 && typing.length === phrase.length){ 
				setStart(false)
				setSuccess(true);
				typingTextAreaRef.current.disabled = true;
			};

			if(totalSecondsAmount === 0) {
				setStart(false)
				setSuccess(false);
				typingTextAreaRef.current.disabled = true;
			}
		}
	}, [typosDetails, typing, phrase, totalSecondsAmount])

	return (
		<Container>
			<Dots>
					<div className="red"></div>
					<div className="yellow"></div>
					<div className="green"></div>
			</Dots>

			<Options>
				<select name="difficulty" id="difficulty" value={difficulty} onChange={handleChangeDifficulty}>
					<option value="normal">Normal</option>
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
							<span>{charPerMinutes}</span>
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

			{phrase ? (
				<>
					<Phrase>
						{phrase}
					</Phrase>

					<TypingField
						ref={typingTextAreaRef}
						error={hasTypo ? 1 : 0}
						success={success ? 1 : 0}
						onChange={handleChange}
						onFocus={handleFocus}
						onBlur={handleBlur}
						value={typing}
						placeholder="CLIQUE PARA INICIAR..."
						/>
				</>
			) : (
				<ThreeDots 
					height="80" 
					width="80" 
					radius="9"
					color={themes[theme].textColor} 
					ariaLabel="three-dots-loading"
					wrapperStyle={{}}
					wrapperClassName=""
					visible={true}
				 />
			)}

			<NextPhraseButton onClick={handleGenerateNewPhrase}>
				Próxima frase
				<ArrowImg src={themes[theme].arrow} alt="Seta"/>
			</NextPhraseButton>
			
		</Container>
	)
}