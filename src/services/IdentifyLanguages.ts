import { notyf } from '../libs/noty';
// import languages from './test_data/identifyLanguages.json';
// import errorMsj from '../api/test_data/translationError.json';
// import { notyf } from '../libs/noty';
type MyResponse = {
	translation: string;
	error?: string; // Define error property as optional
};

export async function getIdentifyLanguages(
	text: string
): Promise<MyResponse | undefined> {
	console.log(`🚀 ------------ text:`, text);
	// return new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		const translate = languages.languages[0].language;
	// 		const data = { translation: translate, error: undefined };
	// 		resolve(data);
	// 	}, 3000);
	// });

	try {
		const myHeaders = new Headers();
		const url = `https://api.apilayer.com/language_translation/identify`;

		myHeaders.append('apikey', import.meta.env.VITE_API_KEY);
		const response = await fetch(url, {
			method: 'POST',
			redirect: 'follow',
			headers: myHeaders,
			body: text,
		});
		const data = await response.json();

		if (data.error !== undefined) throw new Error(data.error);
		if (response.status === 429)
			throw new Error('You have exceeded your daily/monthly API rate limit');

		const translate = data.languages[0].language;
		return { translation: translate, error: data.error };
	} catch (error) {
		notyf.error(`Alert: ${error}`);
	}
}
