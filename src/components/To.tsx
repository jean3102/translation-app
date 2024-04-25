import useLanguages from '../hooks/useLanguages';
import useTranslatorContext from '../hooks/useTranslatorContext';

const To = () => {
	const { languages } = useLanguages();
	const { to, handleChangeTo, translatedText } = useTranslatorContext();

	return (
		<article className="to">
			<section className="dataList">
				<label htmlFor="from">Choose a language:</label>
				<input
					value={to}
					list="toLanguage"
					id="to"
					name="to"
					onChange={handleChangeTo}
				/>
				<datalist id="toLanguage">
					{languages?.map(({ country_code, language_name }, index) => (
						<option
							key={index}
							value={`${country_code} - ${language_name}`}>
							{language_name}
						</option>
					))}
				</datalist>
			</section>
			<textarea
				readOnly={true}
				value={translatedText === '...' ? '' : translatedText}
			/>
		</article>
	);
};

export default To;
