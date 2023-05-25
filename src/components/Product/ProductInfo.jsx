import React, { useContext } from 'react'
import { MyContext } from '../../App'

export const ProductInfo = () => {
	const { product } = useContext(MyContext)
	console.log(product)
	return <div>{product}</div>
}
