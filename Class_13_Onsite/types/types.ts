export interface StudentC {
	phone: number;
	university: string;
	name: string;
}

export interface TeacherA {
	email: string;
}

export type ContactForm = {
	name: String;
	email: String;
	budget: number;
	message?: String | null;
};

export type Todos = {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
};

export type TodosResponse = {
	todos: Todos[];
	total: number;
	skip: number;
	limit: number;
};

export type products = {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: [string, string, string];
};

export type productData = {
	total: number;
	skip: number;
	limit: number;
};
