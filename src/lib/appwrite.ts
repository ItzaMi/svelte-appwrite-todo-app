import { Client, Databases, ID } from 'appwrite';
import {
	APPWRITE_ENDPOINT,
	APPWRITE_PROJECT_ID,
	APPWRITE_DATABASE_ID,
	APPWRITE_COLLECTION_ID
} from '$env/static/private';

const client = new Client();
const databases = new Databases(client);

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT_ID);

const getToDosFromDatabase = async () => {
	const { documents } = await databases.listDocuments(APPWRITE_DATABASE_ID, APPWRITE_COLLECTION_ID);
	return documents;
};

const createTodo = async (title: string, description: string) => {
	const result = await databases.createDocument(
		APPWRITE_DATABASE_ID,
		APPWRITE_COLLECTION_ID,
		ID.unique(),
		{
			title,
			description,
			isCompleted: false
		}
	);

	return result;
};

export { client, getToDosFromDatabase, createTodo };
