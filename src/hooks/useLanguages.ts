import { useEffect, useState } from 'react';
import { getLanguages } from '../services/getLanguages';
import { Languages } from '../models/languages';

const useLanguages = () => {
	const [languages, setLanguages] = useState<Languages[]>();
	useEffect(() => {
		const fetchLanguages = async () => {
			const response = await getLanguages();
			if (response) {
				setLanguages(response);
				localStorage.setItem('languages', JSON.stringify(response));
			}
		};

		//TODO avoid the API call if the data is saved
		if (!localStorage.getItem('languages')) fetchLanguages();

		const savedItems = localStorage.getItem('languages');
		if (savedItems) setLanguages(JSON.parse(savedItems));
	}, []);

	return { languages };
};

export default useLanguages;
