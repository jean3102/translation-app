import { useState } from 'react';
import { TranslatorContext } from '../contexts/TranslatorContext';
import useTranslatedText from '../hooks/useGetTranslations';
import { splitText } from '../utils/splitText';
import { FROM_DEFAULT_VALUE, TO_DEFAULT_VALUE } from '../utils/constants';

type TranslatorProvider = {
	children: React.ReactNode;
};
const TranslatorProvider = ({ children }: TranslatorProvider) => {
	const [translatedText, setTranslatedText] = useState('');
	const [from, setFrom] = useState(FROM_DEFAULT_VALUE);
	console.log(`🚀 ------------ from:`, from)
	const [to, setTo] = useState(TO_DEFAULT_VALUE);
	const { fetchTranslatedText } = useTranslatedText();

	const changeLanguage = () => {
		setFrom(to);
		setTo(from);
	};
	
	const handleChangeFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setFrom(value);
	};
	
	const handleChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setTo(value);
	};
	
	const handleTranslations = async (text: string) => {
		console.log(`🚀 ------------ from:`, from)
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
