import { useEffect, useState } from 'react'

export const useFetch = apiFn => {
	const [data, setData] = useState([])
	// const fn = useCallback(() => apiFn, [apiFn])
	useEffect(() => {
		const fetchData = async () => {
			const res = await apiFn()
			setData(res)
		}
		fetchData()
	}, [apiFn])
	return [data, setData]
}
