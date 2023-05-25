import React, { useContext } from 'react'
import { MyContext } from '../../App'

export const ProductInfo = () => {
	const { product } = useContext(MyContext)
	// context =>>>>> {product, setProduct, colors}
	console.log(product)
	return <div>{product}</div>
}
