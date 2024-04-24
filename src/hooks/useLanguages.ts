import { useEffect, useState } from 'react';
import { getLanguages } from '../api/getLanguages';
import { notyf } from '../libs/noty';

const useLanguages = () => {
	const [languages, setLanguages] = useState();
	useEffect(() => {
		const fetchLanguages = async () => {
			try {
				const response = await getLanguages();
				setLanguages(response);
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

		fetchLanguages();
	}, []);

	return { languages };
};

export default useLanguages;
