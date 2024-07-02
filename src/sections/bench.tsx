// LineupsSection.jsx

import { Grid, Stack, Typography, useTheme } from '@mui/material'
import { PlayerCard } from 'components/cards/player-card'
import { SectionHeading } from 'components/section-heading'
import { useEffect, useState } from 'react'
import playersService from 'services/player-service'

export const BenchSection = ({ data }: any) => {
	const theme = useTheme()
	const [homePlayers, setHomePlayers] = useState<any[]>([])
	const [awayPlayers, setAwayPlayers] = useState<any[]>([])

	useEffect(() => {
		const fetchPlayerData = async () => {
			if (data?.bench?.team_a) {
				const homePlayerData = await Promise.all(
					data.bench.team_a
						.filter((player: any) => player.player_out_id === -1)
						.map(async (player: any) => {
							const playerData = await playersService.getPlayersByID(player.player_in_id)
							const relevantData = playerData?.player?.data?.find(
								(p: any) => p.competition_id === data.competition_id
							)
							return relevantData ? { ...player, ...relevantData } : null
						})
				)
				setHomePlayers(homePlayerData)
			}

			if (data?.bench?.team_b) {
				const awayPlayerData = await Promise.all(
					data.bench.team_b
						.filter((player: any) => player.player_out_id === -1)
						.map(async (player: any) => {
							const playerData = await playersService.getPlayersByID(player.player_in_id)
							const relevantData = playerData?.player?.data?.find(
								(p: any) => p.competition_id === data.competition_id
							)
							return relevantData ? { ...player, ...relevantData } : null
						})
				)
				setAwayPlayers(awayPlayerData)
			}
		}

		fetchPlayerData()
	}, [data])

	return (
		<Stack px={4} direction="column" gap={4}>
			<Typography
				color={theme.text}
				textAlign="center"
				fontWeight="900"
				component="h3"
				textTransform="uppercase">
				Bench
			</Typography>
			<Grid container spacing={20} justifyContent="space-between">
				<Grid item xs={12} md={6}>
					<Grid container spacing={1}>
						{homePlayers.length === 0 ? (
							<Typography variant="body1" textAlign="center">
								No bench info available for home team
							</Typography>
						) : (
							homePlayers.map((player, index) => (
								<Grid item xs={6} sm={4} key={`home-${index}`}>
									<PlayerCard
										name={player.full_name}
										shirtNumber={player.player_in_shirt_number}
										position={player.position}
										nationality={player.nationality}
										age={player.age}
										weight={player.weight}
										height={player.height}
									/>
								</Grid>
							))
						)}
					</Grid>
				</Grid>
				<Grid item xs={12} md={6}>
					<Grid container spacing={1}>
						{awayPlayers.length === 0 ? (
							<Typography variant="body1" textAlign="center">
								No bench info available for away team
							</Typography>
						) : (
							awayPlayers.map((player, index) => (
								<Grid item xs={6} sm={4} key={`away-${index}`}>
									<PlayerCard
										name={player.full_name}
										shirtNumber={player.player_in_shirt_number}
										position={player.position}
										nationality={player.nationality}
										age={player.age}
										weight={player.weight}
										height={player.height}
									/>
								</Grid>
							))
						)}
					</Grid>
				</Grid>
			</Grid>
		</Stack>
	)
}
