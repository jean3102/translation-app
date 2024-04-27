import useTranslatorContext from '../hooks/useTranslatorContext';
import useLanguages from '../hooks/useLanguages';
import { FROM_DEFAULT_VALUE } from '../utils/constants';


const TranslateFrom = () => {
	const { languages } = useLanguages();
	const { translateFrom, handleChangeFrom, handleTranslations } = useTranslatorContext();

	return (
		<article className="translateFrom">
			<label htmlFor="translateFrom">Choose a Language:</label>
			<select
				className="select"
				value={translateFrom}
				onChange={handleChangeFrom}
				id="translateFrom">
				<option value={FROM_DEFAULT_VALUE}>Detect language</option>
				{languages?.map(({ country_code, language_name, language }, index) => (
					<option
						key={index}
						value={language}>
						{language_name}-{country_code}
					</option>
				))}
			</select>
			<textarea onChange={handleTranslations} />
		</article>
	);
};

export default TranslateFrom;
