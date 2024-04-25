import { createContext } from 'react';
type TranslatorContext = {
	translatedText: string;
	from: string;
	to: string;
	changeLanguage: () => void;
	handleTranslations: (value: string) => void;
};

export const TranslatorContext = createContext<TranslatorContext | undefined>(
	undefined
);
