import { notyf } from '../libs/noty';
import { getTranslations } from '../api/getTranslations';

const useTranslatedText = () => {
	const fetchTranslatedText = async (text: string) => {
		try {
			return await getTranslations(text);
		} catch (error) {
			if (error) {
				if (error instanceof Error)
					notyf.error(`Caught an error:${error.message}`);
			} else {
				// Handling non-Error types of errors
				notyf.error(`Caught a non-Error type of error:${error}`);
			}
		}
	};
	return { fetchTranslatedText };
};

export default useTranslatedText;
