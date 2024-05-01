import useTranslatorContext from '../hooks/useTranslatorContext';
import { SelectProps } from '../models/languages';

const TranslateTo = ({ languages }: SelectProps) => {
	const { translateTo, handleChangeTo, translatedText } =
		useTranslatorContext();
	return (
		<article className="translateTo">
			<label htmlFor="translateTo">Choose a Language:</label>

			<select
				className="select"
				value={translateTo}
				onChange={handleChangeTo}
				id="translateTo">
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

export default TranslateTo;
