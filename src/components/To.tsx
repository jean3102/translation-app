import useLanguages from '../hooks/useLanguages';
import useTranslatorContext from '../hooks/useTranslatorContext';

const To = () => {
	const { languages } = useLanguages();
	const { to, handleChangeTo, translatedText } = useTranslatorContext();

	return (
		<article className="to">
			<label htmlFor="to">Choose a Language:</label>

			<select
				className="select"
				value={to}
				onChange={handleChangeTo}
				id="to">
				{languages?.map(({ country_code, language_name, language }, index) => (
					<option
						key={index}
						value={language}>
						{language_name}-{country_code}
					</option>
				))}
			</select>
			<textarea
				readOnly={true}
				value={translatedText === '...' ? '' : translatedText}
			/>
		</article>
	);
};

export default To;
