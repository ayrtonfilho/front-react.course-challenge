import { RoutesApp } from './routes/RoutesApp';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { LoadingProvider } from './context/provider/LoadingProvider';

function App() {

	return (
		<BrowserRouter>
			<LoadingProvider>
				<RoutesApp/>
			</LoadingProvider>
			<ToastContainer/>
		</BrowserRouter>
	);
}

export default App;
