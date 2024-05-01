export type Languages = {
	country_code: string;
	language: string;
	language_name: string;
};

export type LanguagesResponse = {
	languages: Languages[];
};

export type IdentifyLanguage = {
	translation: string;
};

export type SelectProps = {
	languages: Languages[] | undefined;
};

export type IdentifyResponse = {
	languages: {
		language: string;
		confidence: number;
	}[];
};
