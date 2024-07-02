import axios from './axios'

const getReferee = async (id: number) => {
	try {
		const endpoint = `/referees/${id}`

		const response = await axios.get(endpoint)
		return response.data
	} catch (error: unknown) {
		return new Error('Network error or no response')
	}
}

const refereesService = {
	getReferee
}

export default refereesService
