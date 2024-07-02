import { useEffect, useState } from 'react'
import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { LeagueStandings } from 'sections/leagueStandings'
import { LeagueFixtures } from 'sections/leagueFixtures'
import Legend from 'components/app/legend'
import { LeagueTopPlayers } from 'sections/leagueTopPlayers'
import { DateTime } from 'luxon'
import leaguesService from 'services/league-service'
import matchesService from 'services/match-service'
import { LeagueTopPlayerStats } from 'sections/leagueTopPlayerStats'
import teamsService from 'services/team-service'

const CustomRectangle = styled('div')(({ theme }) => ({
	width: '50%',
	height: '100px',
	transform: 'skew(-15deg)',
	transformOrigin: 'bottom left',
	background: 'white',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'relative',
	overflow: 'hidden'
}))

const ImageWrapper = styled('div')({
	transform: 'skew(15deg)'
})

export const League = () => {
	const [leagueTable, setLeagueTable] = useState(null)
	const [loadingLeagues, setLoadingLeagues] = useState(false)
	const [loadingMatches, setLoadingMatches] = useState(false)
	const [matches, setMatches] = useState(null)
	const [selectedDate, setSelectedDate] = useState(DateTime.now())
	const [week, setWeek] = useState(15)

	const handleNextStage = () => {
		setWeek(prevStage => prevStage + 1)
	}

	const handlePreviousStage = () => {
		setWeek(prevStage => Math.max(prevStage - 1, 0))
	}

	const legendItemsA = [
		{ name: 'PpM', description: 'Medie Puncte Câștigate per Meci' },
		{ name: 'mG', description: 'Medie Goluri per Meci' },
		{ name: '+ 2.5G', description: 'Procentul Peste 2.5 Goluri per Meci' },
		{ name: 'GG', description: 'Procentul Ambele Marchează' },
		{ name: 'mC', description: 'Medie Cornere per Meci' },
		{ name: '+ 9.5C', description: 'Procentul Peste 9.5 Cornere per Meci' },
		{ name: 'mCart', description: 'Media Cartonașe per Meci' }
	]

	const legendItemsB = [
		{ name: 'MJ', description: 'Meciuri Jucate' },
		{ name: 'V', description: 'Victorii' },
		{ name: 'E', description: 'Egaluri' },
		{ name: 'Î', description: 'Înfrangeri' },
		{ name: 'GM', description: 'Goluri Marcate' },
		{ name: 'GP', description: 'Goluri Primite' },
		{ name: 'PCT', description: 'Puncte' },
		{ name: 'PpM', description: 'Medie Puncte Câștigate per Meci' },
		{ name: 'mG', description: 'Medie Goluri per Meci' },
		{ name: '+ 2.5G', description: 'Procentul Peste 2.5 Goluri per Meci' },
		{ name: 'GG', description: 'Procentul Ambele Marchează' },
		{ name: 'mC', description: 'Medie Cornere per Meci' },
		{ name: '+ 9.5C', description: 'Procentul Peste 9.5 Cornere per Meci' },
		{ name: 'mCart', description: 'Media Cartonașe per Meci' }
	]

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
	}, [])

	useEffect(() => {
		const fetchLeagueTable = async () => {
			setLoadingLeagues(true)
			try {
				const response = await teamsService.getLeagueTeams(9665)
				if (response && response.teams && response.teams.data) setLeagueTable(response.teams.data)
			} catch (error) {
				console.error('Failed to fetch league teams data:', error)
			}
			setLoadingLeagues(false)
		}
		fetchLeagueTable()
	}, [])

	// useEffect(() => {
	// 	console.log('Failed to fetch matches:', matches)
	// }, [matches])

	return (
		<>
			<Box
				component="section"
				sx={{ backgroundColor: '#990000', display: 'flex', flexDirection: 'row', width: '100%' }}>
				<CustomRectangle>
					<ImageWrapper>
						<img
							src="https://cdn.footystats.org/img/competitions/spain-la-liga.png"
							alt="Spain La Liga"
							style={{ width: '110px', height: '110px' }}
						/>
					</ImageWrapper>
				</CustomRectangle>
				<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
					<Typography variant="h4" component="p" color={'white'}>
						LALIGA
					</Typography>
				</Box>
			</Box>
			<AppBar
				position="static"
				sx={{
					backgroundColor: '#990000',
					mt: 5,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<Toolbar>
					<ArrowBackIosIcon onClick={handlePreviousStage} style={{ cursor: 'pointer' }} />
					<Typography
						variant="h5"
						component="div"
						sx={{ flexGrow: 1, textAlign: 'center', ml: 5, mr: 5 }}>
						ETAPA {week}
					</Typography>
					<ArrowForwardIosIcon onClick={handleNextStage} style={{ cursor: 'pointer' }} />
				</Toolbar>
			</AppBar>
			{loadingMatches || !matches ? (
				<Typography variant="h6" component="p" align="center" color="gray">
					Loading...
				</Typography>
			) : (
				<LeagueFixtures matches={matches}></LeagueFixtures>
			)}
			<Legend legendItems={legendItemsA}></Legend>
			<Typography
				variant="h3"
				component="p"
				color={'#990000'}
				align="center"
				fontWeight={'bold'}
				pt={4}>
				CLASAMENT
			</Typography>
			{loadingLeagues || !leagueTable ? (
				<Typography variant="h6" component="p" align="center" color="gray">
					Loading...
				</Typography>
			) : (
				<LeagueStandings leagueTable={leagueTable} />
			)}
			<Legend legendItems={legendItemsB}></Legend>
			<Typography
				variant="h3"
				component="p"
				color={'#990000'}
				align="center"
				fontWeight={'bold'}
				pt={4}>
				TOP 5 JUCĂTORI
			</Typography>
			<LeagueTopPlayers></LeagueTopPlayers>
			<LeagueTopPlayerStats></LeagueTopPlayerStats>
		</>
	)
}
