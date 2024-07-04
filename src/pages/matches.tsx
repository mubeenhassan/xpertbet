import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos'
import { CircularProgress, IconButton, Stack, Tooltip } from '@mui/material'
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { SectionHeading } from 'components/section-heading'
import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'
import { Fixtures } from 'sections/fixtures'
import leaguesService from 'services/league-service'
import matchesService from 'services/match-service'
import Skeleton from '@mui/material/Skeleton';
import Hero from 'sections/hero'


export const Match = () => {
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

	// const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setSelectedDate(event.target.value)
	// }

	// const changeDay = (offset: any) => {
	// 	const currentDate = new Date(selectedDate.toISO())
	// 	currentDate.setDate(currentDate.getDate() + offset)
	// 	setSelectedDate(DateTime.fromJSDate(currentDate))
	// }

	return (
		<Stack direction="column">
			{/* <SectionHeading title="STATISTICI" size={20} /> */}
			<Hero />
			<Stack direction="row" justifyContent="center" marginTop={2} alignItems="center" width="100%">
				<Stack mt={[1.5, 0]} direction="row" alignItems="center">
					<Tooltip title="Previous Day">
						<IconButton
							onClick={() => setSelectedDate(prev => prev.minus({ days: 1 }))}
							edge="start"
							className={"MyCustomButton"}>
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
						<IconButton onClick={() => setSelectedDate(prev => prev.plus({ days: 1 }))} edge="end">
							<ArrowForwardIosNewIcon />
						</IconButton>
					</Tooltip>
				</Stack>
				{/* <TextField
					label="Select Date"
					type="date"
					value={selectedDate}
					onChange={handleDateChange}
					InputLabelProps={{
						shrink: true
					}}
					sx={{
						width: 250,
						backgroundColor: 'white',
						borderRadius: '4px'
					}}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Tooltip title="Previous Day">
									<IconButton onClick={() => changeDay(-1)} edge="start">
										<ArrowBackIosNewIcon />
									</IconButton>
								</Tooltip>
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end">
								<Tooltip title="Next Day">
									<IconButton onClick={() => changeDay(1)} edge="end">
										<ArrowForwardIosNewIcon />
									</IconButton>
								</Tooltip>
							</InputAdornment>
						)
					}}
				/> */}
			</Stack>
			{loadingMatches || loadingLeagues ? (
				<Stack padding={3} sx={{ height: '50vh', justifyContent: 'centet', marginTop: '90px', alignItems: 'left' }}>
					<Skeleton variant="rectangular" width="50%" height={20} />
					<br />
					<Skeleton variant="rectangular" width="100%" height={70} />
					<br />
					<br />
					<Skeleton variant="rectangular" width="50%" height={20} />
					<br />
					<Skeleton variant="rectangular" width="100%" height={70} />
				</Stack>
			) : (
				<Fixtures matches={matches} leagues={leagues} />
			)}
		</Stack>
	)
}
