import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const Container = styled.main`
	margin-top: 3rem;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;

`

export const Section = styled.section`
	width: 70%;
	margin: 5rem 0;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	animation: fade-in 1 .8s ease-in;

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateX(-10%);
		}

		to {
			opacity: 1;
		}
	}
`

export const Subtitle = styled.h2`
	color: ${({theme}) => theme.accentColor};
	font-size: 2rem;
	font-weight: 700;
`

export const Description = styled.p`
	font-size: 1.2rem;
	text-align: justify;
	font-weight: 400;
`

export const TypingLink = styled(Link)`
	margin: 5rem 0;
	height: 30px;
	background: ${({theme}) => theme.accentColor};
	color: #fff;
	font-weight: 400;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	gap: 1rem;
	overflow: hidden;
	min-width: 40%;
	border-radius: 100px;

	transition: filter .3s;

	&:hover {
		filter: brightness(.9);
	}
`;

export const Illustration = styled.img`
	margin: 2rem 0;
	width: 50%;
	align-self: center;
`

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
`;

export const Card = styled.div`
  ${({ theme }) => theme.blur};
  padding: 2rem;
  border-radius: 0.25rem;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardTitle = styled.h3`
  	color: ${({ theme }) => theme.accentColor};
  	font-size: 1.6rem;
`;


export const CardDescription = styled.p`
	font-size: 1.2rem;
	font-weight: 300;
`

export const StartLearn = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const ButtonContainer = styled.div`
	width: 100%;
`

export const Phrase = styled.p`
	font-size: 1.2rem;
	font-weight: 300;
	text-align: justify;
`