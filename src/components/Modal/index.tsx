import { ReactNode } from 'react';
import * as S from './styles';

interface ModalContainerProps {
  isOpen: boolean;
  children: ReactNode;
  toggleModal: () => void;
  sizeModal: 'medium' | 'large';
  className?: string;
}

export function ModalContainer({
	isOpen,
	children,
	toggleModal,
	sizeModal,
	className,
}: Readonly<ModalContainerProps>) {

	return (
		<>
			{
				isOpen && (
					<>
						{
							sizeModal === 'large' && (
								<>
									<S.ModalLargeContainerContent
										className={className}
									>
										<S.BtnClose onClick={toggleModal} className='btn-close'>
											<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
												<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
											</svg>
										</S.BtnClose>

										{ children }
									</S.ModalLargeContainerContent>

									<S.ModalLargeContainerBackground
										onClick={ toggleModal }
									/>
								</>
							)
						}

						{
							sizeModal === 'medium' && (
								<>
									<S.ModalContainerContent
										className={className}
									>
										<S.BtnClose onClick={toggleModal} className='btn-close'>
											<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
												<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
											</svg>
										</S.BtnClose>

										{ children }
									</S.ModalContainerContent>

									<S.ModalContainerBackground
										onClick={ toggleModal }
									/>
								</>
							)
						}
					</>
				)
			}
		</>
	);
}
