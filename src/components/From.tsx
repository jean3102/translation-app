import { ChangeEvent } from 'react';
import useTranslatorContext from '../hooks/useTranslatorContext';
import useLanguages from '../hooks/useLanguages';
import { FROM_DEFAULT_VALUE } from '../utils/constants';

type Timeout = ReturnType<typeof setTimeout>;

const From = () => {
	const { languages } = useLanguages();
	const { from, handleChangeFrom, handleTranslations } = useTranslatorContext();
	console.log(`🚀 ------------ from:`, from);

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
			{/* <section className="dataList">
				<label htmlFor="from">Choose a language:</label>
				<input
					value={from}
					list="fromLanguage"
					id="from"
					name="from"
					onChange={handleChangeFrom}
				/>
				<datalist id="fromLanguage">
					<option value={FROM_DEFAULT_VALUE}>{FROM_DEFAULT_VALUE}</option>
					{languages?.map(
						({ country_code, language_name, language }, index) => (
							<option
								key={index}
								value={`${language_name}- ${language}`}>
								{country_code}
							</option>
						)
					)}
				</datalist>
			</section> */}
			<label htmlFor="from">Choose a Language:</label>
			<select
				className="select"
				value={from}
				onChange={handleChangeFrom}
				id="from">
				<option value={FROM_DEFAULT_VALUE}>Detect language</option>
				{languages?.map(({ country_code, language_name, language }, index) => (
					<option
						key={index}
						value={language}>
						{language_name}-{country_code}
					</option>
				))}
			</select>
			<textarea onChange={handleChanges} />
		</article>
	);
};

export default From;
