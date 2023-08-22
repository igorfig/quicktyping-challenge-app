import styled from 'styled-components';

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