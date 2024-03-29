export type IPerson = {
	id: number;
	name: string;
	lastName: string;
	cpf: string;
	status: {
		id: number;
		description: string;
	},
	dateRegister: string;
};

export type IPersonRegister = {
	name: string;
	lastName: string;
	cpf: string;
	fk_status: number,
};
