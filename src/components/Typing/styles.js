import styled from 'styled-components';

export const Container = styled.div`
	width: 80%;
	padding: 3rem;
	background: #2C2E30;
	border-radius: 1.25rem;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5rem;
`

export const Dots = styled.div`
	position: absolute;
	top: 1.2rem;
	left: 1.5rem;
	width: 100%;

	display: inline-flex;
	align-items: center;
	gap: .5rem;

	div {
		width: 12px;
		height: 12px;
		border-radius: 100px;
	}

	.red {
		background: #FF5F57;
	}

	.yellow {
		background: #FFBC2F;
	}

	.green {
		background: #28C840;
	}
`

export const Options = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;

	align-items: center;

	select {
		font-size: 1rem;
		border: none;
		outline: none;
		background: transparent;

		color: #797C83;
	}
`

export const AverageContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
`

export const Average = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;

	column-gap: 1rem;
	overflow: hidden;

	div {
		display: flex;
		align-items: center;
		flex-direction: column;

		span {
			font-weight: bold;
			font-size: 1.6rem;
			color: #fff;
		}

		small {
			color: #47484C;
			font-weight: bold;
			font-size: .7rem;
		}
	}
`

export const ImageContainer = styled.div`
	background: #414345;
	padding: 1rem;
	border-radius: 100%;

	img {
		width: 32px;
	}
`

export const Phrase = styled.p`
	max-width: 80%;
	text-align: justify;
	font-weight: 300;
	font-size: 1.5rem;
	line-height: 2rem;
`

export const TypingField = styled.textarea`
	background: none;
	outline: none;
	border: none;
	padding: 1.5rem;
	font-size: 1.2rem;
	letter-spacing: .125rem;
	line-height: 2rem;
	width: 80%;
	min-height: 200px;
	max-height: 100%;
	word-wrap: break-word;
	word-break: break-word;
	resize: none;
	text-align: center;
	overflow: visible;
	color: ${({ error, theme }) => error && theme.error};
`