import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	right: 10px;
	top: 100px;
	padding: 1.125rem;
	gap: 1rem;

	background: #2A3D45;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	border-radius: .5rem;
	width: 300px;

	display: flex;
	flex-direction:column;
	justify-content: center;

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

	img {
		width: 48px;
		transform: rotate(180deg);
	}
`