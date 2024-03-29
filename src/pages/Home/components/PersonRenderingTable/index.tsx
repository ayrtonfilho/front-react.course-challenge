import { useEffect, useState } from 'react';
import PersonRequest from '../../../../utiils/requests/person.request';
import { showToast } from '../../../../utiils/ToastMessage/ToastMessageUser';
import { IPerson } from '../../../../interfaces/person.interface';
import { useLoading } from '../../../../context/provider/useLoading';

interface IPersonRenderingTable {
	updateList: number;
	setPersonAndOpenModal: (id: number) => void;
}

export default function PersonRenderingTable(props: IPersonRenderingTable) {
	const [person, setPerson] = useState<IPerson[]>([]);
	const {showLoading, hideLoading} = useLoading();
	const [searchTerm, setSearchTerm] = useState<string>('');

	async function getAllPerson() {
		try {
			const response = await PersonRequest.findAll();

			if (response.error || !response.message) {
				showToast('error', response.error)
				return;
			}

			setPerson(response.message);
		} catch (error) {
			showToast('warning', 'Não foi possível carregar os dados!');
		} finally {
			hideLoading();
		}
	}

	const filteredUsers = person.filter(p =>
		p.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	useEffect(() => {
		showLoading();
		getAllPerson();
	}, [props.updateList])

	function statusInactive(status: number) {
		return status === 2;
	}

	return (
		<div className='mt-6'>

			<div className='mt-2 flex  large justify-end gap-2'>
				<div className='ui left icon input md'>
					<input type='text' placeholder='Buscar por nome...' onChange={(e) => setSearchTerm(e.target.value)}/>
					<i className='users icon'></i>
				</div>
			</div>

			<table className='ui celled table'>
				<thead>
					<tr>
						<th>#</th>
						<th>Nome</th>
						<th>Sobrenome</th>
						<th>CPF</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>

					{
						filteredUsers.map((person, index) => (
							<tr key={index} className={statusInactive(person.status.id) ? 'error' : ''}>
								<td>{index + 1}</td>
								<td>{person.name}</td>
								<td>{person.lastName}</td>
								<td>{person.cpf}</td>
								<td className={statusInactive(person.status.id) ? 'negative' : 'positive'}>
									{statusInactive(person.status.id) ? <i className='attention icon'></i> : <i className='icon checkmark'></i>}
									{person.status.description}
								</td>
								<td className='px-6 py-4'>
									<svg onClick={() => props.setPersonAndOpenModal(person.id)} className='cursor-pointer w-6 h-6 text-gray-800 dark:text-white' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>
										<path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z'/>
									</svg>
								</td>
							</tr>
						))
					}
				</tbody>

			</table>
			{
				(filteredUsers.length === 0 || person.length === 0) && (
					<div className='ui message icon message'>
						<i className='inbox icon'></i>
						<div className='header'>
							Não há resultados
							<p className='text-sm'>Crie um novo registro ou utilize outros filtros de busca</p>
						</div>
					</div>
				)
			}
		</div>
	);
}
