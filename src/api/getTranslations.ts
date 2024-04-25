export const getTranslations = async (text: string): Promise<string> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(`🚀 ------------ text:`, text)
			resolve('hello world');
		}, 3000);
	});

	// const myHeaders = new Headers();
	// myHeaders.append('apikey', import.meta.env.VITE_API_KEY);

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
