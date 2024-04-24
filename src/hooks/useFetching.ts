import { useEffect, useState } from 'react';
import { notyf } from '../libs/noty';

type useFetchingProps = {
	fetch: () => Promise<[]>;
};

const useFetching = <T>({ fetch }: useFetchingProps) => {
	const [data, setData] = useState<T[]>();

	useEffect(() => {
		const fetchLanguages = async () => {
			try {
				const response = await fetch();
				setData(response);
			} catch (error) {
				if (error) {
					if (error instanceof Error)
						notyf.error(`Caught an error:${error.message}`);
				} else {
					// Handling non-Error types of errors
					notyf.error(`Caught a non-Error type of error:${error}`);
				}
			}
		};

		fetchLanguages();
	}, [fetch]);

	return { data };
};

export default useFetching;
