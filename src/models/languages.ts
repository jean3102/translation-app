export type Languages = {
	country_code: string;
	language: string;
	language_name: string;
};
export type IdentifyLanguage = {
	languages: {
		confidence: string;
		language: string;
	};
};
