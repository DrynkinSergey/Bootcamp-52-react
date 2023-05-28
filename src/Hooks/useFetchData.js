import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetchData = url => {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(url)
				setData(response.data)
			} catch (error) {
				console.error('Error fetching posts:', error)
			}
		}

		fetchData()
	}, [url])

	return data
}
