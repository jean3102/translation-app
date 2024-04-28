import languages from '../services/test_data/languages.json';
import { Languages } from '../models/languages';
export const getLanguages = async (): Promise<Languages[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			const data = languages.languages.map((language: Languages) => ({
				country_code: language.country_code,
				language: language.language,
				language_name: language.language_name,
			}));
			resolve(data);
		}, 3000);
	});

	// const myHeaders = new Headers();
	// myHeaders.append('apikey', import.meta.env.VITE_API_KEY);

	// const requestOptions: RequestInit = {
	// 	method: 'GET',
	// 	redirect: 'follow',
	// 	headers: myHeaders,
	// };

	// const data = await fetch(
	// 	'https://api.apilayer.com/language_translation/languages',
	// 	requestOptions
	// );https://typescript.tv/errors/#ts2352

	// return data.json();
};
