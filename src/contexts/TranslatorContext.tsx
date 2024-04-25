import { createContext } from 'react';
type TranslatorContext = {
	translatedText: string;
	from: string;
	to: string;
	handleChangeFrom: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeTo: (event: React.ChangeEvent<HTMLInputElement>) => void;
	changeLanguage: () => void;
	handleTranslations: (value: string) => void;
};

export const TranslatorContext = createContext<TranslatorContext | undefined>(
	undefined
);
