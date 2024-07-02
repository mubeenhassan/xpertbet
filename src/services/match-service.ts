import axios from './axios'

const getMatches = async (date: string | undefined = undefined) => {
	try {
		let endpoint = '/matches'

		if (date) {
			endpoint += `?date=${date}`
		}

		const response = await axios.get(endpoint)
		return response.data
	} catch (error: unknown) {
		return new Error('Network error or no response')
	}
}

const getMatchDetails = async (id: number) => {
	try {
		const endpoint = `/matches/${id}`

		const response = await axios.get(endpoint)
		return response.data
	} catch (error: unknown) {
		return new Error('Network error or no response')
	}
}

const matchesService = {
	getMatches,
	getMatchDetails
}

export default matchesService
