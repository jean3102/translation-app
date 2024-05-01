import { Languages, LanguagesResponse } from '../models/languages';
import {
	HandleFetchRequest,
	handleFetchRequest,
} from '../utils/handleFetchRequest';

export const getLanguages = async (): Promise<Languages[]> => {

	const options: HandleFetchRequest = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '4db323c20amsh3ad80618ad827c8p154c0bjsn52e8e19452d9',
			'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
		},
	};

	const languages = (await handleFetchRequest(
		'https://deep-translate1.p.rapidapi.com/language/translate/v2/languages',
		options
	)) as LanguagesResponse;
	return languages.languages;
};
