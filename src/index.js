import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<>
		<Provider store={store}>
			<BrowserRouter>
				<App />
				<ToastContainer autoClose={1000} />
			</BrowserRouter>
		</Provider>
	</>
)
