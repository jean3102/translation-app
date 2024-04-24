import '../styles/dataList.css';

type DataListProps = {
	label: string;
	name: string;
	list: string;
};

const DataList = ({ label, name, list }: DataListProps) => {
	return (
		<section className="dataList">
			<label htmlFor={name}>{label}</label>
			<input
				list={list}
				id={name}
				name={name}
			/>
			<datalist id={list}>
				<option value="Chocolate"></option>
				<option value="Coconut"></option>
				<option value="Mint"></option>
				<option value="Strawberry"></option>
				<option value="Vanilla"></option>
			</datalist>
		</section>
	);
};

export default DataList;
