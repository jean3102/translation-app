import { useState } from 'react';
import { FROM_DEFAULT_VALUE } from '../utils/constants';

const useTranslateFrom = () => {
	const [translateFrom, setTranslateFrom] = useState(FROM_DEFAULT_VALUE);
	const handleChangeFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;
		setTranslateFrom(value);
	};

	return { translateFrom, handleChangeFrom, setTranslateFrom };
};

export default useTranslateFrom;
