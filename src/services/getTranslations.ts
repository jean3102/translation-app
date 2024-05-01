import {
	Translated,
	Translations,
	TranslationsResponse,
} from '../models/translate';
// import translations from '../services/test_data/translations.json';
// import errorMsj from '../api/test_data/translationError.json';
import {
	HandleFetchRequest,
	handleFetchRequest,
} from '../utils/handleFetchRequest';

export const getTranslations = async (
	data: Translations
): Promise<Translated | undefined> => {

	const options: HandleFetchRequest = {
		method: 'POST',
		headers: {
			'X-RapidAPI-Key': '4db323c20amsh3ad80618ad827c8p154c0bjsn52e8e19452d9',
			'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
		},
		body: JSON.stringify(data),
	};

	const translate = (await handleFetchRequest(
		'https://deep-translate1.p.rapidapi.com/language/translate/v2',
		options
	)) as TranslationsResponse;

	return { translation: translate.data.translations.translatedText };
};
