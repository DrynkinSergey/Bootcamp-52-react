import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<App />
					<ToastContainer autoClose={1000} />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</>
)
