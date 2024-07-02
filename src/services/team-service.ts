import axios from './axios'

const getLeagueTeams = async (id: number) => {
	try {
		const endpoint = `/teams/league/${id}`

		const response = await axios.get(endpoint)
		return response.data
	} catch (error: unknown) {
		return new Error('Network error or no response')
	}
}

const getTeamsByID = async (id: number) => {
	try {
		const endpoint = `/teams/${id}`

		const response = await axios.get(endpoint)
		return response.data
	} catch (error: unknown) {
		return new Error('Network error or no response')
	}
}

const getRecentMatches = async (name: string, isHomeTeam: boolean) => {
	try {
		const endpoint = `/teams/recentMatches?name=${name}&isHomeTeam=${isHomeTeam}`

		const response = await axios.get(endpoint)
		return response.data
	} catch (error: unknown) {
		return new Error('Network error or no response')
	}
}

const teamsService = {
	getLeagueTeams,
	getTeamsByID,
	getRecentMatches
}

export default teamsService
