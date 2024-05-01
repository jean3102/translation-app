import { Translations, TranslationsResponse } from '../models/translate';
// import translations from '../services/test_data/translations.json';
// import errorMsj from '../api/test_data/translationError.json';
import { handleFetchRequest } from '../utils/handleFetchRequest';
type MyResponse = {
	translation: string;
};

export const getTranslations = async ({
	target,
	text,
}: Translations): Promise<MyResponse | undefined> => {
	// return new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		const translate = translations.translations[0].translation;
	// 		const data = { translation: translate, error: undefined };
	// 		resolve(data);
	// 	}, 3000);
	// });

	// const translate = data.translations[0].translation;
	// return { translation: translate };

	const translate = (await handleFetchRequest({
		url: `https://api.apilayer.com/language_translation/translate?target=${target}`,
		method: 'POST',
		body: text,
	})) as TranslationsResponse;

	console.log('translate', translate);
	return { translation: translate?.translations[0].translation };
};
