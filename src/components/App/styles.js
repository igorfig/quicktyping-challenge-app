import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	background: ${({ theme }) => theme.backgroundColor};
	color: ${({ theme }) => theme.textColor};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	padding: 2rem;
`