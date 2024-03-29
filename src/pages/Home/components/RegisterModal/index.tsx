import { useState } from "react";
import { IPersonRegister } from "../../../../interfaces/person.interface";
import { capitalizeWords, formatCPFNumber } from "../../../../utiils/mask/data.mask";
import { showToast } from "../../../../utiils/ToastMessage/ToastMessageUser";
import PersonRequest from "../../../../utiils/requests/person.request";
import { useLoading } from "../../../../context/provider/useLoading";

interface IRegisterModal {
	toggleModal: () => void;
	updateList: () => void;
}

export default function RegisterModal(props: IRegisterModal) {
	const {showLoading, hideLoading} = useLoading();
	const [person, setPerson] = useState<IPersonRegister>({
		name: '',
		lastName: '',
		cpf: '',
		fk_status: 1,
	});

	function resetInputs() {
		setPerson({
			name: '',
			lastName: '',
			cpf: '',
			fk_status: 1,
		});
	}

	async function createPerson() {
		showLoading();

		if (person.name.trim() == '' || person.lastName.trim() == ''|| person.cpf.trim() == '') {
			showToast('info', 'Os campos não podem estar vazios!');

			hideLoading();

			return;
		}

		try {
			const response = await PersonRequest.createOne(person);

			if (response.error || !response.message) {
				showToast('warning', response.error);
				hideLoading();
				return;
			}

			resetInputs();

			props.updateList();
			props.toggleModal();
			showToast('success', 'Cadastro realizado com sucesso! ID:' + response.message.id);
		} catch (error) {
			console.log(error);
			showToast('warning', 'Verifique os dados informados e tente novamente!');
		} finally {
			hideLoading();
		}
	}

	return (
		<div className=''>
			<form className='ui form'>
				<h4 className='ui dividing header'>Inserir Dados do Usuário</h4>

				<div className='field'>
					<label>Name</label>
					<div className='two fields'>
						<div className='field'>
							<input
								type='text'
								name='person[name]'
								placeholder='Nome'
								value={person.name}
								onChange={(e) => setPerson((pp) => ({ ...pp, name: capitalizeWords(e.target.value) }))}
								required
							/>
						</div>
						<div className='field'>
							<input
								type='text'
								name='person[lastName]'
								placeholder='Sobrenome'
								value={person.lastName}
								onChange={(e) => setPerson((pp) => ({ ...pp, lastName: capitalizeWords(e.target.value) }))}
								required
							/>
						</div>
					</div>
				</div>

				<div className='field'>
					<label>Número de CPF</label>

					<div className='field'>
						<div className='wide field'>
							<input
								type='text'
								name='person[cpf]'
								placeholder='011.222.333-00'
								maxLength={14}
								value={person.cpf}
								onChange={(e) => setPerson((pp) => ({ ...pp, cpf: formatCPFNumber(e.target.value) || '' }))}
								required
							/>
						</div>
					</div>
				</div>

				<div className='field'>
					<label>Situação</label>
					<select value={person.fk_status} onChange={(e) => setPerson((pp) => ({ ...pp, fk_status: Number(e.target.value) }))} required>
						<option value='1'>ATIVO</option>
						<option value='2'>INATIVO</option>
					</select>
				</div>

				<div className='mt-8 flex justify-end'>
					<div className='ui button' onClick={createPerson}>
						<i className='icon user plus'></i> Criar
					</div>
				</div>
			</form>
		</div>
	);
}
