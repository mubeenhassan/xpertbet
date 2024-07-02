import { useState } from 'react'
import { Stack } from '@mui/material'
import { TeamOneIcon } from 'assets/icons'
import { TopPlayerTable, LeagueStandingsItem } from 'components/app/table'

export const LeagueTopPlayers = (data: any) => {
	const testData: LeagueStandingsItem[] = [
		{
			id: 1,
			team: 'Arsenal',
			teamLogo: TeamOneIcon,
			mj: 18,
			v: 12,
			e: 3,
			t: 3,
			gm: '42:13',
			gp: 39,
			pct: 83,
			mg: 2.23,
			g: '28',
			gg: '42',
			mc: 7.28,
			c: '20',
			mcart: 6.28,
			form: [
				'#B9D36B',
				'#FAB108',
				'#C9C7C6',
				'#DE655A',
				'#B9D36B',
				'#FAB108',
				'#C9C7C6',
				'#DE655A',
				'#DE655A'
			]
		}
	]

	return (
		<Stack px={4} pt={4} direction="column" gap={4}>
			<TopPlayerTable items={[...testData, ...testData, ...testData, ...testData, ...testData]} />
		</Stack>
	)
}
