/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPerson, IPersonRegister } from '../../interfaces/person.interface';
import api from '../../services/api';

export default class PersonRequest {
	static async findAll() {
		try {
			const response = await api.get('/person');
			const data = response.data;

			if (response.status !== 200) {
				return {
					status: data.status,
					error: 'Ocorreu um erro ao buscar os dados!',
				};
			}

			return {
				status: response.status,
				message: data as IPerson[],
			};
		} catch (e: any) {
			console.log(e.request.status);

			if (e.request.status === 404) {
				return {
					status: 500,
					error: 'Nenhum usuário encontrado!',
				};
			}

			return {
				status: 500,
				error: 'Ocorreu um erro desconhecido!',
			};
		}
	}

	static async findOne(personId: number) {
		try {
			const response = await api.get(`/person/${personId}`);
			const data = response.data;

			if (response.status !== 200) {
				return {
					status: data.status,
					error: 'Ocorreu um erro ao busca o usuário!',
				};
			}

			return {
				status: response.status,
				message: data as IPerson,
			};
		} catch (e: any) {
			console.log(e.request.status);

			if (e.request.status === 404) {
				return {
					status: 500,
					error: `Usuário ${personId} não encontrado!`,
				};
			}

			return {
				status: 500,
				error: 'Ocorreu um erro desconhecido!',
			};
		}
	}

	static async createOne(person: IPersonRegister) {
		try {
			const response = await api.post('/person/register', person);
			const data = response.data;

			if (response.status !== 201) {
				return {
					status: response.status,
					error: 'Não foi possível concluir o novo cadastro!',
				};
			}

			return {
				status: response.status,
				message: data as IPerson,
			};
		} catch (e: any) {
			console.log(e);

			if (e.request.status === 409) {
				return {
					status: 500,
					error: 'Usuário já está cadastrado no Banco de Dados!',
				};
			}

			return {
				status: 500,
				error: 'Ocorreu um erro desconhecido!',
			};
		}
	}

	static async updateOne(person: IPersonRegister, personId: number) {
		try {
			const response = await api.put(`/person/update/${personId}`, person);
			const data = response.data;

			if (response.status !== 200) {
				return {
					status: response.status,
					error: 'Não foi possível concluir a atualização!',
				};
			}

			return {
				status: response.status,
				message: data as IPerson,
			};
		} catch (e: any) {
			console.log(e);

			if (e.request.status === 409) {
				return {
					status: 409,
					error: 'Verifique os dados informados e tente novamente!',
				};
			}

			return {
				status: 500,
				error: 'Ocorreu um erro desconhecido!',
			};
		}
	}

	static async removeOne(personId: number) {
		try {
			const response = await api.delete(`/person/remove/${personId}`);
			const data = response.data;

			if (response.status !== 200) {
				return {
					status: response.status,
					error: 'Não foi possível concluir a remoção do cadastro!',
				};
			}

			return {
				status: response.status,
				message: data.message,
			};
		} catch (e: any) {
			console.log(e);

			if (e.request.status === 404) {
				return {
					status: 404,
					error: 'Usuário não foi localizado!',
				};
			}

			return {
				status: 500,
				error: 'Ocorreu um erro desconhecido!',
			};
		}
	}
}
