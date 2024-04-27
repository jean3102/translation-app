import './styles/App.css';
import Button from './components/Button';
import From from './components/TranslateFrom';
import To from './components/TranslateTo';
import useTranslatorContext from './hooks/useTranslatorContext';
import { FROM_DEFAULT_VALUE } from './utils/constants';

function App() {
	const { changeLanguage, handleSubmit, translateFrom } =
		useTranslatorContext();
	const change = () => {
		if (translateFrom !== FROM_DEFAULT_VALUE) changeLanguage();
	};
	return (
		<main>
			<h2>Translation App</h2>
			<section className="translation">
				<From />

				<div className="groupButton">
					<form onSubmit={handleSubmit}>
						<Button
							type="submit"
							color="green">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 32 32">
								<path
									fill="currentColor"
									d="M16 28h-3c-3.9 0-7-3.1-7-7v-4h2v4c0 2.8 2.2 5 5 5h3v2zm12 2h2.2l-4.6-11h-2.2l-4.6 11H21l.8-2h5.3l.9 2zm-5.3-4l1.8-4.4l1.8 4.4h-3.6zM28 15h-2v-4c0-2.8-2.2-5-5-5h-4V4h4c3.9 0 7 3.1 7 7v4zM14 5V3H9V1H7v2H2v2h8.2c-.2.9-.8 2.5-2.2 4c-.6-.7-1.1-1.4-1.4-2H4.3c.4 1 1.1 2.2 2.1 3.3c-.8.7-2 1.3-3.4 1.8l.7 1.9c1.8-.7 3.2-1.5 4.3-2.3c1.1.9 2.5 1.7 4.3 2.3l.7-1.9c-1.4-.5-2.6-1.2-3.5-1.8c1.9-2 2.5-4.1 2.7-5.3H14z"
								/>
							</svg>
						</Button>
					</form>
					<Button
						type="button"
						onClick={change}>
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
				</div>
				<To />
			</section>
		</main>
	);
}

export default App;
