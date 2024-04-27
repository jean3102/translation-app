import useTranslatorContext from '../hooks/useTranslatorContext';
import useLanguages from '../hooks/useLanguages';
import { FROM_DEFAULT_VALUE } from '../utils/constants';


const From = () => {
	const { languages } = useLanguages();
	const { from, handleChangeFrom, handleTranslations } = useTranslatorContext();


	return (
		<article className="from">
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
			<textarea onChange={handleTranslations} />
		</article>
	);
};

export default From;
