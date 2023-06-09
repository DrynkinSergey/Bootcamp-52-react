import axios from 'axios'
// testuser_123@mail.com
export const instance = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})
export const setToken = token => {
	instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
	instance.defaults.headers.common.Authorization = ''
}
