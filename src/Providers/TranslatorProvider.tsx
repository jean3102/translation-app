import { TranslatorContext } from '../contexts/TranslatorContext';
import useTranslatorProvider from '../hooks/useTranslatorProvider';

type TranslatorProvider = {
	children: React.ReactNode;
};

const TranslatorProvider = ({ children }: TranslatorProvider) => {
	const {
		translateFrom,
		translateTo,
		translatedText,
		handleChangeFrom,
		handleChangeTo,
		changeLanguage,
		handleTranslations,
		handleSubmit,
	} = useTranslatorProvider();

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
