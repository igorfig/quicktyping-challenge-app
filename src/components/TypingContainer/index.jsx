import { 
	Container,
	Dots,
	Options,
	AverageContainer,
	Average,
	ImageContainer,
	TypingField
} from './styles';

import typosMobImg from '../../assets/images/icons/typosMob.svg';
import accuracyImg from '../../assets/images/icons/accuracy.svg';
import charPerMinutesImg from '../../assets/images/icons/charPerMinutes.svg';
import clockImg from '../../assets/images/icons/clock.svg';

export default function Typing() {
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
								<span>02:00</span>
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
						<span>0</span>
						<small>Erros</small>
					</div>
				</Average>
			</AverageContainer>

			<TypingField Placeholder="Aqui vai a frase..."/>
		</Container>
	)
}