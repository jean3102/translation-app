import { ChangeEvent } from 'react';
import useTranslatorContext from '../hooks/useTranslatorContext';
import useLanguages from '../hooks/useLanguages';

type Timeout = ReturnType<typeof setTimeout>;

const From = () => {
	const { languages } = useLanguages();
	console.log(`🚀 ------------ languages:`, languages);
	const { from, handleChangeFrom, handleTranslations } = useTranslatorContext();

	let timeoutId: Timeout;

	const handleChanges = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = event.target;

		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			if (value) handleTranslations(value);
		}, 500);
	};

	return (
		<article className="from">
			<section className="dataList">
				<label htmlFor="from">Choose a language:</label>
				<input
					value={from}
					list="fromLanguage"
					id="from"
					name="from"
					onChange={handleChangeFrom}
				/>
				<datalist id="fromLanguage">
					{languages?.map(({ country_code, language_name }, index) => (
						<option
							key={index}
							value={`${language_name}`}>
							{country_code}
						</option>
					))}
				</datalist>
			</section>
			<textarea onChange={handleChanges} />
		</article>
	);
};

export default From;
