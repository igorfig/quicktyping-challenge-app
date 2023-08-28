import { useState, useEffect } from 'react';
import { Container, PhraseContainer, TypeContainer, StyledContentEditble } from './styles';

export default function GameWindow() {
	const [text, setText] = useState('Digite aqui!');
	const [phrase, setPhrase] = useState('');

	const handleChange = (event) => {
		setText(event.target.value);
	};

	const handleFocus = (event) => setText("");
	const handleBlur = (event) => !event.target.value && setText('Digite Aqui!');

	return (
		<Container>
			<h2>
				🌿Treinamento Livre
			</h2>

			<h3>Nível de dificuldade: Normal</h3>

			<PhraseContainer>
				<span>Autor: ...</span>
				<p></p>
			</PhraseContainer>

			<TypeContainer>
				<StyledContentEditble
					html={text}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
			</TypeContainer>
		</Container>
	)
}