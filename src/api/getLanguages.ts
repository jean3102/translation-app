export const getLanguages = async (): Promise<unknown[]> => {
	const myHeaders = new Headers();
	myHeaders.append('apikey', import.meta.env.VITE_API_KEY);

	const requestOptions: RequestInit = {
		method: 'GET',
		redirect: 'follow',
		headers: myHeaders,
	};

	const data = await fetch(
		'https://api.apilayer.com/language_translation/languages',
		requestOptions
	);

	return data.json();
};
