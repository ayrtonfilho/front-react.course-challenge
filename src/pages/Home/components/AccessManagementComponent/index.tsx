import PersonRenderingTable from '../PersonRenderingTable';
import { ModalContainer } from '../../../../components/Modal/index';
import useModal from '../../../../context/provider/useModal';
import RegisterModal from '../RegisterModal/index';
import { useState } from 'react';
import UpdateModal from '../UpdateModal';

export default function AccessManagementComponent() {
	const { isOpen: isOpenRegisterModal, toggle: toggleRegisterModal } = useModal(false);
	const { isOpen: isOpenUpdateOrDeleteModal, toggle: toggleUpdateOrDeleteModal } = useModal(false);

	const [updateList, setUpdateList] = useState<number>(1);

	const [personId, setPersonId] = useState<number>(0);

	function setPersonAndOpenModal(personId: number) {
		setPersonId(personId);
		toggleUpdateOrDeleteModal();
	}

	function toggleListUpdate() {
		setUpdateList((e) => e + 1);
	}

	return (
		<div className='mt-6 xl:mt-10'>
			<div className=''>
				<h4 className='text-md mb-0 xl:text-lg'>Gestão de Acessos - Permissões de usuários aos sistemas corporativos da SEPLAG</h4>
				<p className='xl:text-lg'>Nessa tela você pode remover, adicionar e atualizar os dados e acessos dos usuários aos serviços internos</p>
			</div>

			<div className='mt-5'>
				<button
					className='ui positive button'
					onClick={toggleRegisterModal}
					>
						<i className='icon user plus'></i>
						Novo Acesso
				</button>
				<PersonRenderingTable
					updateList={updateList}
					setPersonAndOpenModal={setPersonAndOpenModal}
				/>
			</div>

			<ModalContainer
				isOpen={isOpenRegisterModal}
				sizeModal={'medium'}
				toggleModal={toggleRegisterModal}
			>
				<RegisterModal
					toggleModal={toggleRegisterModal}
					updateList={toggleListUpdate}
				/>
			</ModalContainer>

			<ModalContainer
				isOpen={isOpenUpdateOrDeleteModal}
				sizeModal={'medium'}
				toggleModal={toggleUpdateOrDeleteModal}
			>
				<UpdateModal
					toggleModal={toggleUpdateOrDeleteModal}
					updateList={toggleListUpdate}
					personId={personId}
				/>
			</ModalContainer>
		</div>
	);
}
