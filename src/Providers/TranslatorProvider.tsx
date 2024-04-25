import { useState } from 'react';
import { TranslatorContext } from '../contexts/TranslatorContext';
import useTranslatedText from '../hooks/useGetTranslations';

type TranslatorProvider = {
	children: React.ReactNode;
};
const TranslatorProvider = ({ children }: TranslatorProvider) => {
	const [translatedText, setTranslatedText] = useState('');
	const [from, setFrom] = useState('Spanish');
	const [to, setTo] = useState('English');
	const { fetchTranslatedText } = useTranslatedText();

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
		setTranslatedText((prevValue) => `${prevValue} ...`);
		const data = await fetchTranslatedText(text);
		if (data) setTranslatedText(data);
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
