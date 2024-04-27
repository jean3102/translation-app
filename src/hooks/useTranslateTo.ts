import { useState } from 'react';
import { TO_DEFAULT_VALUE } from '../utils/constants';

const useTranslateTo = () => {
	const [translateTo, setTranslateTo] = useState(TO_DEFAULT_VALUE);
	const handleChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setTranslateTo(value);
	};

	return { translateTo, handleChangeTo, setTranslateTo };
};

export default useTranslateTo;
