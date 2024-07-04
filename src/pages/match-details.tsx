import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'
import { Box, CircularProgress, Grid, Stack, Typography, useTheme } from '@mui/material'
import AppLayout from 'components/app/layout'
import TrendsDisplay from 'components/cards/trend-card'
import { WDL_COLOR_SCHEME, getPPGColor } from 'constants/colors'
import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DetailsSection } from 'sections/details'
import { HeadToHead } from 'sections/head-to-head'
import { PredictionsSection } from 'sections/predictions'
import { RankingsSection } from 'sections/rankings'
import { StatsSection } from 'sections/stats'
import leaguesService from 'services/league-service'
import matchesService from 'services/match-service'
import refereesService from 'services/referee-service'
import teamsService from 'services/team-service'
import Skeleton from '@mui/material/Skeleton';

export const MatchDetails = () => {
	const { id } = useParams()
	const theme = useTheme()
	const [matchDetails, setMatchDetails] = useState<MatchDetails | null>(null)
	const [homeTeam, setHomeTeam] = useState<any>(null)
	const [awayTeam, setAwayTeam] = useState<any>(null)
	const [leagueTable, setLeagueTable] = useState<any>(null)
	const [referee, setReferee] = useState<Referee | null>(null)
	const [leagueTeams, setLeagueTeams] = useState<any>(null)
	const [homeTeamRecentMatches, setHomeTeamRecentMatches] = useState<any>(null)
	const [awayTeamRecentMatches, setAwayTeamRecentMatches] = useState<any>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const idAsNumber = Number(id)
				const data = await matchesService.getMatchDetails(idAsNumber)
				if (data && data.match && data.match.data) setMatchDetails(data.match.data)
			} catch (error) {
				console.error('Failed to fetch match details:', error)
			}
		}

		if (id) {
			fetchData()
		}
	}, [id])

	useEffect(() => {
		const fetchLeagueTableData = async () => {
			try {
				const idAsNumber = Number(matchDetails?.competition_id)
				const data = await leaguesService.getLeagueTable(idAsNumber)
				if (data && data.leagueTable && data.leagueTable.data) setLeagueTable(data.leagueTable.data)
			} catch (error) {
				console.error('Failed to fetch league table details:', error)
			}
		}

		if (matchDetails?.competition_id) {
			fetchLeagueTableData()
		}
	}, [matchDetails?.competition_id])

	useEffect(() => {
		const fetchHomeTeamData = async () => {
			try {
				const idAsNumber = Number(matchDetails?.homeID)
				const data = await teamsService.getTeamsByID(idAsNumber)
				if (data && data.team && data.team.data) setHomeTeam(data.team.data)
			} catch (error) {
				console.error('Failed to fetch home team details:', error)
			}
		}

		const fetchAwayTeamData = async () => {
			try {
				const idAsNumber = Number(matchDetails?.awayID)
				const data = await teamsService.getTeamsByID(idAsNumber)
				if (data && data.team && data.team.data) setAwayTeam(data.team.data)
			} catch (error) {
				console.error('Failed to fetch away team details:', error)
			}
		}

		if (matchDetails?.homeID) {
			fetchHomeTeamData()
		}
		if (matchDetails?.awayID) {
			fetchAwayTeamData()
		}
	}, [matchDetails?.awayID, matchDetails?.homeID])

	useEffect(() => {
		const fetchData = async () => {
			if (matchDetails?.refereeID) {
				try {
					const idAsNumber = Number(matchDetails.refereeID)
					const response = await refereesService.getReferee(idAsNumber)
					if (response && response.referee && response.referee.data) {
						const relevantReferee = response.referee.data.find(
							(ref: any) => ref.competition_id === matchDetails?.competition_id
						)
						if (relevantReferee) {
							setReferee(relevantReferee)
						}
					}
				} catch (error) {
					console.error('Failed to fetch referee details:', error)
				}
			}
		}

		fetchData()
	}, [matchDetails])

	useEffect(() => {
		const fetchData = async () => {
			if (matchDetails?.competition_id) {
				try {
					const idAsNumber = Number(matchDetails?.competition_id)
					const response = await teamsService.getLeagueTeams(idAsNumber)
					if (response && response.teams && response.teams.data) setLeagueTeams(response.teams.data)
				} catch (error) {
					console.error('Failed to fetch league teams data:', error)
				}
			}
		}

		fetchData()
	}, [matchDetails])

	useEffect(() => {
		const fetchHomeTeamRecentMatchesData = async () => {
			try {
				const homeTeam = matchDetails?.home_name as string
				const data = await teamsService.getRecentMatches(homeTeam, true)
				if (data) setHomeTeamRecentMatches(data)
			} catch (error) {
				console.error('Failed to fetch home team recent matches details:', error)
			}
		}

		const fetchAwayTeamRecentMatchesData = async () => {
			try {
				const awayTeam = matchDetails?.away_name as string
				const data = await teamsService.getRecentMatches(awayTeam, false)
				if (data) setAwayTeamRecentMatches(data)
			} catch (error) {
				console.error('Failed to fetch away team recent matches details:', error)
			}
		}

		if (matchDetails?.home_name) {
			fetchHomeTeamRecentMatchesData()
		}
		if (matchDetails?.away_name) {
			fetchAwayTeamRecentMatchesData()
		}
	}, [matchDetails?.awayID, matchDetails?.away_name, matchDetails?.homeID, matchDetails?.home_name])

	const getTeamPosition = (teamId: number | undefined) => {
		const teamData = leagueTable?.all_matches_table_overall?.find((team: any) => team.id === teamId)
		return teamData?.position
	}

	const getSeasonPPG = (isHomeTeam: boolean) => {
		if (isHomeTeam) {
			return homeTeam?.find((team: any) => team?.competition_id === matchDetails?.competition_id)
				?.stats?.seasonPPG_home
		} else {
			return awayTeam?.find((team: any) => team?.competition_id === matchDetails?.competition_id)
				?.stats?.seasonPPG_away
		}
	}

	const formatTimeToLocal = (unixTimestamp: any) => {
		const date = new Date(unixTimestamp * 1000)
		return date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		})
	}

	const getLastFiveMatches = (isHomeTeam: boolean) => {
		const resultLength = 5

		const homeMatches = Array.isArray(homeTeamRecentMatches) ? homeTeamRecentMatches : []
		const awayMatches = Array.isArray(awayTeamRecentMatches) ? awayTeamRecentMatches : []

		const matches = isHomeTeam ? homeMatches : awayMatches

		const lastFive =
			matches
				.slice(0, resultLength)
				.reverse()
				.map((match: any) => {
					if (isHomeTeam) {
						if (match.goals.home > match.goals.away) {
							return 'w'
						} else if (match.goals.home < match.goals.away) {
							return 'l'
						} else {
							return 'd'
						}
					} else {
						if (match.goals.away > match.goals.home) {
							return 'w'
						} else if (match.goals.away < match.goals.home) {
							return 'l'
						} else {
							return 'd'
						}
					}
				}) || []

		const paddedResult = lastFive.concat(Array(resultLength - lastFive.length).fill('-'))

		return paddedResult.map((char: any) => {
			switch (char) {
				case 'w':
					return 'V'
				case 'l':
					return 'Î'
				case 'd':
					return 'E'
				case '-':
					return '-'
				default:
					return ''
			}
		})
	}

	const displayFormRun = (isHomeTeam: boolean) => {
		const formResults = getLastFiveMatches(isHomeTeam)
		return formResults?.map((result: any, index: any) => (
			<Typography
				key={index}
				px={0.5}
				width="25px"
				textAlign="center"
				bgcolor={WDL_COLOR_SCHEME[result]}
				color="white"
				fontWeight={800}>
				{result}
			</Typography>
		))
	}

	return (
		<AppLayout>
			<Grid mt={8} justifyContent="center" columnSpacing={15} className='team-grid' container>
				<Grid display={['none', 'flex']} xs="auto" className='team-section' justifyContent="flex-end">
					<Stack direction="column" alignItems="center">
						<Typography fontSize="12px" fontWeight={800} mb={1}>
							Pozitie: {getTeamPosition(matchDetails?.homeID) || 'N/A'}
						</Typography>
						{matchDetails?.home_image ? (
							<Stack
								justifyContent="center"
								alignItems="center"
								borderRadius="8px"
								minHeight={90}
								minWidth={90}
								width="fit-content"
								sx={{
									boxShadow:
										'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
									padding: '12px'
								}}>
								<Box
									component="img"
									src={`https://cdn.footystats.org/img/${matchDetails?.home_image}`}
									height="100px"
									sx={{
										transition: 'transform 0.3s ease-in-out',
										'&:hover': {
											transform: 'scale(1.04) translateY(-3px)'
										}
									}}
								/>

							</Stack>
						) : (
							<Skeleton variant="rectangular" width={100} height={100} />
						)}
						<Stack direction="row" mt={1.5} alignItems="center" mx={2} gap={0.5}>
							<Typography fontSize="12px" fontWeight={600} color={theme.text}>
								Medie Puncte
							</Typography>
							<Typography
								fontSize="13px"
								color="white"
								fontWeight={700}
								sx={{ padding: '1px 5px' }}
								borderRadius={1}
								bgcolor={getPPGColor(getSeasonPPG(true)?.toFixed(2))}>
								{getSeasonPPG(true)?.toFixed(2) || 'N/A'}
							</Typography>
						</Stack>
						<Stack mt={0.5} direction="row">
							{homeTeamRecentMatches && displayFormRun(true)}
						</Stack>

						<TrendingFlatIcon sx={{ transform: 'scale(7, 1.5)', color: theme.text }} />
					</Stack>
				</Grid>
				<Grid xs="auto" className='team-section'>
					{matchDetails ? (
						<Stack direction="column" alignItems="center">
							<Typography fontSize={['18px', '20px']}>
								{matchDetails?.home_name} <span style={{ color: 'red', fontWeight: 700 }}> vs </span>{' '}
								{matchDetails?.away_name}
							</Typography>
							{matchDetails?.date_unix && (
								<Typography fontWeight={700} fontSize={'15px'}>
									{DateTime.fromMillis(matchDetails?.date_unix * 1000)
										.setLocale('ro')
										.toFormat('dd LLL yyyy')}
								</Typography>
							)}
							<Stack direction="row" gap={1}>
								<Typography whiteSpace="nowrap" mt={0.5} fontSize="16px">
									{matchDetails?.stadium_name}
								</Typography>
								<Typography mt={0.5} fontSize="16px" fontWeight={500} color={'#003366'}>
									{matchDetails?.weather
										? `${matchDetails?.weather?.temperature_celcius?.temp}°C`
										: ''}
								</Typography>
							</Stack>
							{matchDetails?.status !== 'complete' ? (
								<Typography color={theme.text} my={0.5} fontWeight={1000} fontSize="42px">
									{formatTimeToLocal(matchDetails?.date_unix)}
								</Typography>
							) : (
								<Stack
									border="0.8px solid #b7b6b6"
									my={'8px'}
									px={2}
									py={'8px'}
									direction="column"
									justifyContent="center"
									gap={0}>
									<Typography fontSize="18px" component="h3">
										REZULTAT FINAL
									</Typography>
									<Stack
										direction="row"
										bgcolor="#990000"
										borderRadius={'5px'}
										justifyContent="center"
										color="white"
										mx="auto"
										alignItems="center"
										width="fit-content"
										fontWeight={700}
										fontSize="20px"
										px={'12px'}>
										<Typography
											lineHeight={1.2}
											fontWeight={700}
											color="white"
											fontSize="24px"
											textAlign="center">
											{matchDetails?.homeGoalCount}-
										</Typography>
										<Typography
											lineHeight={1.2}
											fontWeight={700}
											color="white"
											fontSize="24px"
											textAlign="center">
											{matchDetails?.awayGoalCount}
										</Typography>
									</Stack>
								</Stack>
							)}
							<Typography mt={0.5} fontSize="16px">
								Arbitru
							</Typography>
							<Typography mt={-0.75} fontSize="16px" fontWeight={700}>
								{referee?.full_name}
							</Typography>
							<Stack direction="row" gap={0.5}>
								<Typography>Etapa: </Typography>
								<Typography fontWeight={600} color={'#990000'}>
									{matchDetails?.game_week}
								</Typography>
							</Stack>
						</Stack>
					) : (

						<Stack >
							<Skeleton variant="rectangular" width={200} height={10} />
							<Stack marginTop={1} marginBottom={1} direction='row' justifyContent="space-between">
								<Skeleton variant="rectangular" width={90} height={10} />
								<Skeleton variant="rectangular" width={90} height={10} />
							</Stack>
							<Skeleton variant="rectangular" width={200} height={100} />
							<Stack marginTop={1} marginBottom={1} direction='row' justifyContent="space-between">
								<Skeleton variant="rectangular" width={90} height={10} />
								<Skeleton variant="rectangular" width={90} height={10} />
							</Stack>
							<Skeleton variant="rectangular" width={200} height={10} />

						</Stack>
					)}

				</Grid>
				<Grid display={['none', 'flex']} xs="auto" className='team-section' alignItems="end">
					<Stack direction="column" alignItems="center">
						<Typography fontSize="12px" fontWeight={800} mb={1}>
							Pozitie: {getTeamPosition(matchDetails?.awayID) || 'N/A'}
						</Typography>
						{matchDetails?.away_image ? (
							<Stack
								justifyContent="center"
								alignItems="center"
								borderRadius="8px"
								p={1}
								minHeight={90}
								minWidth={90}
								width="fit-content"
								sx={{
									boxShadow:
										'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
									padding: '12px'
								}}>

								<Box
									component="img"
									src={`https://cdn.footystats.org/img/${matchDetails?.away_image}`}
									height="100px"
									sx={{
										transition: 'transform 0.3s ease-in-out',
										'&:hover': {
											transform: 'scale(1.04) translateY(-3px)'
										}
									}}
								/>

							</Stack>

						) : (
							<Skeleton variant="rectangular" width={100} height={100} />
						)}
						<Stack direction="row" mt={1} alignItems="center" mx={2} gap={0.5}>
							<Typography fontSize="12px" fontWeight={600} color={theme.text}>
								Medie Puncte
							</Typography>
							<Typography
								fontSize="13px"
								color="white"
								fontWeight={700}
								sx={{ padding: '1px 5px' }}
								borderRadius={1}
								bgcolor={getPPGColor(getSeasonPPG(false)?.toFixed(2))}>
								{getSeasonPPG(false)?.toFixed(2)}
							</Typography>
						</Stack>
						<Stack mt={0.5} direction="row">
							{awayTeamRecentMatches && displayFormRun(false)}
						</Stack>

						<TrendingFlatIcon sx={{ transform: 'scale(7, 1.5)', color: theme.text }} />
					</Stack>
				</Grid>
				<Grid mt={1} display={['flex', 'none']} item xs="auto">
					<Stack direction="row" justifyContent="space-between" columnGap={2.5} alignItems="center">
						<Stack direction="column" alignItems="center">
							<Typography fontSize="12px" fontWeight={700}>
								Pozitie: {getTeamPosition(matchDetails?.homeID) || 'N/A'}
							</Typography>
							<Stack
								justifyContent="center"
								alignItems="center"
								borderRadius="12px"
								p={1}
								width="fit-content"
								sx={{
									boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
								}}>
								<Box
									component="img"
									src={`https://cdn.footystats.org/img/${matchDetails?.home_image}`}
									height="100px"
								/>
							</Stack>
							<Stack direction="row" mt={1} alignItems="center" mx={2} gap={0.5}>
								<Typography fontSize="12px" color={theme.text}>
									Medie Puncte
								</Typography>
								<Typography
									fontSize="14px"
									color="white"
									fontWeight={700}
									p={0.25}
									bgcolor={getPPGColor(getSeasonPPG(true)?.toFixed(2))}>
									{getSeasonPPG(true)?.toFixed(2) || 'N/A'}
								</Typography>
							</Stack>
							<Stack mt={0.5} direction="row">
								{homeTeamRecentMatches && displayFormRun(true)}
							</Stack>

							<TrendingFlatIcon sx={{ transform: 'scale(7, 1.5)', color: theme.text }} />
						</Stack>
						<Typography color={theme.text} fontSize="18px">
							vs
						</Typography>
						<Stack direction="column" alignItems="center">
							<Typography fontSize="12px" fontWeight={700}>
								Pozitie: {getTeamPosition(matchDetails?.awayID) || 'N/A'}
							</Typography>
							<Stack
								justifyContent="center"
								alignItems="center"
								borderRadius="12px"
								p={1}
								width="fit-content"
								sx={{
									boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
								}}>
								<Box
									component="img"
									src={`https://cdn.footystats.org/img/${matchDetails?.away_image}`}
									height="100px"
								/>
							</Stack>
							<Stack direction="row" mt={1} alignItems="center" mx={2} gap={0.5}>
								<Typography fontSize="12px" color={theme.text}>
									Medie Puncte
								</Typography>
								<Typography
									fontSize="14px"
									color="white"
									fontWeight={700}
									p={0.25}
									bgcolor={getPPGColor(getSeasonPPG(false)?.toFixed(2))}>
									{getSeasonPPG(false)?.toFixed(2)}
								</Typography>
							</Stack>
							<Stack mt={0.5} direction="row">
								{awayTeamRecentMatches && displayFormRun(false)}
							</Stack>

							<TrendingFlatIcon sx={{ transform: 'scale(7, 1.5)', color: theme.text }} />
						</Stack>
					</Stack>
				</Grid>
			</Grid>

			<Stack p={[2, 4]} direction="column" gap={5}>
				{matchDetails ? (
					<>
						<PredictionsSection data={matchDetails} referee={referee} />
						<TrendsDisplay data={matchDetails} />
						<HeadToHead data={matchDetails} />
						<DetailsSection
							data={matchDetails}
							homeTeamMatches={homeTeamRecentMatches}
							awayTeamMatches={awayTeamRecentMatches}
						/>
						<StatsSection
							data={matchDetails}
							homeTeam={homeTeam}
							awayTeam={awayTeam}
							leagueTeams={leagueTeams}
							referee={referee}
							homeTeamMatches={homeTeamRecentMatches}
							awayTeamMatches={awayTeamRecentMatches}
						/>
						<RankingsSection data={matchDetails} leagueTeams={leagueTeams} />
					</>
				) : (
					<div className="loading">
						<div className="obj"></div>
						<div className="obj"></div>
						<div className="obj"></div>
						<div className="obj"></div>
						<div className="obj"></div>
						<div className="obj"></div>
						<div className="obj"></div>
						<div className="obj"></div>
					</div>
				)}
			</Stack>
		</AppLayout>
	)
}
