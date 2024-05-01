import useTranslatedText from './useGetTranslations';
import useTranslateFrom from './useTranslateFrom';
import useTranslateTo from './useTranslateTo';
import { useState } from 'react';
import { notyf } from '../libs/noty';
import useIdentifyLanguages from './useIdentifyLanguages';

const useTranslatorProvider = () => {
	const [textValue, setTextValue] = useState('');
	const [translatedText, setTranslatedText] = useState('');
	const { fetchTranslatedText } = useTranslatedText();
	const { translateFrom, handleChangeFrom, setTranslateFrom } =
		useTranslateFrom();
	const { translateTo, handleChangeTo, setTranslateTo } = useTranslateTo();
	const { fetchIdentifyLanguages } = useIdentifyLanguages();

	const changeLanguage = () => {
		setTranslateTo(translateFrom);
		setTranslateFrom(translateTo);
		setTranslatedText(textValue);
		setTextValue(translatedText);
	};

	const handleTranslations = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { value } = event.target;
		setTextValue(value);
	};

	const handleIdentifyLanguage = async (): Promise<string | undefined> => {
		let identify = null;
		identify = await fetchIdentifyLanguages(textValue);

		if (identify) setTranslateFrom(identify);
		return identify;
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (textValue === '') return notyf.error('type text before translation');

		const identifyLanguage = await handleIdentifyLanguage();

		setTranslatedText((prevValue) => `${prevValue} ...`);

		const data = await fetchTranslatedText({
			q: textValue.trim(),
			source: identifyLanguage ?? translateFrom,
			target: translateTo,
		});

		setTranslatedText('');
		if (data) setTranslatedText(data);
	};

	return {
		textValue,
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
