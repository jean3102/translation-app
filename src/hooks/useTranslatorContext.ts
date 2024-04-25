import { useContext } from 'react';
import { TranslatorContext } from '../contexts/TranslatorContext';

const useTranslatorContext = () => {
	const translatorContext = useContext(TranslatorContext);
	if (!translatorContext)
		throw new Error('useTranslatorContext must be used within a CartProvider');

	return translatorContext;
};

export default useTranslatorContext;
