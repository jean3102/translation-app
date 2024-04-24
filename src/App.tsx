import './styles/App.css';
import Button from './components/Button';
import From from './components/From';
import To from './components/To';

function App() {
	

	return (
		<>
			<main>
				<h1>Translation App</h1>
				<section className="translation">
					<From />
					<Button onClick={() => ''}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24">
							<g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5">
								<path d="M3.53 11.47v2.118a4.235 4.235 0 0 0 4.235 4.236H20.47M3.53 6.176h12.705a4.235 4.235 0 0 1 4.236 4.236v2.117" />
								<path d="m17.294 14.647l3.177 3.176L17.294 21M6.706 9.353L3.529 6.176L6.706 3" />
							</g>
						</svg>
					</Button>
					<To />
				</section>
			</main>
		</>
	);
}

export default App;
