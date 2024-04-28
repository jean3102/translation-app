import { Translations } from '../models/translate';
// import translations from '../services/test_data/translations.json';
// import errorMsj from '../api/test_data/translationError.json';
import { notyf } from '../libs/noty';
type MyResponse = {
	translation: string;
};

export const getTranslations = async ({
	target,
	text,
}: Translations): Promise<MyResponse | undefined> => {
	console.log(`🚀 ------------ text:`, text);
	console.log(`🚀 ------------ target:`, target);
	// return new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		const translate = translations.translations[0].translation;
	// 		const data = { translation: translate, error: undefined };
	// 		resolve(data);
	// 	}, 3000);
	// });

	try {
		const myHeaders = new Headers();
		const url = `https://api.apilayer.com/language_translation/translate?target=${target}`;

		myHeaders.append('apikey', import.meta.env.VITE_API_KEY);
		const response = await fetch(url, {
			method: 'POST',
			redirect: 'follow',
			headers: myHeaders,
			body: text,
		});
		const data = await response.json();

		if (data.error !== undefined) throw new Error(data.error);
		if (response.status === 429) throw new Error('You have exceeded your daily/monthly API rate limit');

		const translate = data.translations[0].translation;
		return { translation: translate };
	} catch (error) {
		console.log(`🚀 ------------ error:`, error);
		notyf.error(`Alert: ${error}`);
	}
};
