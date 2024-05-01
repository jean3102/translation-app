export type Languages = {
	country_code: string;
	language: string;
	language_name: string;
};

export type LanguagesResponse = {
	languages: Languages[];
};

export type IdentifyLanguage = {
	languages: {
		confidence: string;
		language: string;
	};
};

export type SelectProps = {
	languages: Languages[] | undefined;
};
