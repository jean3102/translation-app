import { getIdentifyLanguages } from '../services/IdentifyLanguages';

const useIdentifyLanguages = () => {
	const fetchIdentifyLanguages = async (text: string) => {
		const response = await getIdentifyLanguages(text);
		return response?.translation;
	};

	return { fetchIdentifyLanguages };
};

export default useIdentifyLanguages;
