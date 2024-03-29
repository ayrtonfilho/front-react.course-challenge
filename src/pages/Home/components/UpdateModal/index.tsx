import { useEffect, useState } from "react";
import { IPerson, IPersonRegister } from "../../../../interfaces/person.interface";
import { capitalizeWords, formattedTime } from "../../../../utiils/mask/data.mask";
import { showToast } from "../../../../utiils/ToastMessage/ToastMessageUser";
import PersonRequest from "../../../../utiils/requests/person.request";
import { useLoading } from "../../../../context/provider/useLoading";

interface IUpdateModal {
	toggleModal: () => void;
	updateList: () => void;
	personId: number,
}

export default function UpdateModal(props: IUpdateModal) {
	const {showLoading, hideLoading} = useLoading();

	const [person, setPerson] = useState<IPersonRegister>({
		name: '',
		lastName: '',
		cpf: '',
		fk_status: 1,
	});

	const [allDataperson, setAllDataPerson] = useState<IPerson>();

	function resetInputs() {
		setPerson({
			name: '',
			lastName: '',
			cpf: '',
			fk_status: 1,
		});
	}

	async function getOneById() {
		try {
			const response = await PersonRequest.findOne(props.personId);

			if (response.error || !response.message) {
				showToast('error', response.error);
				hideLoading();
				return;
			}

			setPerson({
				name: response.message.name,
				lastName: response.message.lastName,
				cpf: response.message.cpf,
				fk_status: response.message.status.id,
			});

			setAllDataPerson(response.message);
		} catch (error) {
			showToast('error', 'Não foi possível solicitar o pedido!');
		} finally{
			hideLoading();
		}
	}

	useEffect(() => {
		showLoading();
		getOneById();
	}, [props.personId]);

	async function updatePerson() {
		showLoading();

		if (person.name.trim() == '' || person.lastName.trim() == ''|| person.cpf.trim() == '') {
			showToast('info', 'Os campos não podem estar vazios!');

			hideLoading();

			return;
		}

		try {
			const response = await PersonRequest.updateOne(person, props.personId);

			if (response.error || !response.message) {
				showToast('warning', response.error);
				hideLoading();

				return;
			}

			resetInputs();

			props.updateList();
			props.toggleModal();
			showToast('success', 'Cadastro atualizado com sucesso! ID:' + response.message.id);
		} catch (error) {
			console.log(error);
			showToast('warning', 'Verifique os dados informados e tente novamente!');
		} finally {
			hideLoading();
		}
	}

	async function removeOne() {
		try {
			const response = await PersonRequest.removeOne(props.personId);

			if (response.error || !response.message) {
				showToast('error', response.error  ?? 'Error não identificado!');
				hideLoading();

				return;
			}

			showToast('success', 'Removido com sucesso!');
			props.updateList();
			props.toggleModal();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className=''>
			<form className='ui form'>
				<h4 className='ui dividing header'>Atualizar Dados do Usuário</h4>

				<div className='mt-6 mb-7'>
					<p className='font-semibold'>Data de Cadastro: <span className='font-normal'>{formattedTime(new Date(allDataperson?.dateRegister ?? new Date()))}</span></p>
				</div>

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
								disabled
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

				<div className='mt-8 flex justify-end gap-3'>
					<div className='ui red basic button' onClick={removeOne}>
						<i className='icon user times'></i> Remover
					</div>

					<div className='ui button positive' onClick={updatePerson}>
						<i className='icon edit'></i> Atualizar
					</div>
				</div>
			</form>
		</div>
	);
}
