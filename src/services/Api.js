import axios from 'axios'

export const fetchUsers = async () => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/users')
	return res.data
}
export const fetchPosts = async () => {
	const res = await axios.get('https://dummyjson.com/posts')
	return res.data.posts
}
export const fetchUserPosts = async id => {
	const res = await axios.get(`https://dummyjson.com/posts/user/${id}`)
	return res.data.posts
}
