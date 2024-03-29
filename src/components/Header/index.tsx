import * as S from './styles';
import LogoIcon from '../../assets/images/logo.icon';
import { OnlineIcon } from '../../assets/images/online.icon';
import { useEffect, useState } from 'react';
import { formattedTime } from '../../utiils/mask/data.mask';

export default function HeaderComponent() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return(
		<S.HeaderStyled className='color-seplag'>
			<div className='max-w-screen-2xl md:m-auto block md:justify-between md:w-full md:items-center p-5 md:flex'>

				<div className='mb-10 md:mb-0 flex justify-center'>
					<a href='/'>
						<LogoIcon width={320} height={54}/>
					</a>
				</div>

				<div>
					<div className='flex gap-2 items-center'>
						<div className='flex items-center gap-1'>
							<OnlineIcon width={12}/>
							<p className='text-xs mb-0'>Online</p>
						</div>

						<div>
							<p className='text-xs font-semibold'>| {formattedTime(time)}</p>
						</div>
					</div>

					<div className='mb-1'>
						<p className='font-bold mb-0 text-base'>Airton de Sousa Martins Filho</p>
						<span>Gestor de Acessos Internos</span>
					</div>
				</div>
			</div>
		</S.HeaderStyled>
	);
}
