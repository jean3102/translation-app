import { useState } from 'react';
import { TranslatorContext } from '../contexts/TranslatorContext';
import useTranslatedText from '../hooks/useGetTranslations';
import { splitText } from '../utils/splitText';

type TranslatorProvider = {
	children: React.ReactNode;
};
const TranslatorProvider = ({ children }: TranslatorProvider) => {
	const [translatedText, setTranslatedText] = useState('');
	const [from, setFrom] = useState('Spanish-es');
	const [to, setTo] = useState('English-en');
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
		const data = await fetchTranslatedText({
			target: splitText(to),
			text: text,
		});
		setTranslatedText('');
		if (data) {
			setTranslatedText(data);
		}
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
