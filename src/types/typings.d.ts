type Bench = {
	team_a: Array<{
		player_in_events: string[]
		player_in_id: number
		player_in_shirt_number: number
		player_out_id: number
		player_out_time: string
	}>
	team_b: Array<{
		player_in_events: string[]
		player_in_id: number
		player_in_shirt_number: number
		player_out_id: number
		player_out_time: string
	}>
}

type BettingStats = {
	avg_goals: number
	btts: number
	bttsPercentage: number
	clubACS: number
	clubACSPercentage: number
	clubBCS: number
	clubBCSPercentage: number
	over05: number
	over05Percentage: number
	over15: number
	over15Percentage: number
	over25: number
	over25Percentage: number
	over35: number
	over35Percentage: number
	over45: number
	over45Percentage: number
	over55: number
	over55Percentage: number
	total_goals: number
}

type PreviousMatchType = {
	id: number
	date_unix: number
	team_a_goals: number
	team_a_id: number
	team_b_goals: number
	team_b_id: number
}

type PreviosMatchResult = {
	draw: number
	team_a_win_away: number
	team_a_win_home: number
	team_a_win_percent: number
	team_a_wins: number
	team_b_win_away: number
	team_b_win_home: number
	team_b_win_percent: number
	team_b_wins: number
	totalMatches: number
}

type H2H = {
	betting_stats: BettingStats
	previous_matches_ids: PreviousMatchType[]
	previous_matches_results: PreviosMatchResult[]
	team_a_id: number
	team_b_id: number
}

type Weather = {
	clouds: string
	code: string
	coordinates: { lat: number; lon: number }
	humidity: string
	pressure: number
	temperature: { temp: number; unit: string }
	temperature_celcius: { temp: number; unit: string }
	type: string
	wind: { degree: number; speed: string }
}
interface MatchDetails {
	GoalCount_2hg: number
	HTGoalCount: number
	attacks_recorded: number
	attendance: number
	avg_potential: number
	awayGoalCount: number
	awayGoals: number[]
	awayGoals_timings: number[]
	awayID: number
	away_image: string
	away_name: string
	away_ppg: number
	away_url: string
	bench: Bench
	btts_2hg_potential: number
	btts_fhg_potential: number
	btts_potential: number
	card_timings_recorded: number
	cards_potential: number
	coach_a_ID: number
	coach_b_ID: number
	competition_id: number
	corner_2h_count: number
	corner_fh_count: number
	corner_timings_recorded: number
	corners_o85_potential: number
	corners_o95_potential: number
	corners_o105_potential: number
	corners_potential: number
	date_unix: number
	freekicks_recorded: number
	game_week: number
	goalTimingDisabled: number
	goal_timings_recorded: number
	goalkicks_recorded: number
	goals_2hg_team_a: number
	goals_2hg_team_b: number
	gpt_en: number
	gpt_int: object
	h2h: H2H
	homeGoalCount: number
	homeGoals: string[]
	homeGoals_timings: string[]
	homeID: number
	home_image: string
	home_name: string
	home_ppg: number
	home_url: string
	ht_goals_team_a: number
	ht_goals_team_b: number
	id: number
	match_url: string
	matches_completed_minimum: number
	refereeID: number
	stadium_location: string
	stadium_name: string
	status: string
	weather: Weather
	winningTeam: number
}

interface Referee {
	age: number
	last_name: string
	first_name: string
	full_name: string
}
