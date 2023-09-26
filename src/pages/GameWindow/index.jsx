import { useState } from 'react';
import { Container } from './styles';

import Timer from '../../components/Timer';
import Typing from '../../components/TypingContainer';

export default function GameWindow() {
	const defaultPhrase = 'Digite Aqui!';
	const [text, setText] = useState(defaultPhrase);
	const [phrase, setPhrase] = useState('Lorem');
	const [hasTypoError, setHasTypoError] = useState(false);

	const verifyTyping = (typing) => phrase.charAt(typing?.length - 1) !== typing.charAt(typing?.length - 1);

	const handleChange = (event) => {
		setText(event.target.value);
		
		if(verifyTyping(event.target.value)) {
			setHasTypoError(true);
		} else{
			setHasTypoError(false);
		};
	};

	const handleFocus = (event) => {
		if(event.target.innerText === defaultPhrase){
			setText('');
		};
	};
	const handleBlur = (event) => {
		event.target.innerText?.length === 0 && setText('Digite Aqui!')
	};

	return (
		<Container>
			{/*<h2>
				🌿Treinamento Livre
			</h2>

			<h3>Nível de dificuldade: Normal</h3>*/}

			<Timer 
				difficulty={"normal"}
			/>

			<Typing />
		</Container>
	)
}