import styled from 'styled-components';

export const ModalContainerBackground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	backdrop-filter: blur(5px);
	background-color: #0000007a;
	width: 100%;
	height: 100vh;
	z-index: 134;
	top: 0;
	left: 0;
`;

export const ModalLargeContainerBackground = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	backdrop-filter: blur(5px);
	background-color: #0000007a;
	width: 100%;
	height: 100vh;
	z-index: 10;
	top: 0;
	left: 0;
`;

export const ModalContainerContent = styled.div`
	position: fixed;
	max-height: 90vh;
	width: fit-content;
	max-width: 1100px;
	margin: 5vh auto;
	padding: 50px 45px;
	background-color: #ffffff;
	top: 0;
	left: 0;
	right: 0;
	z-index: 135;
	border-radius: 15px;
	border-top: 1px solid #ffffff0f;
`;

export const BtnClose = styled.div`
	cursor: pointer;
	position: absolute;
	right: 10px;
	top: 10px;
`;

export const ModalLargeContainerContent = styled.div`
	position: fixed;
	min-height: 85vh;
	max-width: 1300px;
	margin: 35px auto;
	padding: 50px 45px;
	background-color: #ffffff;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 130;
	border-radius: 15px;
	border-top: 1px solid #ffffff0f;
`;
