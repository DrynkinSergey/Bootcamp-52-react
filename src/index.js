import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// const el = React.createElement(
// 	'a',
// 	{
// 		href: '/',
// 		title: 'Hello',
// 	},
// 	'Click me!'
// )
//imperative
// const wrapper = React.createElement(
// 	'div',
// 	null,
// 	React.createElement('h1', '', React.createElement('span', '')),
// 	el
// )
//declarative
// const wrapperJSX = (
// 	<div>
// 		<h1>Hello its my first element</h1>
// 		<a href='/' title='hello'>
// 			Click me!
// 		</a>
// 	</div>
// )

// const AppComponent = () => {
// 	const title = 'This text inside my variable'
// 	return (
// 		//Це фрагмент в якості батьківського діва
// 		<>
// 			<Header />
// 			<main>
// 				<h1>{title}</h1>
// 				<Section />
// 				<a href='/' title='hello'>
// 					Click me!
// 				</a>
// 			</main>
// 		</>
// 	)
// }
const user = {
	name: 'Alex',
	surname: 'Popov',
}
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App user={user} />)
// <a href='/' title='Hello'>Click me!</a>

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
// 	// <React.StrictMode>
// 	<App />
// 	// </React.StrictMode>
// )
