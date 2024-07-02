import { useState } from 'react'
import { Stack } from '@mui/material'
import { LeagueStandingsTable } from 'components/app/table'

export const LeagueStandings = ({ leagueTable }: any) => {

	return (
		<Stack px={4} pt={4} direction="column" gap={4}>
			<LeagueStandingsTable data={leagueTable} />
		</Stack>
	)
}
