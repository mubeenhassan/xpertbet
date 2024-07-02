import axios from './axios'

const getPlayersByID = async (id: number) => {
	try {
		const endpoint = `/players/${id}`

		const response = await axios.get(endpoint)
		return response.data
	} catch (error: unknown) {
		return new Error('Network error or no response')
	}
}

const playersService = {
	getPlayersByID
}

export default playersService
