export type TranslationsResponse = {
	data: {
		translations: {
			translatedText: string;
		};
	};
};

export type Translated = {
	translation: string;
};

export type Translations = {
	q: string;
	source: string;
	target: string;
};
