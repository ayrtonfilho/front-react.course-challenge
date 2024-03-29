import FooterComponent from '../../components/Footer';
import HeaderComponent from '../../components/Header';
import AccessManagementComponent from './components/AccessManagementComponent';

import * as S from './styles';

export default function HomePageComponent() {
	return (
		//max-w-screen-2xl
		<S.HomeStyled className='w-full scroll-smooth'>
			<div className="sticky top-0 z-50">
				<HeaderComponent />
			</div>

			<div className='max-w-screen-2xl m-auto pl-5 pr-5'>
				<AccessManagementComponent />
			</div>

			<FooterComponent />
		</S.HomeStyled>
	);
}
