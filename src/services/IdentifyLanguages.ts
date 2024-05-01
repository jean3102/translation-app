import { IdentifyLanguage, IdentifyResponse } from '../models/languages';
import { handleFetchRequest } from '../utils/handleFetchRequest';
// import languages from './test_data/identifyLanguages.json';
// import errorMsj from '../api/test_data/translationError.json';
// import { notyf } from '../libs/noty';

export async function getIdentifyLanguages(
	text: string
): Promise<IdentifyLanguage | undefined> {
	console.log(`🚀 ------------ text:`, text);
	// return new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		const translate = languages.languages[0].language;
	// 		const data = { translation: translate, error: undefined };
	// 		resolve(data);
	// 	}, 3000);
	// });

	const identify = (await handleFetchRequest({
		url: `https://api.apilayer.com/language_translation/identify`,
		method: 'POST',
		body:text
	})) as IdentifyResponse;

	console.log('translate', identify);
	return { translation: identify.languages[0].language };
}
