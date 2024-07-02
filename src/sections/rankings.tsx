import { Grid, Stack, Typography, useTheme } from '@mui/material'
import { AcasaTable, GeneralTable } from 'components/app/table'

export const RankingsSection = ({ data, leagueTeams }: any) => {
	const theme = useTheme()

	return (
		<Stack id="rankings" px={[0, 4]} direction="column" gap={[2, 4]}>
			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				mt={1}
				textTransform="uppercase"
				color={theme.heading}
				fontSize={['20px', '30px']}>
				Clasament
			</Typography>

			<Grid mt={[0, -2]} container gap={2}>
				<Grid xs={12} md={5.9}>
					<GeneralTable
						showAwayTeamColor
						showHomeTeamColor
						title="GENERAL"
						data={leagueTeams}
						homeTeam={data.home_name}
						awayTeam={data.away_name}
					/>
				</Grid>
				<Grid xs={5.7} md={2.85}>
					<AcasaTable
						showHomeTeamColor
						title="ACASA"
						data={leagueTeams}
						homeTeam={data.home_name}
						awayTeam={data.away_name}
						sortOn="seasonPPG_home"
					/>
				</Grid>
				<Grid xs={5.7} md={2.85}>
					<AcasaTable
						showAwayTeamColor
						title="DEPLASARE"
						data={leagueTeams}
						homeTeam={data.home_name}
						awayTeam={data.away_name}
						sortOn="seasonPPG_away"
					/>
				</Grid>
			</Grid>
		</Stack>
	)
}
