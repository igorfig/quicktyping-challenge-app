import styled from 'styled-components';

export const Container = styled.div`
	width: 80%;
	padding: 3rem;
	background: ${({ theme }) => theme.bgSecondary};
	border-radius: 1.25rem;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 5rem;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	margin: 2rem 0;

	

	&  p {
		animation: fade-in .5s 1 ease-in;
		@keyframes fade-in {
			from {
				opacity: 0;
				transform: translateX(-10%);
			}
			 to {
			 	opacity: 1;
			 }
		}
 	}

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

		color: ${({ theme }) => theme.textColor};
		opacity: .4;
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
			color: ${({ theme }) => theme.textColor};
		}

		small {
			color: ${({ theme }) => theme.textColor};
			opacity: .4;
			font-weight: bold;
			font-size: .7rem;
		}
	}
`

export const ImageContainer = styled.div`
	${({ theme }) => theme.blur};
	padding: 2rem;
	border-radius: 100%;

	img {
		height: 32px;
		width: 32px;
	}
`

export const Phrase = styled.p`
	max-width: 80%;
	text-align: justify;
	font-weight: 300;
	font-size: 1.5rem;
	line-height: 2rem;
	user-select: none;
	color: ${({ theme }) => theme.textColor};
`

export const TypingField = styled.textarea`
	background: none;
	outline: none;
	border: none;
	padding: 1.5rem;
	margin-bottom: 3rem;
	font-size: 1.2rem;
	letter-spacing: .125rem;
	line-height: 2rem;
	width: 80%;
	word-wrap: break-word;
	word-break: break-word;
	resize: none;
	text-align: center;
	overflow: hidden;
	color: ${({ theme }) => theme.textColor};
	color: ${({ error, theme }) => error && theme.error};

	&[disabled] {
		color: ${({ success, theme }) => success ? theme.success : theme.error };
		cursor: not-allowed;
	}
`

export const NextPhraseButton = styled.button`
	background: transparent;
	display: inline-flex;
	align-items: center;
	gap: .5rem;
	color: ${({ theme }) => theme.textColor};
	font-size: 1.2rem;
	font-weight: 700;
	position: absolute;
	right: 30px;
	bottom: 20px;
	border: none;
	outline: none;

	transition: filter .3s;

	&:hover {
		filter: brightness(.7);
	}
`

export const ArrowImg = styled.img`
	transform: rotate(180deg);
	width: 32px;	
`