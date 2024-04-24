import DataList from './DataList';

const To = () => {
	return (
		<article className="to">
			<DataList
				label="Choose a language:"
				list="toLanguage"
				name="to"
			/>
			<textarea>hello word</textarea>
		</article>
	);
};

export default To;
