import React, { createContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { GitRepos } from './components/GitRepos/GitRepos'
import { ProductList } from './components/Product/ProductList'

import { ProductForm } from './components/Product/ProductForm'
import colors from './assets/colors.json'
import { ColorPicker } from './components/ColorPicker/ColorPicker'

export const MyContext = createContext()

const App = () => {
	const [product, setProduct] = useState('Laptop')

	const value = {
		product,
		setProduct,
		colors,
	}
	return (
		<>
			<MyContext.Provider value={value}>
				<ProductList />
				<ColorPicker />
				<GitRepos />
			</MyContext.Provider>
			<ToastContainer autoClose={1000} />
		</>
	)
}

export default App
