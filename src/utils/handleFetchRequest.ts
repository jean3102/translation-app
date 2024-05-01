import { notyf } from '../libs/noty';

type HandleFetchRequest = {
	url: string;
	body?: string;
	method: 'GET' | 'POST';
};

export const handleFetchRequest = async ({
	url,
	method,
	body,
}: HandleFetchRequest): Promise<unknown | undefined> => {
	try {
		const myHeaders = new Headers();
		const requestOptions: RequestInit = {
            method: method,
			redirect: 'follow',
			headers: myHeaders,
			body: body,
		};
        myHeaders.append('apikey', import.meta.env.VITE_API_KEY);

		const response = await fetch(url, requestOptions);

		const result = await response.json();
		if (result.error !== undefined) throw new Error(result.error);
		if (!response.ok) throw new Error(result.message);
		// if (response.status === 429)
		// 	throw new Error('You have exceeded your daily/monthly API rate limit');

		return result;
	} catch (error) {
		notyf.error(`Alert: ${error}`);
	}
};
