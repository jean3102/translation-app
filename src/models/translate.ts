export type TranslationsResponse = {
	translations: {
		translation: string;
	}[];
};

export type Translated = {
	translation: string;
};

export type Translations = {
	target: string;
	text: string;
};
