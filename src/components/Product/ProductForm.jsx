import React, { useContext, useState } from 'react'
import { MyContext } from '../../App'

export const ProductForm = () => {
	const { setProduct } = useContext(MyContext)
	const [newProduct, setNewProduct] = useState('')
	const onSubmit = e => {
		e.preventDefault()
		setProduct(newProduct)
	}
	return (
		<form onSubmit={onSubmit}>
			<input type='text' onChange={e => setNewProduct(e.target.value)} />
			<button>Save</button>
		</form>
	)
}
