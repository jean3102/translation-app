import { useEffect, useState } from 'react';
import { notyf } from '../libs/noty';
import { getTranslations } from '../api/getTranslations';

const useTranslatedText = () => {
	const [translatedText, setTranslatedText] = useState('');
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchTranslatedText = async () => {
			try {
				const response = await getTranslations();
				setTranslatedText(response);
				localStorage.setItem('languages', JSON.stringify(response));
			} catch (error) {
				if (error) {
					if (error instanceof Error)
						notyf.error(`Caught an error:${error.message}`);
				} else {
					// Handling non-Error types of errors
					notyf.error(`Caught a non-Error type of error:${error}`);
				}
			} finally {
				setLoading(false);
			}
		};
		fetchTranslatedText();
	}, []);
	return { translatedText, loading };
};

export default useTranslatedText;
