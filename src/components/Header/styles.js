import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
	max-width: 100%;
	margin: 2rem;
	padding: 5rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 3rem;
	border-bottom: 5px solid ${({theme}) => theme.textColor};	
	${({theme}) => theme.blur};
	border-radius: .55rem .55rem 0 0;

	button {
		position: absolute;
		top: 10px;
		right: 10px;
	    font-size: 1.6rem;
	    background: transparent;
	    border: none;
	    outline: none;
	}

`
export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2rem;
	position: relative;
	max-width: 800px;
`

export const Title = styled.h1`
	color: ${({theme}) => theme.accentColor};
	font-size: 3.8rem;
	@media(max-width: 480px) {
		font-size: 3rem;
	}
	padding: 1rem 0;
	margin-bottom: 3rem;
`

export const Description = styled.p`
	font-size: 1.4rem;
	align-self: flex-start;
	text-align: justify;
`

export const Image = styled.img`
	max-width: 400px;
	width: 100%;
	margin-left: 2rem;
`

export const HomepageLink = styled(Link)`
	position: absolute;
	left: 30px;
	top: 15px;
	width: 48px;
	padding: 0;
	
	img {
		width: 48px;
	}
	

`