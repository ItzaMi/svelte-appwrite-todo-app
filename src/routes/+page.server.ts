import { getToDosFromDatabase, createTodo } from '$lib/appwrite';

export async function load() {
	const todos = await getToDosFromDatabase();

	if (todos) {
		return {
			todos: todos
		};
	}
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();

		const title = data.get('title') as string;
		const description = data.get('description') as string;

		if (!title || !description) {
			return {
				status: 400,
				body: {
					message: 'Title and description are required'
				}
			};
		}

		const result = await createTodo(title, description);

		return {
			status: 200,
			body: result
		};
	}
};
