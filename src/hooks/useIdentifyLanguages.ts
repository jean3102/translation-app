import { getIdentifyLanguages } from '../services/IdentifyLanguages';

const useIdentifyLanguages = () => {
	const fetchIdentifyLanguages = async (data: string) => {
		const response = await getIdentifyLanguages(data);
		return response?.translation;
	};

	return { fetchIdentifyLanguages };
};

export default useIdentifyLanguages;
