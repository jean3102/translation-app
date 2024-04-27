import { createContext } from 'react';
type TranslatorContext = {
	translatedText: string;
	from: string;
	to: string;
	handleChangeFrom: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	handleChangeTo: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	changeLanguage: () => void;
	handleTranslations: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const TranslatorContext = createContext<TranslatorContext | undefined>(
	undefined
);
