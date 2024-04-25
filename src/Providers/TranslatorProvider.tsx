import { useState } from 'react';
import { TranslatorContext } from '../contexts/TranslatorContext';

type TranslatorProvider = {
	children: React.ReactNode;
};
const TranslatorProvider = ({ children }: TranslatorProvider) => {
	const [translatedText, setTranslatedText] = useState('');
	const [from, setFrom] = useState('ES - Spanish');
	const [to, setTo] = useState('US - English');

	const changeLanguage = () => {
		setFrom(to);
		setTo(from);
	};

	const handleTranslations = (text: string) => {
		setTimeout(() => {
			setTranslatedText(text);
		}, 2000);
	};

	return (
		<TranslatorContext.Provider
			value={{
				from: from,
				to: to,
				translatedText: translatedText,
				changeLanguage: changeLanguage,
				handleTranslations: handleTranslations,
			}}>
			{children}
		</TranslatorContext.Provider>
	);
};

export default TranslatorProvider;
