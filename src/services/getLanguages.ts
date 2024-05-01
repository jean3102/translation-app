// import languages from '../services/test_data/languages.json';
import { notyf } from '../libs/noty';
import { Languages } from '../models/languages';

export const getLanguages = async (): Promise<Languages[] | undefined> => {
	// return new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		const data = languages.languages.map((language: Languages) => ({
	// 			country_code: language.country_code,
	// 			language: language.language,
	// 			language_name: language.language_name,
	// 		}));
	// 		resolve(data);
	// 	}, 3000);
	// });

	try {
		const myHeaders = new Headers();
		myHeaders.append('apikey', import.meta.env.VITE_API_KEY);

		const requestOptions: RequestInit = {
			method: 'GET',
			redirect: 'follow',
			headers: myHeaders,
		};

		const response = await fetch(
			'https://api.apilayer.com/language_translation/languages',
			requestOptions
		);

		const data = await response.json();
		if (data.error !== undefined) throw new Error(data.error);
		if (response.status === 429)
			throw new Error('You have exceeded your daily/monthly API rate limit');

		const result = data.languages.map((language: Languages) => ({
			country_code: language.country_code,
			language: language.language,
			language_name: language.language_name,
		}));

		return result;
	} catch (error) {
		console.log(`🚀 ------------ error:`, error);
		notyf.error(`Alert: ${error}`);
	}
};
