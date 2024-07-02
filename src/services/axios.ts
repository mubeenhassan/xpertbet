import axios, { AxiosError, AxiosResponse } from 'axios'
import { apiHost } from '../constants'

axios.defaults.baseURL = apiHost

const axiosInstance = axios.create({
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json; charset=UTF-8'
	}
})

axiosInstance.interceptors.response.use(
	(response: AxiosResponse): AxiosResponse => {
		return response
	},
	(error: AxiosError) => {
		if (!error.response) {
			console.error('Network error or no response received')
		}
		return Promise.reject(error)
	}
)

export default axiosInstance
