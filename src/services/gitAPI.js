import axios from 'axios'

const baseURL = 'https://api.github.com/search/'
export const getRepos = (query, page) => {
	return axios.get(`${baseURL}repositories?q=${query}&per_page=8&page=${page}`)
}
