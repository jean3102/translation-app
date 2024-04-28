import { getTranslations } from '../services/getTranslations';
import { Translations } from '../models/translate';

const useTranslatedText = () => {
	const fetchTranslatedText = async (data: Translations) => {
		const response = await getTranslations(data);
		return response?.translation;
	};
	return { fetchTranslatedText };
};

export default useTranslatedText;
