import * as S from './styles';
import LogoIcon from '../../assets/images/logo.icon';
import { OnlineIcon } from '../../assets/images/online.icon';

export default function HeaderComponent() {

	return(
		<S.HeaderStyled className='color-seplag'>
			<div className='max-w-screen-2xl m-auto flex justify-between w-full items-center p-5'>
				<a href='/' className='flex items-center'>
					<LogoIcon width={320} height={54}/>
				</a>

				<div className='flex-column'>
					<div className='flex gap-2 items-center'>
						<p className='mb-0 font-medium'>Status:</p>
						<div className='flex items-center gap-1'>
							<OnlineIcon width={12}/>
							<p>Online</p>
						</div>
					</div>

					<div>
						<p className='font-medium'>Airton de Sousa Martins Filho</p>
					</div>
				</div>
			</div>
		</S.HeaderStyled>
	);
}
