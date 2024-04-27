import useTranslatedText from './useGetTranslations';
import useTranslateFrom from './useTranslateFrom';
import useTranslateTo from './useTranslateTo';
import { useState } from 'react';
import { notyf } from '../libs/noty';

const useTranslatorProvider = () => {
	const [textValue, setTextValue] = useState('');
	const [translatedText, setTranslatedText] = useState('');
	const { fetchTranslatedText } = useTranslatedText();
	const { translateFrom, handleChangeFrom, setTranslateFrom } = useTranslateFrom();
	const { translateTo, handleChangeTo, setTranslateTo } = useTranslateTo();

	const changeLanguage = () => {
		setTranslateTo(translateFrom);
		setTranslateFrom(translateTo);
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
			target: translateFrom,
			text: textValue,
		});
		setTranslatedText('');
		if (data) {
			setTranslatedText(data);
		}
	};

	return {
        translateFrom,
        translateTo,
		translatedText,
		handleChangeFrom,
		handleChangeTo,
		changeLanguage,
		handleTranslations,
		handleSubmit,
	};
};

export default useTranslatorProvider;
