import { CalendarOdds } from 'pages/calendar-odds'
import { MatchDetails } from 'pages/match-details'
import { Match } from 'pages/matches'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { League } from 'pages/league'

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Match />} />
				<Route path="/calendar" element={<CalendarOdds />} />
				<Route path="/:id" element={<MatchDetails />} />
				<Route path="/leagues" element={<League />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routing
