import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'
import { MatchCard } from 'components/cards/matches-card'
import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'
import matchesService from 'services/match-service'

export const HeadToHead = ({ data }: any) => {
	const theme = useTheme()
	const [matchDetails, setMatchDetails] = useState<MatchDetails[]>([])

	const fetchMatchDetails = async (matches: any) => {
		const details: MatchDetails[] = []

		for (const match of matches) {
			if (details.length >= 5) break
			try {
				const response = await matchesService.getMatchDetails(match.id)
				details.push({
					...match,
					team_a_corners: response.match.data.team_a_corners,
					team_b_corners: response.match.data.team_b_corners,
					team_a_yellow_cards: response.match.data.team_a_yellow_cards,
					team_b_yellow_cards: response.match.data.team_b_yellow_cards
				})
			} catch (error) {
				console.error(`Failed to fetch details for match ${match.id}`, error)
			}
		}

		setMatchDetails(details)
	}

	useEffect(() => {
		if (data?.h2h?.previous_matches_ids) {
			fetchMatchDetails(data.h2h.previous_matches_ids)
		}
	}, [data])

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 2600, min: 2400 },
			items: 6
		},
		LargeDesktop: {
			breakpoint: { max: 2400, min: 2200 },
			items: 5.5
		},
		desktop: {
			breakpoint: { max: 2200, min: 2000 },
			items: 5
		},
		smallDesktop: {
			breakpoint: { max: 2000, min: 1800 },
			items: 4.5
		},
		laptop: {
			breakpoint: { max: 1800, min: 1600 },
			items: 4
		},
		largeTablet: {
			breakpoint: { max: 1600, min: 1400 },
			items: 3.5
		},
		tablet: {
			breakpoint: { max: 1400, min: 1200 },
			items: 3.25
		},
		largeMobile: {
			breakpoint: { max: 1200, min: 1000 },
			items: 2.5
		},
		mediumTablet: {
			breakpoint: { max: 1000, min: 800 },
			items: 2
		},
		smallTablet: {
			breakpoint: { max: 800, min: 650 },
			items: 1.5
		},
		mediumMobile: {
			breakpoint: { max: 650, min: 500 },
			items: 1
		},
		smallMobile: {
			breakpoint: { max: 500, min: 400 },
			items: 1
		},
		mobile: {
			breakpoint: { max: 400, min: 200 },
			items: 1
		}
	}

	const testMatches = Array.from({ length: 10 }, (_, i) => ({
		id: i,
		team_a_id: i % 2 === 0 ? data?.homeID : 'awayID',
		team_b_id: i % 2 !== 0 ? data?.homeID : 'awayID',
		team_a_goals: Math.floor(Math.random() * 5),
		team_b_goals: Math.floor(Math.random() * 5),
		date_unix: Math.floor(Date.now() / 1000) - i * 86400
	}))

	return (
		<Stack id="h2h" px={[0, 4]} pt={[0, 4]} direction="column" gap={[2, 4]}>
			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				textTransform="uppercase"
				color={theme.heading}
				fontSize={['20px', '30px']}>
				Meciuri Directe
			</Typography>
			<Grid alignItems="baseline" container>
				<Grid xs={4} mt={2}>
					<Stack direction="column" alignItems="center">
						<Stack direction="row" gap={[0.5, 1]} alignItems="center">
							<Typography
								sx={{
									display: '-webkit-box',
									WebkitBoxOrient: 'vertical',
									WebkitLineClamp: '1'
								}}
								component="h5"
								fontWeight="bold"
								textOverflow="ellipsis"
								overflow="hidden"
								fontSize={['14px', '18px']}>
								{data.home_name}
							</Typography>
							<Box
								component="img"
								src={`https://cdn.footystats.org/img/${data.home_image}`}
								height={['16px', '24px']}
							/>
						</Stack>
						<Typography
							fontSize={['30px', '60px']}
							lineHeight={1}
							fontWeight="900"
							color="#007fc3"
							component="h1">
							{data?.h2h?.previous_matches_results?.team_a_win_percent}
							<Typography fontWeight="600" fontSize={['20px', '30px']} component="span">
								%
							</Typography>
						</Typography>
						<Typography fontSize={['10px', '12px']}>Procent Victorii</Typography>
					</Stack>
				</Grid>
				<Grid justifyContent="center" display="flex" xs={4}>
					<Stack direction="column" alignItems="center">
						<Typography fontSize={['14px', '20px']}>
							Total Meciuri:{data?.h2h?.previous_matches_results?.totalMatches}
						</Typography>
						<Typography
							fontWeight={900}
							component="h1"
							lineHeight={0.9}
							textAlign="center"
							textTransform="uppercase"
							color="#fdb913"
							fontSize={['30px', '60px']}>
							{100 -
								(data?.h2h?.previous_matches_results?.team_a_win_percent +
									data?.h2h?.previous_matches_results?.team_b_win_percent)}
							<Typography fontWeight="900" fontSize={['20px', '30px']} component="span">
								%
							</Typography>
						</Typography>
						<Typography display="flex" gap={0.75} alignItems="center" fontSize={['10px', '12px']}>
							Procent Egaluri
						</Typography>
					</Stack>
				</Grid>
				<Grid xs={4} mt={2}>
					<Stack direction="column" alignItems="center">
						<Stack direction="row" gap={1} alignItems="center">
							<Box
								component="img"
								src={`https://cdn.footystats.org/img/${data.away_image}`}
								height={['16px', '24px']}
							/>
							<Typography
								component="h5"
								sx={{
									display: '-webkit-box',
									WebkitBoxOrient: 'vertical',
									WebkitLineClamp: '1'
								}}
								overflow="hidden"
								fontWeight="bold"
								fontSize={['14px', '18px']}>
								{data.away_name}
							</Typography>
						</Stack>
						<Typography
							fontSize={['30px', '60px']}
							lineHeight={1}
							fontWeight="900"
							color="#dc271e"
							component="h1">
							{data?.h2h?.previous_matches_results?.team_b_win_percent}
							<Typography fontWeight="600" fontSize={['20px', '30px']} component="span">
								%
							</Typography>
						</Typography>
						<Typography fontSize={['10px', '12px']}>Procent Victorii</Typography>
					</Stack>
				</Grid>
			</Grid>
			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				mt={1}
				textTransform="uppercase"
				color={theme.heading}
				fontSize={['20px', '30px']}>
				Meciuri Directe Recente
			</Typography>
			<Carousel slidesToSlide={1} containerClass="mobile-slider" arrows responsive={responsive}>
				{matchDetails?.map((match: any) => (
					<MatchCard
						key={match.id}
						homeTeamName={match?.team_a_id === data?.homeID ? data?.home_name : data?.away_name}
						awayTeamName={match?.team_b_id === data?.homeID ? data?.home_name : data?.away_name}
						homeTeamGoal={match.team_a_goals}
						awayTeamGoal={match.team_b_goals}
						homeTeamCorner={match.team_a_corners}
						awayTeamCorner={match.team_b_corners}
						homeTeamCard={match.team_a_yellow_cards}
						awayTeamCard={match.team_b_yellow_cards}
						date={DateTime.fromSeconds(match.date_unix).setLocale('ro').toFormat('dd.LL.yyyy')}
						homeTeamImg={`https://cdn.footystats.org/img/${match?.team_a_id === data?.homeID ? data?.home_image : data?.away_image}`}
						awayTeamImg={`https://cdn.footystats.org/img/${match?.team_b_id === data?.homeID ? data?.home_image : data?.away_image}`}
					/>
				))}
			</Carousel>
		</Stack>
	)
}
