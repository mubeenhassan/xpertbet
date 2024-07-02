import axios from './axios'

const getLeaguesList = async () => {
	try {
		const endpoint = '/leagues'

		const response = await axios.get(endpoint)
		return response.data
	} catch (error: unknown) {
		return new Error('Network error or no response')
	}
}

const getLeagueTable = async (id: number) => {
	try {
		const endpoint = `/leagues/table/${id}`

		const response = await axios.get(endpoint)
		return response.data
	} catch (error: unknown) {
		return new Error('Network error or no response')
	}
}

const leaguesService = {
	getLeaguesList,
	getLeagueTable
}

export default leaguesService
