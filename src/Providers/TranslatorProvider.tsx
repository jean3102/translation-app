import { useState } from 'react';
import { TranslatorContext } from '../contexts/TranslatorContext';
import { getTranslations } from '../api/getTranslations';

type TranslatorProvider = {
	children: React.ReactNode;
};
const TranslatorProvider = ({ children }: TranslatorProvider) => {
	const [translatedText, setTranslatedText] = useState('');
	const [from, setFrom] = useState('Spanish');
	const [to, setTo] = useState('English');

	const changeLanguage = () => {
		setFrom(to);
		setTo(from);
	};

	const handleChangeFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setFrom(value);
	};

	const handleChangeTo = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setTo(value);
	};

	const handleTranslations = async (text: string) => {
		const translatedText = await getTranslations(text);
		setTranslatedText(translatedText);
	};

	return (
		<TranslatorContext.Provider
			value={{
				from: from,
				to: to,
				handleChangeFrom: handleChangeFrom,
				handleChangeTo: handleChangeTo,
				translatedText: translatedText,
				changeLanguage: changeLanguage,
				handleTranslations: handleTranslations,
			}}>
			{children}
		</TranslatorContext.Provider>
	);
};

export default TranslatorProvider;
