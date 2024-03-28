import styled from 'styled-components';

export const NotFoundErrorPageStyled = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	overflow-y: hidden;
`;

export const StatusCodeErrorStyled = styled.div`
	h1 {
		font-size: 5.4rem;
		margin: 0;
		background-color: #d9d9d9;
		color: #6b6b6b08;
		text-shadow: 2px 2px 3px rgb(255 255 255 / 50%);
			-webkit-background-clip: text;
			-moz-background-clip: text;
			background-clip: text;
	}
`;

export const StatusMessageErrorStyled = styled.div`
	p {
		color: #b9b9b9;
		font-size: 1.3rem;
		font-weight: 400;
		margin: 0;
	}
`;
