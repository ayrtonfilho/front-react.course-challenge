import * as S from './styles';

interface ErrorInterface{
	codeError: number,
	msgError: string,
}

export default function NotFoundErrorPage(errorStatus: Readonly<ErrorInterface>) {
	return (
		<S.NotFoundErrorPageStyled>
			<S.StatusCodeErrorStyled>
				<h1>{errorStatus.codeError}</h1>
			</S.StatusCodeErrorStyled>
			<S.StatusMessageErrorStyled>
				<p>{errorStatus.msgError}</p>
			</S.StatusMessageErrorStyled>
		</S.NotFoundErrorPageStyled>
	);
}
