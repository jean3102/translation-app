import { ChangeEvent } from 'react';
import { Languages } from '../types/languages';
import useTranslatorContext from '../hooks/useTranslatorContext';

type FromProps = {
	languages: Languages[] | undefined;
};
type Timeout = ReturnType<typeof setTimeout>;

const From = ({ languages }: FromProps) => {
	const { from, handleTranslations } = useTranslatorContext();
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
					onChange={() => {}}
				/>
				<datalist id="fromLanguage">
					{languages?.map(({ country_code, language_name }, index) => (
						<option
							key={index}
							value={`${country_code} - ${language_name}`}>
							{language_name}
						</option>
					))}
				</datalist>
			</section>
			<textarea onChange={handleChanges} />
		</article>
	);
};

export default From;
