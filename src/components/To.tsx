import { Languages } from '../types/languages';
import useTranslatorContext from '../hooks/useTranslatorContext';

type ToProps = {
	languages: Languages[] | undefined;
};

const To = ({ languages }: ToProps) => {
	const { to, translatedText } = useTranslatorContext();

	return (
		<article className="to">
			<section className="dataList">
				<label htmlFor="from">Choose a language:</label>
				<input
					value={to}
					list="toLanguage"
					id="to"
					name="to"
					onChange={() => {}}
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
				value={translatedText}
			/>
		</article>
	);
};

export default To;
