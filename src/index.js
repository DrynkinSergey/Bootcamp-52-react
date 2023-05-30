import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

const Global = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
  
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<App />
		<Global />
	</BrowserRouter>
)
