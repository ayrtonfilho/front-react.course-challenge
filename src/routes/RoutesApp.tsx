import { Route, Routes } from 'react-router-dom';
import HomePageComponent from '../pages/Home';
import NotFoundErrorPage from '../pages/Error/NotFound';

export function RoutesApp() {

	return (
		<Routes>

			<Route
				path='/'
				element={ <HomePageComponent/> }
			/>

			<Route
				path='*'
				element={
					<NotFoundErrorPage
						codeError={404}
						msgError='Página não encontrada!'
					/>
				}
			/>
		</Routes>
	);
}
