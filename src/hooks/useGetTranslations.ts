import { notyf } from '../libs/noty';
import { getTranslations } from '../api/getTranslations';
import { Translations } from '../models/translate';

const useTranslatedText = () => {
	const fetchTranslatedText = async (data: Translations) => {
		try {
			const response = await getTranslations(data);
			if (response?.error) {
				throw new Error(response.error);
			}
			return response?.translation;
		} catch (error) {
			if (error) {
				if (error instanceof Error) {
					notyf.error(`Caught an error:${error}`);
				}
			} else {
				// Handling non-Error types of errors
				notyf.error(`Caught a non-Error type of error:${error}`);
			}
		}
	};
	return { fetchTranslatedText };
};

export default useTranslatedText;
