import { IdentifyLanguage, IdentifyResponse } from '../models/languages';
import {
	HandleFetchRequest,
	handleFetchRequest,
} from '../utils/handleFetchRequest';
// import languages from './test_data/identifyLanguages.json';
// import errorMsj from '../api/test_data/translationError.json';
// import { notyf } from '../libs/noty';

export async function getIdentifyLanguages(
	text: string
): Promise<IdentifyLanguage | undefined> {
	const options: HandleFetchRequest = {
		method: 'POST',
		headers: {
			'X-RapidAPI-Key': '4db323c20amsh3ad80618ad827c8p154c0bjsn52e8e19452d9',
			'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
		},
		body: JSON.stringify({ q: text }),
	};

	const identify = (await handleFetchRequest(
		'https://deep-translate1.p.rapidapi.com/language/translate/v2/detect',
		options
	)) as IdentifyResponse;

	return { translation: identify.data.detections[0].language };
}
