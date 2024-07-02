import { ShowChart } from '@mui/icons-material'
import DateRangeIcon from '@mui/icons-material/DateRange'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SportsIcon from '@mui/icons-material/Sports'
import SportsScoreIcon from '@mui/icons-material/SportsScore'
import StyleIcon from '@mui/icons-material/Style'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Stack,
	TableBody,
	TableCell,
	Typography,
	useTheme
} from '@mui/material'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { FormCard } from 'components/cards/form-card'
import {
	PERCENTAGE_COLOR,
	cartonasePlusValueToColor,
	getCornereColorForValue,
	getCornersAverageColor,
	getGoalColor,
	getMedPctColorForValue,
	getMedieColorForValue,
	getPpMColorForValue,
	getYellowCardsAverageColor,
	medieTotalCartonaseValueToColor
} from 'constants/colors'
import { useState } from 'react'
import { StyledTableCell, StyledTableHead, StyledTableRow } from 'themes/styled-components'
import { GoalContributionBar } from './progress-bar'

interface StatsTableProps {
	headings: HeadItem[]
	items: StatItem[]
}

type StatItem = {
	name: string
	stat: number
}

type HeadItem = {
	name: string
	icon?: string
	bgColor: string
}

export const StatsTable = ({ headings, items }: StatsTableProps) => {
	return (
		<TableContainer>
			<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'auto' }}>
				<TableHead>
					<TableRow>
						{headings.map((heading, index) => (
							<StyledTableHead colSpan={2} key={index} sx={{ backgroundColor: heading.bgColor }}>
								<Stack alignItems="center" direction="row" justifyContent="space-between">
									<Typography
										fontWeight={700}
										pl={2}
										textTransform={'uppercase'}
										fontSize="10px"
										color="white">
										{heading.name}
									</Typography>
									{heading.icon ? (
										<Box
											bgcolor="white"
											p={0.5}
											mr={1}
											sx={{ transform: 'skew(-12deg)', minHeight: '32px' }}
											alignItems="center">
											<Box
												component={'img'}
												mr={0.5}
												src={heading.icon}
												alt={heading.name}
												style={{ height: '20px', width: '20px' }}
											/>
										</Box>
									) : (
										<Box
											bgcolor="white"
											p={0.5}
											mr={1}
											sx={{
												transform: 'skew(-12deg)',
												minHeight: '32px',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center'
											}}>
											<SportsIcon style={{ color: 'black', height: '20px', width: '20px' }} />
										</Box>
									)}
								</Stack>
							</StyledTableHead>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((item, index) => {
						// const rgbAlphaValue = (items.length - (index + 2)) * 0.1
						// let backgroundColor
						// if (rgbAlphaValue === 0) {
						// 	backgroundColor = 'white'
						// } else {
						// 	backgroundColor = `rgba(153, 153, 153, ${rgbAlphaValue})`
						// }

						const backgroundColor = `rgba(200, 200, 200, 1)`

						return (
							<TableRow key={index}>
								<StyledTableCell
									align="center"
									sx={{
										fontSize: '10px',
										backgroundColor: backgroundColor
									}}>
									{item.name}
								</StyledTableCell>
								<StyledTableCell
									align="center"
									sx={{
										fontSize: '10px',
										backgroundColor: backgroundColor
									}}>
									{item.stat || item.stat === 0 ? item.stat : 'N/A'}
								</StyledTableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

interface CupSituationTableProps {
	heading: string
	items: CupSituationItem[]
}

type CupSituationItem = {
	icon: string
	name: string
	label: string
	borderColor?: string
}

export const CupSituationTable = ({ heading, items }: CupSituationTableProps) => {
	const theme = useTheme()
	return (
		<TableContainer>
			<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'fixed' }}>
				<TableHead>
					<TableRow>
						<StyledTableHead>
							<Typography p={0.5} bgcolor="#E8E8E8" fontSize="10px" color={theme.text}>
								{heading}
							</Typography>
						</StyledTableHead>
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((item, index) => (
						<TableRow key={index}>
							<StyledTableCell
								sx={[
									{
										padding: '2px 4px',
										color: theme.text,
										'&:hover': { backgroundColor: '#E2E1E1' }
									}
								]}>
								<Stack alignItems="center" direction="row" justifyContent="space-between">
									<Stack alignItems="center" direction="row" gap={1} padding="2px 4px">
										<Box
											component={'img'}
											src={item.icon}
											alt={item.name}
											style={{ height: '20px', width: '20px' }}
										/>
										<Typography fontSize="12px" color={theme.text}>
											{item.name}
										</Typography>
									</Stack>
									<Box
										border={item.borderColor}
										fontSize="12px"
										width="40%"
										color={theme.text}
										textAlign="center">
										{item.label}
									</Box>
								</Stack>
							</StyledTableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export const HeadToHeadTable = ({ data }: any) => {
	const theme = useTheme()

	const formatDate = (unixTimestamp: number) => {
		const date = new Date(unixTimestamp * 1000)
		const options: any = { month: 'short', day: 'numeric', year: 'numeric' }
		return date.toLocaleDateString('en-US', options)
	}

	return (
		<TableContainer>
			<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'auto' }}>
				<TableHead>
					<TableRow>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<DateRangeIcon sx={{ color: theme.text }} />
								<Typography fontSize="11px" fontWeight="bold" color={theme.text}>
									Date
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<SportsScoreIcon sx={{ color: theme.text }} />
								<Typography fontSize="11px" fontWeight="bold" color={theme.text}>
									Fixtures
								</Typography>
							</Stack>
						</StyledTableHead>
					</TableRow>
				</TableHead>
				<TableBody>
					{data?.h2h?.previous_matches_ids?.map((match: any, index: any) => (
						<TableRow key={index}>
							<StyledTableCell align="center">
								<Stack gap={1} direction="column" alignItems="center">
									<Typography color={theme.gray} fontSize="12px">
										{formatDate(match?.date_unix)}
									</Typography>
								</Stack>
							</StyledTableCell>
							<StyledTableCell align="center">
								<Stack gap={1} direction="column" alignItems="center">
									<Stack gap={3} alignItems="center" direction="row">
										{data?.home_name}
										<Box
											sx={{ width: '18px', height: '18px' }}
											component="img"
											src={`https://cdn.footystats.org/img/${data?.home_image}`}
											alt={`${data?.home_name} icon`}
										/>
										<Typography
											fontSize="12px"
											px={1}
											py={0.25}
											bgcolor={theme.gray}
											whiteSpace="nowrap"
											color="black"
											fontWeight="bold">
											{`${match?.team_a_id === data?.homeID ? match?.team_a_goals : match?.team_b_goals} - ${match?.team_a_id === data?.awayID ? match?.team_a_goals : match?.team_b_goals}`}
										</Typography>
										<Box
											sx={{ width: '18px', height: '18px' }}
											component="img"
											src={`https://cdn.footystats.org/img/${data?.away_image}`}
											alt={`${data?.away_name} icon`}
										/>
										{data?.away_name}
									</Stack>
								</Stack>
							</StyledTableCell>
							<StyledTableCell align="center">{}</StyledTableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

interface StandingsTableProps {
	items: StandingsItem[]
}

interface LeagueStandingsTableProps {
	data: {
		table_position: number
		image: string
		cleanName: string
		alt_names: string[]
		stats: any
		forms: string[]
	}[]
}

interface LeagueStandingsTablePropss {
	items: LeagueStandingsItem[]
}

export type StandingsItem = {
	id: number
	team: string
	teamLogo: string
	mp: number
	w: number
	d: number
	l: number
	g: string
	pts: number
	form: Array<'#B9D36B' | '#C9C7C6' | '#FAB108' | '#DE655A'>
	ppg: number
	btts: string
	cardStat: number
	lineStat: number
	1.5: string
	2.5: string
	avgg: number
}

export type LeagueStandingsItem = {
	id: number
	team: string
	teamLogo: string
	mj: number
	v: number
	e: number
	t: number
	gm: string
	gp: number
	pct: number
	mg: number
	g: string
	gg: string
	mc: number
	c: string
	mcart: number
	form: Array<'#B9D36B' | '#C9C7C6' | '#FAB108' | '#DE655A'>
}

export const StandingsTable = ({ items }: StandingsTableProps) => {
	const theme = useTheme()
	return (
		<TableContainer>
			<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'auto' }}>
				<TableHead>
					<TableRow>
						<StyledTableHead
							colSpan={16}
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text} fontWeight="bold">
									Regular Season
								</Typography>
							</Stack>
						</StyledTableHead>
					</TableRow>
					<TableRow>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									#
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									Team
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									MP
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									W
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									D
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								L
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								G
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								Pts
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								Form
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								PPG
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								BTTS
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<StyleIcon
								sx={{ color: theme.text, fill: 'yellow', height: '18px', width: '18px' }}
							/>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<ShowChart sx={{ color: theme.text, height: '18px', width: '18px' }} />
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								1.5+
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								2.5+
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								AVG G
							</Typography>
						</StyledTableHead>
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((item, index) => {
						const ppgColor =
							item.ppg >= 2
								? '#51C5C6'
								: item.ppg >= 1.75
									? '#B9D36B'
									: item.ppg >= 1.0
										? '#FAB108'
										: item.ppg >= 0.5
											? '#DE655A'
											: '#E2101A'
						return (
							<TableRow key={index}>
								<StyledTableCell align="center">{item.id}</StyledTableCell>
								<StyledTableCell align="center">
									<Stack direction="row" gap={1} justifyContent="center">
										<Box component="img" src={item.teamLogo} height="15px" width="15px" />
										{item.team}
									</Stack>
								</StyledTableCell>
								<StyledTableCell align="center">{item.mp}</StyledTableCell>
								<StyledTableCell align="center">{item.w}</StyledTableCell>
								<StyledTableCell align="center">{item.d}</StyledTableCell>
								<StyledTableCell align="center">{item.l}</StyledTableCell>
								<StyledTableCell align="center">{item.g}</StyledTableCell>
								<StyledTableCell align="center" sx={{ fontWeight: 'bold' }}>
									{item.pts}
								</StyledTableCell>
								<StyledTableCell align="center">
									<Stack direction="row" gap="1px" justifyContent="center">
										{item.form.map((formColor, index) => (
											<FormCard key={index} color={formColor} />
										))}
									</Stack>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 0 }}>
									<Typography
										bgcolor={ppgColor}
										fontSize="12px"
										color="white"
										fontWeight="bold"
										padding={0}>
										{item.ppg}
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center">{item.btts}</StyledTableCell>
								<StyledTableCell align="center">{item.cardStat}</StyledTableCell>
								<StyledTableCell align="center">{item.lineStat}</StyledTableCell>
								<StyledTableCell align="center">{item[1.5]}</StyledTableCell>
								<StyledTableCell align="center">{item[2.5]}</StyledTableCell>
								<StyledTableCell align="center">{item.avgg}</StyledTableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export const MatchesTable = ({ matches, leagues }: any) => {
	const theme = useTheme()

	const leaguePriority = [
		'International UEFA Euro Championship',
		'World Cup',
		'Euro 2024',
		'International Copa America',
		'Champions League',
		'Europa League',
		'Conference League',
		'Romania Liga I',
		'England Premier League',
		'Spain La Liga',
		'Germany Bundesliga',
		'Italy Serie A',
		'France Ligue 1'
	]

	const getLeagueByCompetitionId = (competitionId: any) => {
		return leagues.find((league: any) =>
			league.season.some((season: any) => season.id === competitionId)
		)
	}

	const matchesByLeague: any = {}
	matches?.forEach((match: any) => {
		const league = getLeagueByCompetitionId(match.competition_id)
		if (league) {
			const leagueName = league.name
			if (!matchesByLeague[leagueName]) {
				matchesByLeague[leagueName] = { matches: [], icon: league.image }
			}
			matchesByLeague[leagueName].matches.push(match)
		} else {
			const unknownLeagueName = 'Unknown League'
			if (!matchesByLeague[unknownLeagueName]) {
				matchesByLeague[unknownLeagueName] = { matches: [], icon: '' }
			}
			matchesByLeague[unknownLeagueName].matches.push(match)
		}
	})

	const sortedLeagueNames = Object.keys(matchesByLeague).sort((a, b) => {
		const indexA = leaguePriority.findIndex(name => a.includes(name))
		const indexB = leaguePriority.findIndex(name => b.includes(name))

		if (indexA === indexB) {
			return a.localeCompare(b)
		}
		if (indexA === -1) {
			return 1
		}
		if (indexB === -1) {
			return -1
		}
		return indexA - indexB
	})

	const [expanded, setExpanded] = useState(new Array(sortedLeagueNames.length).fill(true))

	const handleAccordionChange = (panelIndex: any) => (event: any, isExpanded: any) => {
		setExpanded(expanded.map((exp, index) => (index === panelIndex ? isExpanded : exp)))
	}
	const handleRowClick = (matchId: number) => {
		window.open(`/${matchId}`, '_blank', 'noopener,noreferrer')
	}

	const formatTimeToLocal = (unixTimestamp: any) => {
		const date = new Date(unixTimestamp * 1000)
		return date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		})
	}

	return sortedLeagueNames.map((leagueName, index) => (
		<Accordion
			key={leagueName}
			expanded={expanded[index]}
			onChange={handleAccordionChange(index)}
			sx={{
				'&:not(:last-child)': {
					marginBottom: 0
				},
				'&:before': {
					display: 'none'
				},
				'&.Mui-expanded': {
					margin: '0 !important'
				}
			}}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				sx={{
					'&.Mui-expanded': {
						minHeight: ['27px', '64px'],
						'&>div': {
							my: ['0 !important', '20px !important'],
							mt: ['10px']
						}
					}
				}}
				id="panel1a-header">
				<Stack direction="row" alignItems="center" spacing={2}>
					{matchesByLeague[leagueName].icon && (
						<img
							src={matchesByLeague[leagueName].icon}
							alt={`${leagueName} icon`}
							style={{ width: '45px', height: '45px' }}
						/>
					)}
					<Typography fontSize="28px" color={theme.text} variant="body2">
						{leagueName}
					</Typography>
				</Stack>
			</AccordionSummary>
			<AccordionDetails>
				<TableContainer>
					<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'auto' }}>
						<TableHead>
							<TableRow>
								<StyledTableHead
									align="center"
									sx={{
										padding: '20px 2px',
										backgroundColor: '#cee2ff',
										border: '0'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											Ora
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#cee2ff',
										border: '0'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											Meci
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#cee2ff',
										border: '0'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											Medie Goluri
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#cee2ff',
										border: '0'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											+1.5 Goluri
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#cee2ff',
										border: '0'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											+2.5 Goluri
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#cee2ff',
										border: '0'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										GG
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#cee2ff',
										border: '0'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										Medie Cornere
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#cee2ff',
										border: '0'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										+8.5 Cornere
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#cee2ff',
										border: '0'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										+9.5 Cornere
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#cee2ff',
										border: '0'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										Medie Cartonașe
									</Typography>
								</StyledTableHead>
							</TableRow>
						</TableHead>
						<TableBody>
							{matchesByLeague[leagueName]?.matches?.map((match: any, index: any) => {
								return (
									<TableRow
										key={index}
										onClick={() => handleRowClick(match.id)}
										className='tableRow'
										sx={{

											cursor: 'pointer',
											'&:hover': {
												background: 'linear-gradient(98.5deg, #05f0ff -46.16%, #7367ff 42.64%, #963cff 70.3%)',
											}
										}}>
										<StyledTableCell className={'tableCel'} align="center">
											{formatTimeToLocal(match.date_unix)}
										</StyledTableCell>
										<StyledTableCell align="left">
											<Stack
												gap={[0.5, 2]}
												alignItems={['center ', 'start']}
												direction="row"
												justifyContent="center">
												<Stack display={['flex', 'none']} direction="column" gap={0.5}>
													<Box
														component="img"
														sx={{ width: '18px', height: '18px' }}
														src={`https://cdn.footystats.org/img/${match.home_image}`}
														alt={match.home_name}
													/>
													<Box
														sx={{ width: '18px', height: '18px' }}
														component="img"
														src={`https://cdn.footystats.org/img/${match.away_image}`}
														alt={match.away_name}
													/>
												</Stack>
												<Stack display={['flex', 'none']} direction="column" gap={0.5}>
													<Typography
														textAlign="left"
														whiteSpace="nowrap"
														width="140px"
														fontSize="12px"
														flex={1}>
														{match.home_name}
													</Typography>
													<Typography
														textAlign="left"
														whiteSpace="nowrap"
														width="140px"
														fontSize="12px"
														flex={1}>
														{match.away_name}
													</Typography>
												</Stack>
												{new Date().getTime() > match.date_unix * 1000 &&
													match.status !== 'complete' && (
														<Stack
															bgcolor={theme.gray}
															display={['flex', 'none']}
															px={1}
															py={0.25}
															direction="column"
															justifyContent="center"
															gap={0}>
															<Typography color="black" fontSize="12px" textAlign="center">
																{match.homeGoalCount}
															</Typography>
															<Typography
																color="black"
																bgcolor={theme.gray}
																fontSize="12px"
																textAlign="center">
																{match.awayGoalCount}
															</Typography>
														</Stack>
													)}
												<Typography
													display={['none', 'block']}
													textAlign="right"
													width="120px"
													fontSize="12px"
													flex={1}>
													{match.home_name}
												</Typography>
												<Box
													component="img"
													display={['none', 'block']}
													sx={{ width: '18px', height: '18px' }}
													src={`https://cdn.footystats.org/img/${match.home_image}`}
													alt={match.home_name}
												/>
												<Typography
													fontSize="12px"
													px={1}
													width="42px"
													textAlign="center"
													display={['none', 'block']}
													py={0.25}
													borderRadius='4px'
													bgcolor={theme.gray}
													whiteSpace="nowrap"
													color="black"
													fontWeight="bold">
													{new Date().getTime() > match.date_unix * 1000
														? `${match.homeGoalCount} - ${match.awayGoalCount}`
														: '-'}
												</Typography>
												<Box
													display={['none', 'block']}
													sx={{ width: '18px', height: '18px' }}
													component="img"
													src={`https://cdn.footystats.org/img/${match.away_image}`}
													alt={match.away_name}
												/>
												<Typography
													display={['none', 'block']}
													textAlign="left"
													width="120px"
													fontSize="12px"
													flex={1}>
													{match.away_name}
												</Typography>
											</Stack>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												fontSize="12px"
												width={['50px', 'auto']}
												bgcolor={getGoalColor(match.avg_potential)}>
												{match.avg_potential}
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width={['50px', 'auto']}
												fontSize="12px"
												bgcolor={PERCENTAGE_COLOR[match.o15_potential]}>
												{match.o15_potential}%
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width={['50px', 'auto']}
												fontSize="12px"
												bgcolor={PERCENTAGE_COLOR[match.o25_potential]}>
												{match.o25_potential}%
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width={['50px', 'auto']}
												fontSize="12px"
												bgcolor={PERCENTAGE_COLOR[match.btts_potential]}>
												{match.btts_potential}%
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width={['50px', 'auto']}
												fontSize="12px"
												bgcolor={getCornersAverageColor(match.corners_potential)}>
												{match.corners_potential}
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width={['50px', 'auto']}
												fontSize="12px"
												bgcolor={PERCENTAGE_COLOR[match.corners_o85_potential]}>
												{match.corners_o85_potential}%
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width={['50px', 'auto']}
												fontSize="12px"
												bgcolor={PERCENTAGE_COLOR[match.corners_o95_potential]}>
												{match.corners_o95_potential}%
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width={['50px', 'auto']}
												fontSize="12px"
												bgcolor={getYellowCardsAverageColor(match.cards_potential)}>
												{match.cards_potential}
											</Typography>
										</StyledTableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</AccordionDetails>
		</Accordion>
	))
}

export const MobileMatchesTable = ({ matches, leagues }: any) => {
	const theme = useTheme()

	const leaguePriority = [
		'International UEFA Euro Championship',
		'World Cup',
		'Euro 2024',
		'International Copa America',
		'Champions League',
		'Europa League',
		'Conference League',
		'Romania Liga I',
		'England Premier League',
		'Spain La Liga',
		'Germany Bundesliga',
		'Italy Serie A',
		'France Ligue 1'
	]

	const getLeagueByCompetitionId = (competitionId: any) => {
		return leagues.find((league: any) =>
			league.season.some((season: any) => season.id === competitionId)
		)
	}

	const matchesByLeague: any = {}
	matches?.forEach((match: any) => {
		const league = getLeagueByCompetitionId(match.competition_id)
		if (league) {
			const leagueName = league.name
			if (!matchesByLeague[leagueName]) {
				matchesByLeague[leagueName] = { matches: [], icon: league.image }
			}
			matchesByLeague[leagueName].matches.push(match)
		} else {
			const unknownLeagueName = 'Unknown League'
			if (!matchesByLeague[unknownLeagueName]) {
				matchesByLeague[unknownLeagueName] = { matches: [], icon: '' }
			}
			matchesByLeague[unknownLeagueName].matches.push(match)
		}
	})

	const sortedLeagueNames = Object.keys(matchesByLeague).sort((a, b) => {
		const indexA = leaguePriority.findIndex(name => a.includes(name))
		const indexB = leaguePriority.findIndex(name => b.includes(name))

		if (indexA === indexB) {
			return a.localeCompare(b)
		}
		if (indexA === -1) {
			return 1
		}
		if (indexB === -1) {
			return -1
		}
		return indexA - indexB
	})

	const [expanded, setExpanded] = useState(new Array(sortedLeagueNames.length).fill(true))

	const handleAccordionChange = (panelIndex: any) => (event: any, isExpanded: any) => {
		setExpanded(expanded.map((exp, index) => (index === panelIndex ? isExpanded : exp)))
	}
	const handleRowClick = (matchId: number) => {
		window.open(`/${matchId}`, '_blank', 'noopener,noreferrer')
	}

	const formatTimeToLocal = (unixTimestamp: any) => {
		const date = new Date(unixTimestamp * 1000)
		return date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		})
	}

	return sortedLeagueNames.map((leagueName, index) => (
		<Accordion
			key={leagueName}
			expanded={expanded[index]}
			onChange={handleAccordionChange(index)}
			sx={{
				'&:not(:last-child)': {
					marginBottom: 0
				},
				'&:before': {
					display: 'none'
				},
				'&.Mui-expanded': {
					margin: '0 !important'
				}
			}}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				sx={{
					'&.Mui-expanded': {
						minHeight: ['27px', '64px'],
						'&>div': {
							my: ['0 !important', '20px !important'],
							mt: ['10px']
						}
					}
				}}
				id="panel1a-header">
				<Stack direction="row" alignItems="center" spacing={2}>
					{matchesByLeague[leagueName].icon && (
						<img
							src={matchesByLeague[leagueName].icon}
							alt={`${leagueName} icon`}
							style={{ width: '45px', height: '45px' }}
						/>
					)}
					<Typography fontSize="14px" color={theme.text} variant="body2">
						{leagueName}
					</Typography>
				</Stack>
			</AccordionSummary>
			<AccordionDetails sx={{ px: 0.25 }}>
				<TableContainer>
					<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'auto' }}>
						<TableHead>
							<TableRow>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8',
										borderRight: '1px solid white'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											Ora
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8',
										borderRight: '1px solid white'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											Meci
										</Typography>
									</Stack>
								</StyledTableHead>

								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8',
										borderRight: '1px solid white'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											+1.5 Goluri
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8',
										borderRight: '1px solid white'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											+2.5 Goluri
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8',
										borderRight: '1px solid white'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										GG
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8',
										borderRight: '1px solid white'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										+9.5 Cornere
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8',
										borderRight: '1px solid white'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										Medie Cartonașe
									</Typography>
								</StyledTableHead>
							</TableRow>
						</TableHead>
						<TableBody>
							{matchesByLeague[leagueName]?.matches?.map((match: any, index: any) => {
								return (
									<TableRow
										key={index}
										onClick={() => handleRowClick(match.id)}
										sx={{
											cursor: 'pointer',
											'&:hover': {
												backgroundColor: theme.palette.action.hover
											}
										}}>
										<StyledTableCell align="center">
											{formatTimeToLocal(match.date_unix)}
										</StyledTableCell>
										<StyledTableCell align="left">
											<Stack
												gap={[0.5, 2]}
												alignItems={['center ', 'start']}
												direction="row"
												justifyContent="center">
												<Stack display={['flex', 'none']} direction="column" gap={0.5}>
													<Box
														component="img"
														sx={{ width: '18px', height: '18px' }}
														src={`https://cdn.footystats.org/img/${match.home_image}`}
														alt={match.home_name}
													/>
													<Box
														sx={{ width: '18px', height: '18px' }}
														component="img"
														src={`https://cdn.footystats.org/img/${match.away_image}`}
														alt={match.away_name}
													/>
												</Stack>
												<Stack display={['flex', 'none']} direction="column" gap={0.5}>
													<Typography
														textAlign="left"
														whiteSpace="nowrap"
														width="70px"
														textOverflow="ellipsis"
														overflow="hidden"
														fontSize="12px"
														flex={1}>
														{match.home_name}
													</Typography>
													<Typography
														textAlign="left"
														whiteSpace="nowrap"
														width="70px"
														textOverflow="ellipsis"
														overflow="hidden"
														fontSize="12px"
														flex={1}>
														{match.away_name}
													</Typography>
												</Stack>
												{new Date().getTime() > match.date_unix * 1000 &&
													match.status !== 'complete' && (
														<Stack
															bgcolor={theme.gray}
															display={['flex', 'none']}
															px={1}
															py={0.25}
															direction="column"
															justifyContent="center"
															gap={0}>
															<Typography color="black" fontSize="12px" textAlign="center">
																{match.homeGoalCount}
															</Typography>
															<Typography
																color="black"
																bgcolor={theme.gray}
																fontSize="12px"
																textAlign="center">
																{match.awayGoalCount}
															</Typography>
														</Stack>
													)}
												<Typography
													display={['none', 'block']}
													textAlign="right"
													width="120px"
													fontSize="12px"
													flex={1}>
													{match.home_name}
												</Typography>
												<Box
													component="img"
													display={['none', 'block']}
													sx={{ width: '18px', height: '18px' }}
													src={`https://cdn.footystats.org/img/${match.home_image}`}
													alt={match.home_name}
												/>
												<Typography
													fontSize="12px"
													px={1}
													width="42px"
													textAlign="center"
													display={['none', 'block']}
													py={0.25}
													bgcolor={theme.gray}
													whiteSpace="nowrap"
													color="black"
													fontWeight="bold">
													{new Date().getTime() > match.date_unix * 1000
														? `${match.homeGoalCount} - ${match.awayGoalCount}`
														: '-'}
												</Typography>
												<Box
													display={['none', 'block']}
													sx={{ width: '18px', height: '18px' }}
													component="img"
													src={`https://cdn.footystats.org/img/${match.away_image}`}
													alt={match.away_name}
												/>
												<Typography
													display={['none', 'block']}
													textAlign="left"
													width="120px"
													fontSize="12px"
													flex={1}>
													{match.away_name}
												</Typography>
											</Stack>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width="auto"
												fontSize="12px"
												bgcolor={PERCENTAGE_COLOR[match.o15_potential]}>
												{match.o15_potential}%
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width="auto"
												fontSize="12px"
												bgcolor={PERCENTAGE_COLOR[match.o25_potential]}>
												{match.o25_potential}%
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width="auto"
												fontSize="12px"
												bgcolor={PERCENTAGE_COLOR[match.btts_potential]}>
												{match.btts_potential}%
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width="auto"
												fontSize="12px"
												bgcolor={PERCENTAGE_COLOR[match.corners_o95_potential]}>
												{match.corners_o95_potential}%
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												width="auto"
												fontSize="12px"
												bgcolor={getYellowCardsAverageColor(match.cards_potential)}>
												{match.cards_potential}
											</Typography>
										</StyledTableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</AccordionDetails>
		</Accordion>
	))
}

interface PositionsTableProps {
	title: string
	color: string
	homeTeam: string
	awayTeam: string
	showHomeTeamColor?: boolean
	showAwayTeamColor?: boolean
	showMedie?: boolean
	isCorner?: boolean
	data: { image: string; cleanName: string; stats: any }[]
	property: string
	sort: string
}
export const PositionsTable = ({
	homeTeam,
	awayTeam,
	showHomeTeamColor,
	showAwayTeamColor,
	showMedie,
	title,
	color,
	isCorner,
	data,
	property,
	sort
}: PositionsTableProps) => {
	let sortedData: any[] = []

	if (data) sortedData = [...data]

	if (sort) {
		sortedData.sort((a, b) => {
			const valueA = a.stats[property]
			const valueB = b.stats[property]

			if (sort === 'asc') {
				return valueA - valueB
			} else if (sort === 'desc') {
				return valueB - valueA
			} else {
				console.warn('Invalid sort value. Sorting not applied.')
				return 0
			}
		})
	}

	return (
		<TableContainer>
			<Typography
				lineHeight={1.2}
				textAlign="center"
				fontSize={['12px', '16px']}
				whiteSpace="nowrap"
				textOverflow="ellipsis"
				overflow="hidden"
				color={color}
				fontWeight={700}>
				{title}
			</Typography>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								fontWeight: 500,
								lineHeight: 1.2,
								fontSize: { xs: '0.75rem', md: '12px' },
								bgcolor: '#e0e0e0',
								p: 0.5,
								pl: 2
							}}>
							#
						</TableCell>
						<TableCell
							sx={{
								borderBottom: '0px',
								fontWeight: 500,
								lineHeight: 1.2,
								fontSize: { xs: '0.75rem', md: '12px' },
								borderRight: '1px solid white',
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							ECHIPE
						</TableCell>
						{showMedie && (
							<TableCell
								align="center"
								sx={{
									fontWeight: 500,
									lineHeight: 1.2,
									fontSize: { xs: '0.75rem', md: '12px' },
									borderBottom: '0px',
									bgcolor: '#e0e0e0',
									p: 0.5,
									pl: 1
								}}>
								MEDIE
							</TableCell>
						)}
					</TableRow>
				</TableHead>
				<TableBody>
					{sortedData?.map((d, index) => {
						const rowColor =
							showHomeTeamColor && d?.cleanName === homeTeam
								? '#d9ecf6'
								: showAwayTeamColor && d?.cleanName === awayTeam
									? '#f0d7d5'
									: index % 2 === 0
										? '#fafafa'
										: '#ffffff'
						return (
							<TableRow key={d?.cleanName}>
								<TableCell
									align="center"
									sx={{
										bgcolor: rowColor,
										p: 0.5,
										fontWeight: 500,
										lineHeight: 1.2,
										fontSize: { xs: '0.75rem', md: '12px' }
									}}>
									{index + 1}.
								</TableCell>
								<TableCell sx={{ bgcolor: rowColor, p: 0.5 }}>
									<Stack direction="row" gap={0.75} alignItems="center">
										<Box display={['none', 'block']} component="img" src={d?.image} height="15px" />
										<Typography
											sx={{
												fontWeight: 500,
												lineHeight: 1.2,
												display: '-webkit-box',
												WebkitBoxOrient: 'vertical',
												WebkitLineClamp: '1',
												overflow: 'hidden',
												fontSize: { xs: '0.75rem', md: '12px' }
											}}>
											{d?.cleanName}
										</Typography>
									</Stack>
								</TableCell>
								{showMedie && (
									<TableCell
										align="center"
										sx={{
											bgcolor: isCorner
												? getCornereColorForValue(d?.stats[property])
												: getMedieColorForValue(d?.stats[property]),
											p: 0.5,
											fontWeight: 500,
											lineHeight: 1.2,
											fontSize: { xs: '0.75rem', md: '12px' }
										}}>
										{d?.stats[property]?.toFixed(2)}
									</TableCell>
								)}
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

interface StatisticsTableProps {
	type: 'home' | 'away'
	teamName: string
	teamImage: string
	data: {
		name: string
		flag: string
		matchesPlayed: number
		goals: number
		avgGoals: number
		goalPasses: number
	}[]
}

export const StatisticsTable = ({ type, teamName, teamImage, data }: StatisticsTableProps) => {
	const headingColor = type === 'home' ? '#007fc3' : '#dc271e'
	return (
		<TableContainer>
			{type === 'home' ? (
				<Stack mb={0.5} justifyContent="center" alignItems="center" direction="row" gap={1}>
					<Typography fontSize="20px" fontWeight={900}>
						{teamName}
					</Typography>
					<Box component="img" src={teamImage} height="20px" />
				</Stack>
			) : (
				<Stack mb={0.5} justifyContent="center" alignItems="center" direction="row" gap={1}>
					<Box component="img" src={teamImage} height="20px" />
					<Typography fontSize="20px" fontWeight={900}>
						{teamName}
					</Typography>
				</Stack>
			)}
			<Table>
				<TableHead>
					<TableRow>
						<TableCell sx={{ bgcolor: headingColor, py: 0, px: 0.5, color: 'white' }}>
							Nume
						</TableCell>
						<TableCell sx={{ bgcolor: headingColor, py: 0, px: 0.5, color: 'white' }}>
							Meciuri Jucate
						</TableCell>
						<TableCell
							sx={{ bgcolor: headingColor, fontWeight: 700, py: 0, px: 0.5, color: 'white' }}>
							Goluri
						</TableCell>
						<TableCell sx={{ bgcolor: headingColor, py: 0, px: 0.5, color: 'white' }}>
							Medie Goluri
						</TableCell>
						<TableCell sx={{ bgcolor: headingColor, py: 0, px: 0.5, color: 'white' }}>
							Pase de Gol
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(d => {
						return (
							<TableRow key={d.name}>
								<TableCell sx={{ color: '#545454', p: 0.5, borderBottom: '1px solid #fafafa' }}>
									<Stack direction="row" alignItems="center" gap={0.75}>
										<Typography fontWeight={600} fontSize="12px" color="#545454">
											{d.name}
										</Typography>
										<Box component="img" src={d.flag} height="15px" />
									</Stack>
								</TableCell>
								<TableCell
									align="center"
									sx={{ color: '#545454', p: 0.5, borderBottom: '1px solid #fafafa' }}>
									{d.matchesPlayed}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										color: '#56ca00',
										fontWeight: 700,
										p: 0.5,
										borderBottom: '1px solid #fafafa'
									}}>
									{d.goals}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										color: '#56ca00',
										p: 0.5,
										borderBottom: '1px solid #fafafa'
									}}>
									{d.avgGoals}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										color: '#26dee6',
										p: 0.5,
										borderBottom: '1px solid #fafafa'
									}}>
									{d.goalPasses}
								</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

interface StatisticsPlayedTableProps {
	type: 'home' | 'away'
	teamName: string
	teamImage: string
	data: {
		name: string
		flag: string
		suturi: number
		medie1: number
		suturiPePoartă: number
		medie2: number
		shotAccuracy: number
	}[]
}

export const StatisticsPlayedTable = ({
	type,
	teamName,
	teamImage,
	data
}: StatisticsPlayedTableProps) => {
	const headingColor = type === 'home' ? '#007fc3' : '#dc271e'
	return (
		<TableContainer>
			{type === 'home' ? (
				<Stack mb={0.5} justifyContent="center" alignItems="center" direction="row" gap={1}>
					<Typography fontSize="20px" fontWeight={900}>
						{teamName}
					</Typography>
					<Box component="img" src={teamImage} height="20px" />
				</Stack>
			) : (
				<Stack mb={0.5} justifyContent="center" alignItems="center" direction="row" gap={1}>
					<Box component="img" src={teamImage} height="20px" />
					<Typography fontSize="20px" fontWeight={900}>
						{teamName}
					</Typography>
				</Stack>
			)}
			<Table>
				<TableHead>
					<TableRow>
						<TableCell sx={{ bgcolor: headingColor, py: 0, px: 0.5, color: 'white' }}>
							Nume
						</TableCell>
						<TableCell sx={{ bgcolor: headingColor, py: 0, px: 0.5, color: 'white' }}>
							Șuturi
						</TableCell>
						<TableCell
							sx={{ bgcolor: headingColor, fontWeight: 700, py: 0, px: 0.5, color: 'white' }}>
							Medie
						</TableCell>
						<TableCell sx={{ bgcolor: headingColor, py: 0, px: 0.5, color: 'white' }}>
							Șuturi pe Poartă
						</TableCell>
						<TableCell sx={{ bgcolor: headingColor, py: 0, px: 0.5, color: 'white' }}>
							Medie
						</TableCell>
						<TableCell sx={{ bgcolor: headingColor, py: 0, px: 0.5, color: 'white' }}>
							Acuratețe Șuturi
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map(d => {
						return (
							<TableRow key={d.name}>
								<TableCell sx={{ color: '#545454', p: 0.5, borderBottom: '1px solid #fafafa' }}>
									<Stack direction="row" alignItems="center" gap={0.75}>
										<Typography fontWeight={600} fontSize="12px" color="#545454">
											{d.name}
										</Typography>
										<Box component="img" src={d.flag} height="15px" />
									</Stack>
								</TableCell>
								<TableCell
									align="center"
									sx={{
										color: '#56ca00',
										p: 0.5,
										fontWeight: 700,
										borderBottom: '1px solid #fafafa'
									}}>
									{d.suturi}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										color: '#56ca00',
										fontWeight: 700,
										p: 0.5,
										borderBottom: '1px solid #fafafa'
									}}>
									{d.medie1}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										color: '#007fc3',
										p: 0.5,
										fontWeight: 700,
										borderBottom: '1px solid #fafafa'
									}}>
									{d.suturiPePoartă}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										color: '#007fc3',
										p: 0.5,
										borderBottom: '1px solid #fafafa'
									}}>
									{d.medie2}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										color: '#dc271e',
										p: 0.5,
										borderBottom: '1px solid #fafafa'
									}}>
									{d.shotAccuracy}
									<Typography fontSize="10px" component="span">
										%
									</Typography>
								</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export const RefereeTable = ({ data }: any) => {
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							align="center"
							sx={{
								bgcolor: '#222222',
								borderRight: '3px solid white',
								py: 0.5,
								px: 0.5,
								lineHeight: 1.3,
								fontSize: ['12px', '14px'],
								color: 'white'
							}}>
							Arbitru
						</TableCell>
						<TableCell
							align="center"
							sx={{
								bgcolor: '#222222',
								borderRight: '3px solid white',
								py: 0.5,
								fontSize: ['12px', '14px'],
								px: 0.5,
								lineHeight: 1.3,
								color: 'white'
							}}>
							Medie Cartonașe
						</TableCell>
						<TableCell
							align="center"
							sx={{
								bgcolor: '#222222',
								borderRight: '3px solid white',
								px: 0.5,
								py: 0.5,
								lineHeight: 1.3,
								fontSize: ['12px', '14px'],
								color: 'white'
							}}>
							+3.5 Cartonașe
						</TableCell>
						<TableCell
							align="center"
							sx={{
								bgcolor: '#222222',
								borderRight: '3px solid white',
								px: 0.5,
								py: 0.5,
								lineHeight: 1.3,
								fontSize: ['12px', '14px'],
								color: 'white'
							}}>
							+4.5 Cartonașe
						</TableCell>
						<TableCell
							align="center"
							sx={{
								fontSize: ['12px', '14px'],
								bgcolor: '#222222',
								px: 0.5,
								py: 0.5,
								lineHeight: 1.3,
								color: 'white'
							}}>
							+5.5 Cartonașe
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell
							align="center"
							sx={{
								color: '#545454',
								p: 0.5,
								fontSize: ['12px', '14px'],
								borderRight: '3px solid white',
								borderBottom: '1px solid #fafafa'
							}}>
							<Typography textAlign="center" fontWeight={600} fontSize="12px" color="#545454">
								{data?.known_as}
							</Typography>
						</TableCell>
						<TableCell
							align="center"
							sx={{
								color: '#545454',
								bgcolor: medieTotalCartonaseValueToColor(data?.cards_per_match_overall),
								p: 0.5,
								fontSize: ['12px', '14px'],
								borderRight: '3px solid white',
								borderBottom: '1px solid #fafafa'
							}}>
							{data?.cards_per_match_overall}
						</TableCell>
						<TableCell
							align="center"
							sx={{
								color: '#545454',
								borderRight: '3px solid white',
								bgcolor: cartonasePlusValueToColor(data?.over35_cards_percentage_overall),
								p: 0.5,
								fontSize: ['12px', '14px'],
								borderBottom: '1px solid #fafafa'
							}}>
							{data?.over35_cards_percentage_overall}%
						</TableCell>
						<TableCell
							align="center"
							sx={{
								color: '#545454',
								borderRight: '3px solid white',
								bgcolor: cartonasePlusValueToColor(data?.over45_cards_percentage_overall),
								p: 0.5,
								fontSize: ['12px', '14px'],
								borderBottom: '1px solid #fafafa'
							}}>
							{data?.over45_cards_percentage_overall}%
						</TableCell>
						<TableCell
							align="center"
							sx={{
								color: '#545454',
								p: 0.5,
								fontSize: ['12px', '14px'],
								bgcolor: cartonasePlusValueToColor(data?.over55_cards_percentage_overall),
								borderBottom: '1px solid #fafafa'
							}}>
							{data?.over55_cards_percentage_overall}%
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}

interface GeneralTableProps {
	title: string
	homeTeam: string
	awayTeam: string
	showHomeTeamColor?: boolean
	showAwayTeamColor?: boolean
	data: {
		table_position: number
		image: string
		cleanName: string
		alt_names: string[]
		stats: any
		forms: string[]
	}[]
}

export const GeneralTable = ({
	homeTeam,
	awayTeam,
	showHomeTeamColor,
	showAwayTeamColor,
	title,
	data
}: GeneralTableProps) => {
	const theme = useTheme()

	const sortedData = data?.slice().sort((a, b) => a.table_position - b.table_position)

	const getDisplayName = (cleanName: string, altNames: string[]): string => {
		if (cleanName.length <= 15) {
			return cleanName
		}
		const altName = altNames.find(name => name.length <= 15)
		return altName ? altName : `${cleanName.substring(0, 15)}...`
	}

	return (
		<TableContainer>
			<Typography
				mb={0.5}
				lineHeight={1.2}
				textAlign="center"
				fontSize={['16px', '20px']}
				color={theme.heading}
				fontWeight={700}>
				{title}
			</Typography>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								fontSize: '14px',
								borderRight: '1px solid white',
								bgcolor: '#e0e0e0',
								p: 0.5,
								pl: 2
							}}>
							#
						</TableCell>
						<TableCell
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: '14px',
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							ECHIPE
						</TableCell>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: '14px',
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							MJ
						</TableCell>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: '14px',
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							V
						</TableCell>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: '14px',
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							E
						</TableCell>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: '14px',
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							Î
						</TableCell>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: '14px',
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							GM
						</TableCell>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: '14px',
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							GP
						</TableCell>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: '14px',
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							PCT
						</TableCell>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: '14px',
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							FORMA
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{sortedData?.map((d, index) => {
						const rowColor =
							showHomeTeamColor && d?.cleanName === homeTeam
								? '#d9ecf6'
								: showAwayTeamColor && d?.cleanName === awayTeam
									? '#f4dbda'
									: index % 2 === 0
										? '#fafafa'
										: '#ffffff'
						return (
							<TableRow key={d?.cleanName}>
								<TableCell
									align="center"
									sx={{ bgcolor: rowColor, p: 0.5, fontSize: ['11px', '14px'] }}>
									{d?.table_position}.
								</TableCell>
								<TableCell sx={{ bgcolor: rowColor, p: 0.5 }}>
									<Stack direction="row" gap={0.75} alignItems="center">
										<Box display={['none', 'block']} component="img" src={d?.image} height="15px" />
										<Typography fontSize={['11px', '14px']}>
											{getDisplayName(d?.cleanName, d?.alt_names)}
										</Typography>
									</Stack>
								</TableCell>

								<TableCell
									align="center"
									sx={{
										bgcolor: rowColor,
										p: 0.5,
										fontSize: ['13px', '16px']
									}}>
									{d?.stats?.seasonMatchesPlayed_overall}
								</TableCell>

								<TableCell
									align="center"
									sx={{
										bgcolor: rowColor,
										p: 0.5,
										fontSize: ['13px', '16px']
									}}>
									{d?.stats?.seasonWinsNum_overall}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										bgcolor: rowColor,
										p: 0.5,
										fontSize: ['13px', '16px']
									}}>
									{d?.stats?.seasonDrawsNum_overall}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										bgcolor: rowColor,
										p: 0.5,
										fontSize: ['13px', '16px']
									}}>
									{d?.stats?.seasonLossesNum_overall}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										bgcolor: rowColor,
										p: 0.5,
										fontSize: ['13px', '16px']
									}}>
									{d?.stats?.seasonGoals_overall}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										bgcolor: rowColor,
										p: 0.5,
										fontSize: ['13px', '16px']
									}}>
									{d?.stats?.seasonConceded_overall}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										bgcolor: rowColor,
										p: 0.5,
										fontSize: ['13px', '16px'],
										fontWeight: 700
									}}>
									{(d?.stats?.seasonWinsNum_overall ?? 0) * 3 +
										(d?.stats?.seasonDrawsNum_overall ?? 0) * 1}
								</TableCell>
								<TableCell
									align="center"
									sx={{
										bgcolor: rowColor,
										p: 0.5,
										fontSize: ['13px', '16px']
									}}>
									<Stack direction="row" alignItems="center" gap={0.25}>
										{d?.stats?.additional_info?.formRun_overall
											?.slice(-5)
											?.split('')
											?.map((form: string, index: number) => (
												<Box
													key={index}
													height="10px"
													width="10px"
													flex={1}
													bgcolor={form === 'w' ? '#7abe45' : form === 'd' ? '#e4990a' : '#d02419'}
												/>
											))}
									</Stack>
								</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

interface AcasaTableProps {
	title: string
	homeTeam: string
	awayTeam: string
	showHomeTeamColor?: boolean
	showAwayTeamColor?: boolean
	data: any
	sortOn: string
}

export const AcasaTable = ({
	homeTeam,
	awayTeam,
	showHomeTeamColor,
	showAwayTeamColor,
	title,
	data,
	sortOn
}: AcasaTableProps) => {
	const theme = useTheme()

	const sortedData = data?.slice().sort((a: any, b: any) => b?.stats[sortOn] - a?.stats[sortOn])

	const getDisplayName = (cleanName: string, altNames: string[]): string => {
		if (cleanName.length <= 15) {
			return cleanName
		}
		const altName = altNames.find(name => name.length <= 15)
		return altName ? altName : `${cleanName.substring(0, 15)}...`
	}

	return (
		<TableContainer>
			<Typography
				mb={0.5}
				lineHeight={1.2}
				textAlign="center"
				fontSize={['16px', '20px']}
				color={theme.heading}
				fontWeight={700}>
				{title}
			</Typography>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								fontSize: ['12px', '14px'],
								borderRight: '1px solid white',
								bgcolor: '#e0e0e0',
								p: 0.5,
								pl: 2
							}}>
							#
						</TableCell>
						<TableCell
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: ['12px', '14px'],
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							ECHIPE
						</TableCell>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: ['12px', '14px'],
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							MJ
						</TableCell>
						<TableCell
							align="center"
							sx={{
								borderBottom: '0px',
								borderRight: '1px solid white',
								fontSize: ['12px', '14px'],
								bgcolor: '#e0e0e0',
								p: 0.5
							}}>
							PpM
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{sortedData?.map((d: any, index: any) => {
						const rowColor =
							showHomeTeamColor && d?.cleanName === homeTeam
								? '#d9ecf6'
								: showAwayTeamColor && d?.cleanName === awayTeam
									? '#f4dbda'
									: index % 2 === 0
										? '#fafafa'
										: '#ffffff'
						return (
							<TableRow key={d?.cleanName}>
								<TableCell
									align="center"
									sx={{ bgcolor: rowColor, p: 0.5, fontSize: ['12px', '14px'] }}>
									{index + 1}.
								</TableCell>
								<TableCell sx={{ bgcolor: rowColor, p: 0.5 }}>
									<Stack direction="row" gap={0.75} alignItems="center">
										<Box display={['none', 'block']} component="img" src={d?.image} height="15px" />
										<Typography fontSize={['12px', '14px']}>
											{getDisplayName(d?.cleanName, d?.alt_names)}
										</Typography>
									</Stack>
								</TableCell>

								<TableCell
									align="center"
									sx={{
										bgcolor: rowColor,
										p: 0.5,
										fontSize: ['12px', '14px']
									}}>
									{title === 'ACASA'
										? d?.stats?.seasonMatchesPlayed_home
										: d?.stats?.seasonMatchesPlayed_away}
								</TableCell>

								<TableCell
									align="center"
									sx={{
										bgcolor: getPpMColorForValue(
											title === 'ACASA' ? d?.stats?.seasonPPG_home : d?.stats?.seasonPPG_away
										),
										p: 0.5,
										fontSize: ['12px', '14px'],
										fontWeight: 700
									}}>
									{title === 'ACASA'
										? d?.stats?.seasonPPG_home.toFixed(2)
										: d?.stats?.seasonPPG_away.toFixed(2)}
								</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export const CalendarOddsTable = ({ matches, leagues }: any) => {
	const theme = useTheme()

	const leaguePriority = [
		'International UEFA Euro Championship',
		'World Cup',
		'Euro 2024',
		'International Copa America',
		'Champions League',
		'Europa League',
		'Conference League',
		'Romania Liga I',
		'England Premier League',
		'Spain La Liga',
		'Germany Bundesliga',
		'Italy Serie A',
		'France Ligue 1'
	]

	const getLeagueByCompetitionId = (competitionId: any) => {
		return leagues.find((league: any) =>
			league.season.some((season: any) => season.id === competitionId)
		)
	}

	const matchesByLeague: any = {}
	matches?.forEach((match: any) => {
		const league = getLeagueByCompetitionId(match.competition_id)
		if (league) {
			const leagueName = league.name
			if (!matchesByLeague[leagueName]) {
				matchesByLeague[leagueName] = { matches: [], icon: league.image }
			}
			matchesByLeague[leagueName].matches.push(match)
		} else {
			const unknownLeagueName = 'Unknown League'
			if (!matchesByLeague[unknownLeagueName]) {
				matchesByLeague[unknownLeagueName] = { matches: [], icon: '' }
			}
			matchesByLeague[unknownLeagueName].matches.push(match)
		}
	})

	const sortedLeagueNames = Object.keys(matchesByLeague).sort((a, b) => {
		const indexA = leaguePriority.findIndex(name => a.includes(name))
		const indexB = leaguePriority.findIndex(name => b.includes(name))

		if (indexA === indexB) {
			return a.localeCompare(b)
		}
		if (indexA === -1) {
			return 1
		}
		if (indexB === -1) {
			return -1
		}
		return indexA - indexB
	})

	const [expanded, setExpanded] = useState(new Array(sortedLeagueNames.length).fill(true))

	const handleAccordionChange = (panelIndex: any) => (event: any, isExpanded: any) => {
		setExpanded(expanded.map((exp, index) => (index === panelIndex ? isExpanded : exp)))
	}
	const handleRowClick = (matchId: number) => {
		window.open(`/${matchId}`, '_blank', 'noopener,noreferrer')
	}

	const formatTimeToLocal = (unixTimestamp: any) => {
		const date = new Date(unixTimestamp * 1000)
		return date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		})
	}

	return sortedLeagueNames.map((leagueName, index) => (
		<Accordion
			key={leagueName}
			expanded={expanded[index]}
			onChange={handleAccordionChange(index)}
			sx={{
				'&:not(:last-child)': {
					marginBottom: 0
				},
				'&:before': {
					display: 'none'
				},
				'&.Mui-expanded': {
					margin: '0 !important'
				}
			}}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				sx={{
					'&.Mui-expanded': {
						minHeight: ['27px', '64px'],
						'&>div': {
							my: ['0 !important', '20px !important'],
							mt: ['10px']
						}
					}
				}}
				id="panel1a-header">
				<Stack direction="row" alignItems="center" spacing={2}>
					{matchesByLeague[leagueName].icon && (
						<img
							src={matchesByLeague[leagueName].icon}
							alt={`${leagueName} icon`}
							style={{ width: '45px', height: '45px' }}
						/>
					)}
					<Typography fontSize="14px" color={theme.text} variant="body2">
						{leagueName}
					</Typography>
				</Stack>
			</AccordionSummary>
			<AccordionDetails sx={{ px: 0.25 }}>
				<TableContainer>
					<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'auto' }}>
						<TableHead>
							<TableRow>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}>
									<Stack
										pl={[20, 0]}
										direction="row"
										justifyContent="center"
										gap={[2.5, 4]}
										alignItems="center">
										<Typography
											whiteSpace="nowrap"
											fontSize="12px"
											fontWeight="bold"
											color={theme.text}>
											PpM
										</Typography>
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											Meci
										</Typography>
										<Typography
											whiteSpace="nowrap"
											fontSize="12px"
											fontWeight="bold"
											color={theme.text}>
											PpM
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											1
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										X
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										2
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}></StyledTableHead>
							</TableRow>
						</TableHead>
						<TableBody>
							{matchesByLeague[leagueName]?.matches?.map((match: any, index: any) => {
								return (
									<TableRow
										key={index}
										onClick={() => handleRowClick(match.id)}
										sx={{
											cursor: 'pointer',
											'&:hover': {
												backgroundColor: theme.palette.action.hover
											}
										}}>
										<StyledTableCell align="left">
											<Stack
												gap={[0.5, 2]}
												alignItems={['center ', 'start']}
												direction="row"
												justifyContent="center">
												<Stack display={['flex', 'none']} direction="column" gap={0.5}>
													<Box
														component="img"
														sx={{ width: '18px', height: '18px' }}
														src={`https://cdn.footystats.org/img/${match.home_image}`}
														alt={match.home_name}
													/>
													<Box
														sx={{ width: '18px', height: '18px' }}
														component="img"
														src={`https://cdn.footystats.org/img/${match.away_image}`}
														alt={match.away_name}
													/>
												</Stack>
												<Stack display={['flex', 'none']} direction="column" gap={0.5}>
													<Typography
														textAlign="left"
														whiteSpace="nowrap"
														width="140px"
														fontSize="12px"
														flex={1}>
														{match.home_name}
													</Typography>
													<Typography
														textAlign="left"
														whiteSpace="nowrap"
														width="140px"
														fontSize="12px"
														flex={1}>
														{match.away_name}
													</Typography>
												</Stack>
												<Typography
													display={['none', 'block']}
													textAlign="right"
													width="120px"
													fontSize="12px"
													flex={1}>
													{match.home_name}
												</Typography>
												<Box
													component="img"
													display={['none', 'block']}
													sx={{ width: '18px', height: '18px' }}
													src={`https://cdn.footystats.org/img/${match.home_image}`}
													alt={match.home_name}
												/>
												<Typography
													textAlign="center"
													px={[0.5, 1.25]}
													fontSize="12px"
													width={'auto'}
													bgcolor={getMedPctColorForValue(match.pre_match_home_ppg)}>
													{match.pre_match_home_ppg.toFixed(2)}
												</Typography>
												{new Date().getTime() > match.date_unix * 1000 ? (
													<Typography
														fontSize="12px"
														px={0}
														width="42px"
														textAlign="center"
														py={0.25}
														bgcolor={theme.gray}
														whiteSpace="nowrap"
														color="black"
														fontWeight="bold">
														{match.homeGoalCount} - {match.awayGoalCount}
													</Typography>
												) : (
													<Typography px={0.75} fontSize="12px" textAlign="center">
														{formatTimeToLocal(match.date_unix)}
													</Typography>
												)}
												<Typography
													fontSize="12px"
													textAlign="center"
													px={[0.5, 1.25]}
													width={'auto'}
													bgcolor={getMedPctColorForValue(match.pre_match_away_ppg)}>
													{match.pre_match_away_ppg.toFixed(2)}
												</Typography>
												<Box
													display={['none', 'block']}
													sx={{ width: '18px', height: '18px' }}
													component="img"
													src={`https://cdn.footystats.org/img/${match.away_image}`}
													alt={match.away_name}
												/>
												<Typography
													display={['none', 'block']}
													textAlign="left"
													width="120px"
													fontSize="12px"
													flex={1}>
													{match.away_name}
												</Typography>
											</Stack>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography fontSize="12px" width={['50px', 'auto']}>
												{match.odds_ft_1.toFixed(2)}
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography fontSize="12px" width={['50px', 'auto']}>
												{match.odds_ft_x.toFixed(2)}
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography fontSize="12px" width={['50px', 'auto']}>
												{match.odds_ft_2.toFixed(2)}
											</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												bgcolor="#b9cb00"
												ml="auto"
												width="fit-content"
												fontWeight="400"
												textTransform="uppercase"
												fontSize="12px"
												px={1}>
												Statistici
											</Typography>
										</StyledTableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</AccordionDetails>
		</Accordion>
	))
}

export const MobileCalendarOddsTable = ({ matches, leagues }: any) => {
	const theme = useTheme()

	const leaguePriority = [
		'International UEFA Euro Championship',
		'World Cup',
		'Euro 2024',
		'Champions League',
		'Europa League',
		'Conference League',
		'Romania Liga I',
		'England Premier League',
		'Spain La Liga',
		'Germany Bundesliga',
		'Italy Serie A',
		'France Ligue 1'
	]

	const getLeagueByCompetitionId = (competitionId: any) => {
		return leagues.find((league: any) =>
			league.season.some((season: any) => season.id === competitionId)
		)
	}

	const matchesByLeague: any = {}
	matches?.forEach((match: any) => {
		const league = getLeagueByCompetitionId(match.competition_id)
		if (league) {
			const leagueName = league.name
			if (!matchesByLeague[leagueName]) {
				matchesByLeague[leagueName] = { matches: [], icon: league.image }
			}
			matchesByLeague[leagueName].matches.push(match)
		} else {
			const unknownLeagueName = 'Unknown League'
			if (!matchesByLeague[unknownLeagueName]) {
				matchesByLeague[unknownLeagueName] = { matches: [], icon: '' }
			}
			matchesByLeague[unknownLeagueName].matches.push(match)
		}
	})

	const sortedLeagueNames = Object.keys(matchesByLeague).sort((a, b) => {
		const indexA = leaguePriority.findIndex(name => a.includes(name))
		const indexB = leaguePriority.findIndex(name => b.includes(name))

		if (indexA === indexB) {
			return a.localeCompare(b)
		}
		if (indexA === -1) {
			return 1
		}
		if (indexB === -1) {
			return -1
		}
		return indexA - indexB
	})

	const [expanded, setExpanded] = useState(new Array(sortedLeagueNames.length).fill(true))

	const handleAccordionChange = (panelIndex: any) => (event: any, isExpanded: any) => {
		setExpanded(expanded.map((exp, index) => (index === panelIndex ? isExpanded : exp)))
	}
	const handleRowClick = (matchId: number) => {
		window.open(`/${matchId}`, '_blank', 'noopener,noreferrer')
	}

	const formatTimeToLocal = (unixTimestamp: any) => {
		const date = new Date(unixTimestamp * 1000)
		return date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		})
	}

	return sortedLeagueNames.map((leagueName, index) => (
		<Accordion
			key={leagueName}
			expanded={expanded[index]}
			onChange={handleAccordionChange(index)}
			sx={{
				'&:not(:last-child)': {
					marginBottom: 0
				},
				'&:before': {
					display: 'none'
				},
				'&.Mui-expanded': {
					margin: '0 !important'
				}
			}}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				sx={{
					'&.Mui-expanded': {
						minHeight: ['27px', '64px'],
						'&>div': {
							my: ['0 !important', '20px !important'],
							mt: ['10px']
						}
					}
				}}
				id="panel1a-header">
				<Stack direction="row" alignItems="center" spacing={2}>
					{matchesByLeague[leagueName].icon && (
						<img
							src={matchesByLeague[leagueName].icon}
							alt={`${leagueName} icon`}
							style={{ width: '45px', height: '45px' }}
						/>
					)}
					<Typography fontSize="14px" color={theme.text} variant="body2">
						{leagueName}
					</Typography>
				</Stack>
			</AccordionSummary>
			<AccordionDetails sx={{ px: 0.25 }}>
				<TableContainer>
					<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'auto' }}>
						<TableHead>
							<TableRow>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}>
									Meci
								</StyledTableHead>
								<StyledTableHead
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}
								/>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}>
									<Typography
										whiteSpace="nowrap"
										fontSize="12px"
										fontWeight="bold"
										color={theme.text}>
										PpM
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}>
									<Stack direction="column" alignItems="center">
										<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
											1
										</Typography>
									</Stack>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										X
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									align="center"
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}>
									<Typography fontSize="12px" fontWeight="bold" color={theme.text}>
										2
									</Typography>
								</StyledTableHead>
								<StyledTableHead
									sx={{
										padding: '2px',
										backgroundColor: '#E8E8E8'
									}}></StyledTableHead>
							</TableRow>
						</TableHead>
						<TableBody>
							{matchesByLeague[leagueName]?.matches?.map((match: any, index: any) => {
								return (
									<TableRow
										key={index}
										onClick={() => handleRowClick(match.id)}
										sx={{
											cursor: 'pointer',
											'&:hover': {
												backgroundColor: theme.palette.action.hover
											}
										}}>
										<StyledTableCell align="left">
											{new Date().getTime() > match.date_unix * 1000 ? (
												<Typography
													fontSize="12px"
													px={0.5}
													textAlign="center"
													py={0.25}
													bgcolor={theme.gray}
													whiteSpace="nowrap"
													color="black"
													fontWeight="bold">
													{match.homeGoalCount} - {match.awayGoalCount}
												</Typography>
											) : (
												<Typography fontSize="12px" textAlign="center">
													{formatTimeToLocal(match.date_unix)}
												</Typography>
											)}
										</StyledTableCell>
										<StyledTableCell align="left">
											<Stack gap={[0.5, 2]} alignItems={'start'} direction="row">
												<Stack display={['flex', 'none']} direction="column" gap={0.5}>
													<Box
														component="img"
														sx={{ width: '18px', height: '18px', flexShrink: 0 }}
														src={`https://cdn.footystats.org/img/${match.home_image}`}
														alt={match.home_name}
													/>
													<Box
														sx={{ width: '18px', height: '18px', flexShrink: 0 }}
														component="img"
														src={`https://cdn.footystats.org/img/${match.away_image}`}
														alt={match.away_name}
													/>
												</Stack>
												<Stack
													display={['flex', 'none']}
													alignItems="start"
													direction="column"
													gap={0.5}>
													<Typography
														width="70px"
														textOverflow="ellipsis"
														overflow="hidden"
														textAlign="left"
														whiteSpace="nowrap"
														fontSize="12px"
														flex={1}>
														{match.home_name}
													</Typography>
													<Typography
														width="70px"
														textOverflow="ellipsis"
														overflow="hidden"
														textAlign="left"
														whiteSpace="nowrap"
														fontSize="12px"
														flex={1}>
														{match.away_name}
													</Typography>
												</Stack>
												<Typography
													display={['none', 'block']}
													textAlign="right"
													width="120px"
													fontSize="12px"
													flex={1}>
													{match.home_name}
												</Typography>
												<Box
													component="img"
													display={['none', 'block']}
													sx={{ width: '18px', height: '18px' }}
													src={`https://cdn.footystats.org/img/${match.home_image}`}
													alt={match.home_name}
												/>

												<Box
													display={['none', 'block']}
													sx={{ width: '18px', height: '18px' }}
													component="img"
													src={`https://cdn.footystats.org/img/${match.away_image}`}
													alt={match.away_name}
												/>
												<Typography
													display={['none', 'block']}
													textAlign="left"
													width="120px"
													fontSize="12px"
													flex={1}>
													{match.away_name}
												</Typography>
											</Stack>
										</StyledTableCell>
										<StyledTableCell>
											<Stack direction="column" gap={0.5}>
												<Typography
													textAlign="center"
													px={[0.5, 1.25]}
													fontSize="12px"
													width={'auto'}
													bgcolor={getMedPctColorForValue(match.pre_match_home_ppg)}>
													{match.pre_match_home_ppg.toFixed(2)}
												</Typography>

												<Typography
													fontSize="12px"
													textAlign="center"
													px={[0.5, 1.25]}
													width={'auto'}
													bgcolor={getMedPctColorForValue(match.pre_match_away_ppg)}>
													{match.pre_match_away_ppg.toFixed(2)}
												</Typography>
											</Stack>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography fontSize="12px">{match.odds_ft_1.toFixed(2)}</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography fontSize="12px">{match.odds_ft_x.toFixed(2)}</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography fontSize="12px">{match.odds_ft_2.toFixed(2)}</Typography>
										</StyledTableCell>
										<StyledTableCell align="center">
											<Typography
												bgcolor="#b9cb00"
												width="fit-content"
												textAlign="center"
												fontWeight="400"
												fontSize="10px"
												textTransform="uppercase"
												px={0.5}>
												Statistici
											</Typography>
										</StyledTableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</AccordionDetails>
		</Accordion>
	))
}

export const LeagueStandingsTable = ({ data }: LeagueStandingsTableProps) => {
	const theme = useTheme()
	const sortedData = data?.slice().sort((a, b) => a.table_position - b.table_position)

	const getDisplayName = (cleanName: string, altNames: string[]): string => {
		if (cleanName.length <= 15) {
			return cleanName
		}
		const altName = altNames.find(name => name.length <= 15)
		return altName ? altName : `${cleanName.substring(0, 15)}...`
	}

	return (
		<TableContainer>
			<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'auto' }}>
				<TableHead>
					<TableRow>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									#
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									ECHIPE
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									MJ
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									V
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									E
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								T
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								GM
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								GP
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								PCT
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								mG
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								+ 2.5 G
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								GG
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								mC
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								+9.5 C
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								mCart
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								FORMA
							</Typography>
						</StyledTableHead>
					</TableRow>
				</TableHead>
				<TableBody>
					{sortedData?.map((item, index) => {
						return (
							<StyledTableRow key={item?.cleanName}>
								<StyledTableCell align="center">{item.table_position}</StyledTableCell>
								<StyledTableCell align="center">
									<Stack direction="row" gap={1} justifyContent="left">
										<Box component="img" src={item.image} height="15px" width="15px" />
										{getDisplayName(item?.cleanName, item?.alt_names)}
									</Stack>
								</StyledTableCell>
								<StyledTableCell align="center">
									{item.stats?.seasonMatchesPlayed_overall}
								</StyledTableCell>
								<StyledTableCell align="center">
									{item.stats?.seasonWinsNum_overall}
								</StyledTableCell>
								<StyledTableCell align="center">
									{item.stats?.seasonDrawsNum_overall}
								</StyledTableCell>
								<StyledTableCell align="center">
									{item.stats?.seasonLossesNum_overall}
								</StyledTableCell>
								<StyledTableCell align="center">{item.stats?.seasonGoals_overall}</StyledTableCell>
								<StyledTableCell align="center">
									{item.stats?.seasonConceded_overall}
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ fontWeight: 'bold' }}>
									{'xx'}
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={getGoalColor(item.stats?.seasonAVG_overall)}
										fontSize="12px"
										fontWeight="bold"
										padding={0}>
										{item.stats?.seasonAVG_overall}
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={PERCENTAGE_COLOR[item.stats?.seasonOver25Percentage_overall]}
										fontSize="12px"
										// color="white"
										fontWeight="bold"
										padding={0}>
										{item.stats?.seasonOver25Percentage_overall}%
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={PERCENTAGE_COLOR[item.stats?.seasonBTTSPercentage_overall]}
										fontSize="12px"
										// color="white"
										fontWeight="bold"
										padding={0}>
										{item.stats?.seasonBTTSPercentage_overall}%
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={getCornersAverageColor(item.stats?.cornersTotalAVG_overall)}
										fontSize="12px"
										color="white"
										fontWeight="bold"
										padding={0}>
										{item.stats?.cornersTotalAVG_overall}
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={PERCENTAGE_COLOR[item.stats?.over95CornersPercentage_overall]}
										fontSize="12px"
										color="white"
										fontWeight="bold"
										padding={0}>
										{item.stats?.over95CornersPercentage_overall}%
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={getYellowCardsAverageColor(item.stats?.cardsAVG_overall)}
										fontSize="12px"
										color="white"
										fontWeight="bold"
										padding={0}>
										{item.stats?.cardsAVG_overall}
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center">
									<Stack direction="row" alignItems="center" gap={0.25}>
										{item?.stats?.additional_info?.formRun_overall
											?.slice(-5)
											?.split('')
											?.map((form: string, index: number) => (
												<Box
													key={index}
													height="10px"
													width="10px"
													flex={1}
													bgcolor={form === 'w' ? '#7abe45' : form === 'd' ? '#e4990a' : '#d02419'}
												/>
											))}
									</Stack>
								</StyledTableCell>
							</StyledTableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export const LeagueMatchesTable = ({ matches }: any) => {
	const theme = useTheme()

	function filterByCompetitionId(matches: any[], competitionId: number) {
		return matches.filter(obj => obj.competition_id === competitionId)
	}
	const formatTimeToLocal = (unixTimestamp: any) => {
		const date = new Date(unixTimestamp * 1000)
		return date.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false
		})
	}
	const leagueFixtures = matches.matches

	return (
		<TableContainer>
			<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'auto' }}>
				<TableHead>
					<TableRow>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									Data
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{
								padding: '2px',
								backgroundColor: '#E8E8E8',
								borderRight: '1px solid white',
								alignContent: 'center'
							}}>
							<Stack direction="row" justifyContent="center" gap={[0.5, 2]}>
								<Typography fontSize="11px" width="42px" color={theme.text}>
									PpM
								</Typography>
								<Typography fontSize="11px" width="42px" color={theme.text}>
									Meci
								</Typography>
								<Typography fontSize="11px" width="42px" color={theme.text}>
									PpM
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								mG
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								+ 2.5 G
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								GG
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								mC
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								+9.5 C
							</Typography>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Typography fontSize="11px" color={theme.text}>
								mCart
							</Typography>
						</StyledTableHead>
					</TableRow>
				</TableHead>
				<TableBody>
					{leagueFixtures.map((item: any, index: any) => {
						const ppgColor =
							item.mg >= 2
								? '#51C5C6'
								: item.mg >= 1.75
									? '#B9D36B'
									: item.mg >= 1.0
										? '#FAB108'
										: item.mg >= 0.5
											? '#DE655A'
											: '#E2101A'
						return (
							<StyledTableRow key={index}>
								<StyledTableCell align="center">
									{formatTimeToLocal(item.date_unix)}
								</StyledTableCell>
								<StyledTableCell align="left">
									<Stack gap={[0.5, 2]} direction="row" justifyContent="center" alignItems="center">
										<Typography textAlign="right" width="120px" fontSize="12px" flex={1}>
											{item.home_name}
										</Typography>
										<Box
											component="img"
											sx={{ width: '18px', height: '18px' }}
											src={`https://cdn.footystats.org/img/${item.home_image}`}
										/>
										<Typography
											bgcolor={getGoalColor(item.home_ppg)}
											fontSize="12px"
											width="42px"
											fontWeight="bold"
											textAlign="center"
											padding={0}>
											{item.home_ppg}
										</Typography>
										<Typography
											fontSize="12px"
											width="42px"
											textAlign="center"
											display={['none', 'block']}
											py={0.25}
											// bgcolor={theme.gray}
											whiteSpace="nowrap"
											color="black"
											fontWeight="bold">
											{new Date().getTime() > item.date_unix * 1000 && item.status === 'complete'
												? `${item.homeGoalCount} - ${item.awayGoalCount}`
												: formatTimeToLocal(item.date_unix)}
										</Typography>
										<Typography
											bgcolor={getGoalColor(item.away_ppg)}
											fontSize="12px"
											width="42px"
											fontWeight="bold"
											textAlign="center"
											padding={0}>
											{item.away_ppg}
										</Typography>
										<Box
											sx={{ width: '18px', height: '18px' }}
											component="img"
											src={`https://cdn.footystats.org/img/${item.away_image}`}
										/>
										<Typography textAlign="left" width="120px" fontSize="12px" flex={1}>
											{item.away_name}
										</Typography>
									</Stack>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={getGoalColor(item.avg_potential)}
										fontSize="12px"
										// color="white"
										fontWeight="bold"
										padding={0}>
										{item.avg_potential}
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={PERCENTAGE_COLOR[item.o25_potential]}
										fontSize="12px"
										// color="white"
										fontWeight="bold"
										padding={0}>
										{item.o25_potential}%
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={PERCENTAGE_COLOR[item.btts_potential]}
										fontSize="12px"
										// color="white"
										fontWeight="bold"
										padding={0}>
										{item.btts_potential}%
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={getCornersAverageColor(item.corners_potential)}
										fontSize="12px"
										color="white"
										fontWeight="bold"
										padding={0}>
										{item.corners_potential}
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={PERCENTAGE_COLOR[item.corners_o95_potential]}
										fontSize="12px"
										color="white"
										fontWeight="bold"
										padding={0}>
										{item.corners_o95_potential}%
									</Typography>
								</StyledTableCell>
								<StyledTableCell align="center" sx={{ p: 1 }}>
									<Typography
										bgcolor={getYellowCardsAverageColor(item.cards_potential)}
										fontSize="12px"
										color="white"
										fontWeight="bold"
										padding={0}>
										{item.cards_potential}
									</Typography>
								</StyledTableCell>
							</StyledTableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export const TopPlayerTable = ({ items }: LeagueStandingsTablePropss) => {
	const theme = useTheme()
	return (
		<TableContainer>
			<Table size="small" aria-label="table" sx={{ maxWidth: '100%', tableLayout: 'auto' }}>
				<TableHead>
					<TableRow>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									#
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									NUME
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									GOLURI JUCATOR/ECHIPA
								</Typography>
							</Stack>
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{ padding: '2px', backgroundColor: '#E8E8E8', borderRight: '1px solid white' }}>
							<Stack direction="column" alignItems="center">
								<Typography fontSize="11px" color={theme.text}>
									CONTRIBUTIE
								</Typography>
							</Stack>
						</StyledTableHead>
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((item, index) => {
						const ppgColor =
							item.mg >= 2
								? '#51C5C6'
								: item.mg >= 1.75
									? '#B9D36B'
									: item.mg >= 1.0
										? '#FAB108'
										: item.mg >= 0.5
											? '#DE655A'
											: '#E2101A'
						return (
							<StyledTableRow key={index}>
								<StyledTableCell align="center">{item.id}</StyledTableCell>
								<StyledTableCell align="center">
									<Stack direction="row" gap={1} justifyContent="center">
										<Box component="img" src={item.teamLogo} height="15px" width="15px" />
										{item.team}
									</Stack>
								</StyledTableCell>
								<StyledTableCell align="center">
									<GoalContributionBar progress={23} progressBarColor="blue" maxValue={93} />
								</StyledTableCell>
								<StyledTableCell align="center">{item.v}%</StyledTableCell>
							</StyledTableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export const TopPlayerStatsTable = ({ items }: LeagueStandingsTablePropss) => {
	const theme = useTheme()
	return (
		<List sx={{ width: '100%' }}>
			<ListItem
				sx={{
					backgroundColor: 'white',
					color: '#003049',
					p: 0
				}}>
				<ListItemText
					primary={<Typography variant="h4">PASE DE GOL</Typography>}
					sx={{ textAlign: 'right' }}
				/>
			</ListItem>
			{items.slice(0, 5).map((item, index) => (
				<ListItem
					key={item.id}
					sx={{
						backgroundColor: index === 0 ? '#003049' : '#ebebeb',
						mb: '2px',
						color: index === 0 ? 'white' : 'black'
					}}>
					<ListItemAvatar
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							margin: '5px'
						}}>
						<Typography fontSize="18px" fontWeight="bold">
							{index + 1}.
						</Typography>
						<Box component="img" src={item.teamLogo} height="40px" width="40px" />
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
								Erling Halaand
							</Typography>
						}
						secondary={<Typography variant="subtitle2">Manchester City</Typography>}
					/>
					<ListItemText
						primary={
							<Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
								23
							</Typography>
						} // Assuming stat is a number
						sx={{ textAlign: 'right' }}
					/>
				</ListItem>
			))}
		</List>
	)
}
