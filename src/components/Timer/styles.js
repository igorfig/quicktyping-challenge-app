import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	right: 10px;
	top: 100px;
	padding: 1.125rem;
	gap: 1rem;

	${({ theme }) => theme.blur};

	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	border-radius: .5rem;
	width: 300px;
	display: none;

	&.active {
		display: flex;
		flex-direction:column;
		justify-content: center;

		animation: show 1 .5s ease-in;
		@keyframes show {
			0% {
				right: -100%;
			}

			100% {
				right: 10px;
			}
		}
	}

	&.hide { 
		animation: close 1 .5s ease-in;
		
		

		@keyframes close {
			0% {
				display: flex;
				flex-direction:column;
				justify-content: center;
			}

			100% {
				transform: translateX(100%);
				display: none;
				opacity: 0;
				visibility: hidden;
			}
		}
	}

`

export const Title = styled.span`
	top: 10px;
	left: 10px;
	font-size: 1.35rem;
	font-weight: 300;
`

export const Time = styled.span`
	font-size: 1.8rem;
	color: ${({ theme }) => theme.textColor};
	font-weight: 700;
`

export const ToggleButton = styled.button`
	background: none;
	position: absolute;
	border: none;

	right: 0;
`

export const ToggleArrow = styled.img`
	width: 48px;
	transform: ${({ transform }) => transform && 'rotate(180deg);'}
`

export const ClockButton = styled.button`
	position: fixed;
	right: -1%;
	top: 100px;
	background: none;

	outline: none;
	border: none;
	
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.125rem;

	img {
		height: 100px;
		transition: all .2s ease-in;
		animation: fade-in 1 .8s ease-in;
		opacity: 1;

		@keyframes fade-in {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}
	}
	&:hover {
		img {
			${({ theme }) => theme.blur}		
		}
	}
`