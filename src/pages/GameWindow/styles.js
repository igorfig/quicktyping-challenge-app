import styled from 'styled-components';
import ContentEditable from 'react-contenteditable'

export const Container = styled.div`
	margin-top: 3rem;
	width: 100%;
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