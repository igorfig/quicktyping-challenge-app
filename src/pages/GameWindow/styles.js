import styled from 'styled-components';
import ContentEditable from 'react-contenteditable'

export const Container = styled.div`
	margin-top: 3rem;
	max-width: 800px;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 2rem;

	
`;

export const PhraseContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;

	span {
		font-size: 1.6rem;
		font-weight: 700;
	}

	p {	
		font-weight: 300;
		font-size: 1.2rem;
	}

`

export const TypeContainer = styled.div`
	
`

export const StyledContentEditble = styled(ContentEditable)`
	text-decoration: underline;
	font-size: 1.2rem;
	padding: 1rem;

	color: ${({ error, theme }) => error && theme.error};
`