import { useState } from 'react';
import { TranslatorContext } from '../contexts/TranslatorContext';
import useTranslatedText from '../hooks/useGetTranslations';
import { splitText } from '../utils/splitText';
import { FROM_DEFAULT_VALUE, TO_DEFAULT_VALUE } from '../utils/constants';
import { notyf } from '../libs/noty';

type TranslatorProvider = {
	children: React.ReactNode;
};
const TranslatorProvider = ({ children }: TranslatorProvider) => {
	const [textValue, setTextValue] = useState('');
	const [translatedText, setTranslatedText] = useState('');
	const [translateFrom, setTranslateFrom] = useState(FROM_DEFAULT_VALUE);
	const [translateTo, setTranslateTo] = useState(TO_DEFAULT_VALUE);
	const { fetchTranslatedText } = useTranslatedText();

	const changeLanguage = () => {
		setTranslateTo(translateFrom);
		setTranslateFrom(translateTo);
	};

	const handleChangeFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setTranslateFrom(value);
	};

	const handleChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setTranslateTo(value);
	};

	const handleTranslations = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { value } = event.target;
		setTextValue(value);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (textValue === '') return notyf.error('type text before translation');
		
		setTranslatedText((prevValue) => `${prevValue} ...`);
		const data = await fetchTranslatedText({
			target: splitText(translateTo),
			text: textValue,
		});
		setTranslatedText('');
		if (data) {
			setTranslatedText(data);
		}
	};

	return (
		<TranslatorContext.Provider
			value={{
				translateFrom: translateFrom,
				translateTo: translateTo,
				handleChangeFrom: handleChangeFrom,
				handleChangeTo: handleChangeTo,
				translatedText: translatedText,
				changeLanguage: changeLanguage,
				handleTranslations: handleTranslations,
				handleSubmit: handleSubmit,
			}}>
			{children}
		</TranslatorContext.Provider>
	);
};

export default TranslatorProvider;
