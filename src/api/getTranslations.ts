export const getTranslations = async (text: string): Promise<string> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(text);
		}, 2000);
	});

	// const myHeaders = new Headers();
	// myHeaders.append('apikey', import.meta.env.VITE_API_KEY);
	/* The code snippet `const response = await getTranslations(translatedText);
setTranslatedText(response);` is making an asynchronous call to the `getTranslations` function
with the `translatedText` as a parameter. */

	// const requestOptions: RequestInit = {
	// 	method: 'GET',
	// 	redirect: 'follow',
	// 	headers: myHeaders,
	// };

	// const data = await fetch(
	// 	'https://api.apilayer.com/language_translation/languages',
	// 	requestOptions
	// );https://typescript.tv/errors/#ts2352

	// return data.json();
};
