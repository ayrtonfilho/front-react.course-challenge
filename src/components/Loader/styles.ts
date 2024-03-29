import styled from 'styled-components';

export const LoaderStyled= styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	backdrop-filter: blur(5px);
	background-color: #0000007a;
	width: 100%;
	height: 100vh;
	z-index: 99999999;
	top: 0;
	left: 0;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s ease, visibility 0.3s ease;
	overflow-y: hidden;

	${props => props.datatype === 'loading' && `
		opacity: 1;
		visibility: visible;
	`}
`;
