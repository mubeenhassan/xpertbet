import { useState } from 'react'

import { Stack } from '@mui/material'
import { TeamOneIcon } from 'assets/icons'
import { StandingsItem, StandingsTable } from 'components/app/table'
import Tabs from 'components/app/tabs'
import { SectionHeading } from 'components/section-heading'

export const StandingSection = (data: any) => {
	const [selectedVenue, setSelectedVenue] = useState(0)
	const [selectedLeague, setSelectedLeague] = useState(0)

	const testData: StandingsItem[] = [
		{
			id: 1,
			team: 'Arsenal',
			teamLogo: TeamOneIcon,
			mp: 18,
			w: 12,
			d: 3,
			l: 3,
			g: '42:13',
			pts: 39,
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
			],
			ppg: 2.75,
			btts: '33%',
			cardStat: 1.5,
			lineStat: 6.6,
			1.5: '67%',
			2.5: '56%',
			avgg: 3.06
		}
	]

	return (
		<Stack px={4} pt={4} direction="column" gap={4}>
			<SectionHeading title="STANDINGS" />
			<Stack direction="row" justifyContent="space-between">
				<Stack direction="row">
					<Tabs
						items={['Standaings', 'Form', 'Progress']}
						selectedItem={selectedVenue}
						onChange={(item: number) => setSelectedVenue(item)}
					/>
				</Stack>
				<Stack direction="row">
					<Tabs
						items={['Overall', 'Home', 'Away']}
						selectedItem={selectedLeague}
						onChange={(item: number) => setSelectedLeague(item)}
					/>
				</Stack>
			</Stack>{' '}
			<StandingsTable
				items={[
					...testData,
					...testData,
					...testData,
					...testData,
					...testData,
					...testData,
					...testData,
					...testData,
					...testData,
					...testData,
					...testData,
					...testData
				]}
			/>
		</Stack>
	)
}
