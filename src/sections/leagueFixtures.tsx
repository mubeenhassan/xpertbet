import { useState } from 'react'
import { Stack } from '@mui/material'
import { LeagueMatchesTable } from 'components/app/table'

export const LeagueFixtures = (matches: any) => {

	return (
		<Stack px={4} pt={4} direction="column" gap={4}>
			<LeagueMatchesTable matches={matches}/>
		</Stack>
	)
}
