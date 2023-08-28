import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
	max-width: 100%;
	padding: 3rem 0;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-bottom: 1px solid #fff;

	h1 {
		font-size: 5.2rem;
		margin-bottom: 3rem;
		overflow-y: hidden;
	}

	button {
		position: absolute;
		top: 10px;
		right: 10px;
	    font-size: 1.6rem;
	    background: transparent;
	    border: none;
	    outline: none;
	}

	span {
		color: #CE2128;
	}

	p {
		max-width: 600px;
		font-size: 1.4rem;
		align-self: flex-start;
		text-align: justify;
	}

`

export const HomepageLink = styled(Link)`
	position: absolute;
	left: 10px;
	top: 10px;
	width: 48px;
	padding: 0;
	
	img {
		width: 48px;
	}

`