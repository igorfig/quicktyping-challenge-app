import styled from 'styled-components';

export default styled.footer`
	background: ${({theme}) => theme.bgSecondary};
	width: 100%;
	margin-top: 3rem;
	padding: .8rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;

	a {	
		fontWeight: '300',
		fontSize: '8px',
	}

	a, span {
		color: ${({theme}) => theme.textColor};
	}
`