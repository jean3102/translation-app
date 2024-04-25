import './styles/App.css';
import Button from './components/Button';
import From from './components/From';
import To from './components/To';
import useTranslatorContext from './hooks/useTranslatorContext';

function App() {
	const { changeLanguage } = useTranslatorContext();
	console.log('object is')
	return (
		<main>
			<h1>Translation App</h1>
			<section className="translation">
				<From />
				<Button onClick={() => changeLanguage()}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 1792 1376">
						<path
							fill="currentColor"
							d="M1792 928v192q0 13-9.5 22.5t-22.5 9.5H384v192q0 13-9.5 22.5T352 1376q-12 0-24-10L9 1046q-9-9-9-22q0-14 9-23l320-320q9-9 23-9q13 0 22.5 9.5T384 704v192h1376q13 0 22.5 9.5t9.5 22.5zm0-544q0 14-9 23l-320 320q-9 9-23 9q-13 0-22.5-9.5T1408 704V512H32q-13 0-22.5-9.5T0 480V288q0-13 9.5-22.5T32 256h1376V64q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z"
						/>
					</svg>
				</Button>
				<To />
			</section>
		</main>
	);
}

export default App;
