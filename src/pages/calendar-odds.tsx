import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos'
import { CircularProgress, IconButton, Stack, Tooltip } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { CalendarOddsTable, MobileCalendarOddsTable } from 'components/app/table'
import useIsMobile from 'hooks/useIsMobile'
import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'
import leaguesService from 'services/league-service'
import matchesService from 'services/match-service'

export const CalendarOdds = () => {
	const isMobile = useIsMobile()
	const [matches, setMatches] = useState(null)
	const [leagues, setLeagues] = useState(null)
	const [loadingMatches, setLoadingMatches] = useState(false)
	const [loadingLeagues, setLoadingLeagues] = useState(false)
	const [selectedDate, setSelectedDate] = useState(DateTime.now())

	useEffect(() => {
		const fetchMatches = async (date: string) => {
			setLoadingMatches(true)
			try {
				const data = await matchesService.getMatches(date)
				if (data && data.matches && data.matches.data) {
					setMatches(data.matches.data)
				}
			} catch (error) {
				console.error('Failed to fetch matches:', error)
			}
			setLoadingMatches(false)
		}

		fetchMatches(selectedDate.toFormat('yyyy-LL-dd'))
	}, [selectedDate])

	useEffect(() => {
		const fetchLeagues = async () => {
			setLoadingLeagues(true)
			try {
				const data = await leaguesService.getLeaguesList()
				if (data && data.leagueList && data.leagueList.data) {
					setLeagues(data.leagueList.data)
				}
			} catch (error) {
				console.error('Failed to fetch leagues list:', error)
			}
			setLoadingLeagues(false)
		}

		fetchLeagues()
	}, [])

	return (
		<Stack direction="column" gap={1}>
			{loadingMatches || loadingLeagues ? (
				<Stack sx={{ height: '50vh', justifyContent: 'center', alignItems: 'center' }}>
					<CircularProgress />
				</Stack>
			) : (
				<Stack px={[0, 4]} pt={4} direction="column" gap={[1, 2]}>
					<Stack direction="row" justifyContent="end" alignItems="center" width="100%">
						<Stack mt={[1.5, 0]} direction="row" alignItems="center">
							<Tooltip title="Previous Day">
								<IconButton
									onClick={() => setSelectedDate(prev => prev.minus({ days: 1 }))}
									edge="start">
									<ArrowBackIosNewIcon />
								</IconButton>
							</Tooltip>
							<LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="ro">
								<DatePicker
									label="Selectează Data"
									value={selectedDate}
									onChange={newValue => setSelectedDate(newValue as DateTime)}
								/>
							</LocalizationProvider>

							<Tooltip title="Next Day">
								<IconButton
									onClick={() => setSelectedDate(prev => prev.plus({ days: 1 }))}
									edge="end">
									<ArrowForwardIosNewIcon />
								</IconButton>
							</Tooltip>
						</Stack>
					</Stack>
					{isMobile ? (
						<MobileCalendarOddsTable matches={matches} leagues={leagues} />
					) : (
						<CalendarOddsTable matches={matches} leagues={leagues} />
					)}
				</Stack>
			)}
		</Stack>
	)
}
