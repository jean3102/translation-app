import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import TranslatorProvider from './Providers/TranslatorProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<TranslatorProvider>
		<App />
	</TranslatorProvider>
);
