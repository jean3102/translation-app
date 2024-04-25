import { useEffect, useState } from 'react';
import { getLanguages } from '../api/getLanguages';
import { notyf } from '../libs/noty';
import { Languages } from '../types/languages';

const useLanguages = () => {
	const [languages, setLanguages] = useState<Languages[]>();
	useEffect(() => {
		const fetchLanguages = async () => {
			try {
				const response = await getLanguages();
				setLanguages(response);
				localStorage.setItem('languages', JSON.stringify(response));
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

		//TODO avoid the API call if the data is saved
		if (!localStorage.getItem('languages')) fetchLanguages();

		const savedItems = localStorage.getItem('languages');
		if (savedItems) {
			setLanguages(JSON.parse(savedItems));
		}
	}, []);

	return { languages };
};

export default useLanguages;
