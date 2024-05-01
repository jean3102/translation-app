import { notyf } from '../libs/noty';

export type HandleFetchRequest = {
	method: string;
	headers: HeadersInit;
	body?: BodyInit;
};

export const handleFetchRequest = async (
	url: string,
	options: HandleFetchRequest
): Promise<unknown | undefined> => {
	try {
		// myHeaders.append('apikey', import.meta.env.VITE_API_KEY);
		const response = await fetch(url, options);

		const result = await response.json();
		if (!response.ok) throw new Error(result.message);
		if (result.error !== undefined) throw new Error(result.error);
		if (response.status === 429)
			throw new Error('You have exceeded your daily/monthly API rate limit');

		return result;
	} catch (error) {
		notyf.error(`Alert: ${error}`);
	}
};
