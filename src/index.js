import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
const user = {
	name: 'Alex',
	surname: 'Popov',
}
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App user={user} />)
