import { Box, Stack, useTheme } from '@mui/material'
import { CarabaoClubIcon, ClubICon, FaCupIcon, FootballIcon } from 'assets/icons'

import { CupSituationTable } from 'components/app/table'
import { SectionHeading } from 'components/section-heading'

export const CupSituationSection = (data: any) => {
	const theme = useTheme()
	return (
		<Stack px={4} pt={4} direction="column" gap={4}>
			<SectionHeading title="Cup Station" />
			<Stack direction="row" gap={4}>
				<Box width="100%">
					<CupSituationTable
						heading="Competitions"
						items={[
							{
								icon: FootballIcon,
								name: 'Club Friendlies',
								label: 'Club Friendlies 1',
								borderColor: '1.5px solid black'
							},
							{
								icon: CarabaoClubIcon,
								name: 'Carabao Cup',
								label: 'Quarter-finals',
								borderColor: '1.5px solid black'
							},
							{
								icon: FaCupIcon,
								name: 'FA Cup',
								label: '3rd Round Replays',
								borderColor: '1.5px solid black'
							},
							{
								icon: ClubICon,
								name: 'Club Friendlies 3',
								label: 'Club Friendlies 3',
								borderColor: '1.5px solid black'
							}
						]}
					/>
				</Box>
				<Box width="100%">
					<CupSituationTable
						heading="Competitions"
						items={[
							{
								icon: FootballIcon,
								name: 'Club Friendlies',
								label: 'No data',
								borderColor: `1.5px solid ${theme.warning}`
							},
							{
								icon: CarabaoClubIcon,
								name: 'Carabao Cup',
								label: 'Eliminated',
								borderColor: `1.5px solid ${theme.error}`
							},
							{
								icon: FaCupIcon,
								name: 'FA Cup',
								label: 'Eliminated',
								borderColor: `1.5px solid ${theme.error}`
							},
							{
								icon: ClubICon,
								name: 'Club Friendlies 3',
								label: 'Eliminated',
								borderColor: `1.5px solid ${theme.error}`
							}
						]}
					/>
				</Box>
			</Stack>
		</Stack>
	)
}
