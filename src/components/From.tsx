import DataList from './DataList';

const From = () => {
	return (
		<article className="from">
			<DataList
				label="Choose a language:"
				list="FromLanguage"
				name="from"
			/>
			<textarea>hello word</textarea>
		</article>
	);
};

export default From;
