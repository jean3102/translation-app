// export type Languages = {
// 	country_code: string;
// 	language: string;
// 	language_name: string;
// };
export type Languages = {
	language: string;
	name: string;
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
	data: {
		detections: {
			language: string;
			isReliable: boolean;
			confidence: number;
		}[];
	};
};
