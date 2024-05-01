// import languages from '../services/test_data/languages.json';
import { Languages, LanguagesResponse } from '../models/languages';
import { handleFetchRequest } from '../utils/handleFetchRequest';

export const getLanguages = async (): Promise<Languages[]> => {
	const result = (await handleFetchRequest({
		url: 'https://api.apilayer.com/language_translation/languages',
		method: 'GET',
	})) as LanguagesResponse;

	return result.languages;
};
