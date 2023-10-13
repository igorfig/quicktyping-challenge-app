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

export const StartPlay = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
`

export const SelectsContainer = styled.div`

	div {
		padding: 1rem 0;
		gap: 1rem;
		display: flex;
		flex-direction: column;
		label {
			font-size: 1.2rem;
			font-weight: 700;
		}

		select {
			width: 100%;
			background: #fff;
			box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
			height: 52px;
			border: 1px solid #fff;
			border-radius: 4px;
			outline: none;
			padding: 0 16px;
			font-size: 16px;
			transition: border-color .2s ease-in;
			appearance: none;
			outline: none;
			color: #000;

		}
	}	
`

export const Button = styled(Link)`
	margin-top: 3rem;
	padding: .6rem;
	text-align: center;
	border-radius: .25rem;
	background: #F15152;
	color: #fff;
	font-size: 1.2rem;
	font-weight: 700;
	border: none;
	outline: none;

	transition: filter .2s;

	&:hover {
		color: #fff; //reset 
		filter: brightness(.9);
	}
`
