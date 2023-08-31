import { useState, useEffect } from 'react';
import { Container, PhraseContainer, TypeContainer, StyledContentEditble } from './styles';

export default function GameWindow() {
	const [text, setText] = useState('Digite aqui!');
	const [phrase, setPhrase] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident eveniet, quod laborum, aut officia architecto veniam, quisquam dignissimos esse earum quae officiis quis explicabo? Illum labore, esse a consequuntur!');
	const [hasTypoError, setHasTypoError] = useState(false);

	const handleChange = (event) => {
		setText(event.target.value);
		
		if(phrase.charAt(event.target.value.length - 1) !== event.target.value.charAt(event.target.value.length - 1)) {
			setHasTypoError(true);
		} else{
			setHasTypoError(false);
		};
	};

	const handleFocus = (event) => setText("");
	const handleBlur = (event) => {
		!event.target.value && setText('Digite Aqui!')
		hasTypoError && setHasTypoError(false);
	};

	return (
		<Container>
			<h2>
				🌿Treinamento Livre
			</h2>

			<h3>Nível de dificuldade: Normal</h3>

			<PhraseContainer>
				<span>Autor: ...</span>
				<p>{phrase}</p>
			</PhraseContainer>

			<TypeContainer>
				<StyledContentEditble
					html={text}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					error={hasTypoError}
				/>
			</TypeContainer>
		</Container>
	)
}