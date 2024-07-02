import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'
import { NotAvailableIcon } from 'assets/icons'
import { FormScoreCard } from 'components/cards/score-card'
import { DateTime } from 'luxon'
import { useState } from 'react'

export const DetailsSection = ({ data, homeTeamMatches = [], awayTeamMatches = [] }: any) => {
	const theme = useTheme()
	const [homeIndex, setHomeIndex] = useState(5)
	const [awayIndex, setAwayIndex] = useState(5)

	const homeMatches = Array.isArray(homeTeamMatches) ? homeTeamMatches : []
	const awayMatches = Array.isArray(awayTeamMatches) ? awayTeamMatches : []

	const combinedMatches = []
	const maxLength = Math.max(homeMatches.length, awayMatches.length)

	for (let i = 0; i < maxLength; i++) {
		if (i < homeMatches.length) {
			combinedMatches.push({ match: homeMatches[i] })
		} else {
			combinedMatches.push({ match: null })
		}
		if (i < awayMatches.length) {
			combinedMatches.push({ match: awayMatches[i] })
		} else {
			combinedMatches.push({ match: null })
		}
	}

	const getTeamData = (match: any, isHomeColumn: boolean) => {
		if (!match) {
			return {
				teamName: 'N/A',
				teamImg: NotAvailableIcon,
				opponentName: 'N/A',
				opponentImg: NotAvailableIcon,
				teamCorner: -1,
				opponentCorner: -1,
				teamGoal: -1,
				opponentGoal: -1,
				teamCard: -1,
				opponentCard: -1,
				outcome: 'draw' as 'win' | 'draw' | 'lose',
				date: DateTime.now().startOf('day').toFormat('dd.LL.yyyy')
			}
		}

		const team = match.teams.home
		const opponent = match.teams.away

		const teamIndex = 0
		const opponentIndex = 1

		let outcome: 'win' | 'draw' | 'lose'
		if (isHomeColumn) {
			if (match.goals.home > match.goals.away) {
				outcome = 'win'
			} else if (match.goals.home < match.goals.away) {
				outcome = 'lose'
			} else {
				outcome = 'draw'
			}
		} else {
			if (match.goals.away > match.goals.home) {
				outcome = 'win'
			} else if (match.goals.away < match.goals.home) {
				outcome = 'lose'
			} else {
				outcome = 'draw'
			}
		}

		return {
			teamName: team.name,
			teamImg: team.logo,
			opponentName: opponent.name,
			opponentImg: opponent.logo,
			teamCorner: match.statistics?.[teamIndex]?.statistics?.[7]?.value ?? 0,
			opponentCorner: match.statistics?.[opponentIndex]?.statistics?.[7]?.value ?? 0,
			teamGoal: match.goals[teamIndex === 0 ? 'home' : 'away'] ?? 0,
			opponentGoal: match.goals[teamIndex === 0 ? 'away' : 'home'] ?? 0,
			teamCard: match.statistics?.[teamIndex]?.statistics?.[10]?.value ?? 0,
			opponentCard: match.statistics?.[opponentIndex]?.statistics?.[10]?.value ?? 0,
			outcome: outcome,
			date: DateTime.fromSeconds(match.fixture.timestamp).toFormat('dd.LL.yyyy')
		}
	}

	return (
		<Stack id="details" direction="column" gap={4}>
			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				textTransform="uppercase"
				color={theme.heading}
				fontSize={['20px', '30px']}>
				FORMĂ ECHIPE
			</Typography>
			<Stack px={20} display={['none', 'flex']} direction="column" gap={2}>
				<Grid justifyContent="center" container>
					<Grid item xs={12} md={6}>
						<Stack direction="column" justifyContent="center" alignItems="center" gap={1}>
							<Box
								component="img"
								height="50px"
								src={
									data.home_image
										? `https://cdn.footystats.org/img/${data.home_image}`
										: NotAvailableIcon
								}
							/>
							<Typography color="#323232" fontSize={['14px', '20px']} fontWeight={900}>
								{data.home_name}
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={12} md={6}>
						<Stack direction="column" justifyContent="center" alignItems="center" gap={1}>
							<Box
								component="img"
								height="50px"
								src={
									data.away_image
										? `https://cdn.footystats.org/img/${data.away_image}`
										: NotAvailableIcon
								}
							/>
							<Typography color="#323232" fontSize={['14px', '20px']} fontWeight={900}>
								{data.away_name}
							</Typography>
						</Stack>
					</Grid>
				</Grid>
				<Grid justifyContent="center" container>
					{combinedMatches.slice(0, homeIndex + awayIndex).map((item, index) => {
						const { match } = item
						const isHomeColumn = index % 2 === 0
						const teamData = getTeamData(match, isHomeColumn)

						return (
							<Grid key={index} item xs={6} p={0.625}>
								<FormScoreCard
									homeTeamName={teamData.teamName}
									isFirst={index === 0 || index === 1}
									homeTeamImg={teamData.teamImg}
									awayTeamName={teamData.opponentName}
									awayTeamImg={teamData.opponentImg}
									homeTeamCorner={teamData.teamCorner}
									awayTeamCorner={teamData.opponentCorner}
									homeTeamGoal={teamData.teamGoal}
									awayTeamGoal={teamData.opponentGoal}
									homeTeamCard={teamData.teamCard}
									awayTeamCard={teamData.opponentCard}
									outcome={teamData.outcome}
									date={teamData.date}
								/>
							</Grid>
						)
					})}
				</Grid>
			</Stack>
			<Stack display={['flex', 'none']} direction="column" gap={2}>
				<Stack direction="column" alignItems="center">
					<Box
						component="img"
						height="50px"
						src={`https://cdn.footystats.org/img/${data.home_image}`}
					/>
					<Typography color="#323232" fontSize={['20px', '22px']} fontWeight={900}>
						{data.home_name}
					</Typography>
					{combinedMatches
						.slice(0, homeIndex + awayIndex)
						.filter((_, index) => index % 2 === 0)
						.map((item, index) => {
							const { match } = item
							const teamData = getTeamData(match, true)

							return (
								<Stack width="100%" p={1.25} key={index}>
									<FormScoreCard
										isFirst={index === 0}
										homeTeamName={teamData.teamName}
										homeTeamImg={teamData.teamImg}
										awayTeamName={teamData.opponentName}
										awayTeamImg={teamData.opponentImg}
										homeTeamCorner={teamData.teamCorner}
										awayTeamCorner={teamData.opponentCorner}
										homeTeamGoal={teamData.teamGoal}
										awayTeamGoal={teamData.opponentGoal}
										homeTeamCard={teamData.teamCard}
										awayTeamCard={teamData.opponentCard}
										outcome={teamData.outcome}
										date={teamData.date}
									/>
								</Stack>
							)
						})}
				</Stack>

				<Stack direction="column" alignItems="center">
					<Box
						component="img"
						height="50px"
						src={`https://cdn.footystats.org/img/${data.away_image}`}
					/>
					<Typography color="#323232" fontSize={['20px', '22px']} fontWeight={900}>
						{data.away_name}
					</Typography>
					{combinedMatches
						.slice(0, homeIndex + awayIndex)
						.filter((_, index) => index % 2 !== 0)
						.map((item, index) => {
							const { match } = item
							const teamData = getTeamData(match, false)

							return (
								<Stack width="100%" p={1.25} key={index}>
									<FormScoreCard
										isFirst={index === 0}
										homeTeamName={teamData.teamName}
										homeTeamImg={teamData.teamImg}
										awayTeamName={teamData.opponentName}
										awayTeamImg={teamData.opponentImg}
										homeTeamCorner={teamData.teamCorner}
										awayTeamCorner={teamData.opponentCorner}
										homeTeamGoal={teamData.teamGoal}
										awayTeamGoal={teamData.opponentGoal}
										homeTeamCard={teamData.teamCard}
										awayTeamCard={teamData.opponentCard}
										outcome={teamData.outcome}
										date={teamData.date}
									/>
								</Stack>
							)
						})}
				</Stack>
			</Stack>
		</Stack>
	)
}
