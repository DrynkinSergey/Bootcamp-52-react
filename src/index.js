import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { createGlobalStyle, styled } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './HOC/ContextProvider'

const Global = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
  
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<ContextProvider>
			<App />
		</ContextProvider>
		<Global />
	</BrowserRouter>
)
