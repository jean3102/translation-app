import useTranslatorContext from '../hooks/useTranslatorContext';
import { SelectProps } from '../models/languages';
import { FROM_DEFAULT_VALUE } from '../utils/constants';

const TranslateFrom = ({ languages }: SelectProps) => {
	const { translateFrom, handleChangeFrom, handleTranslations, textValue } =
	useTranslatorContext();
	console.log(`🚀 ------------ textValue:`, textValue)
	return (
		<article className="translateFrom">
			<label htmlFor="translateFrom">Choose a Language:</label>
			<select
				className="select"
				value={translateFrom}
				onChange={handleChangeFrom}
				id="translateFrom">
				<option value={FROM_DEFAULT_VALUE}>Detect language</option>
				{languages?.map(({ language_name, language }, index) => (
					<option
						key={index}
						value={language}>
						{language_name}-{language}
					</option>
				))}
			</select>
			<textarea
				placeholder="Type anything…"
				onChange={handleTranslations}
				value={textValue}
			/>
		</article>
	);
};

export default TranslateFrom;
