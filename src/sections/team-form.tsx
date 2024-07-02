import { Box, Stack, Typography, useTheme } from '@mui/material'
import { TeamOneIcon, TeamTwoIcon } from 'assets/icons'
import { SectionHeading } from 'components/section-heading'

export const TeamForm = (data: any) => {
	const theme = useTheme()
	return (
		<Stack px={4} pt={4} direction="column" gap={4}>
			<SectionHeading title="Team Form" />
			<Stack direction="row" gap={4} justifyContent="space-between" alignItems="center">
				<Box component="img" src={TeamOneIcon} />
				<Stack position="relative" flex={1} direction="row" justifyContent="space-between">
					<Stack direction="row" gap={1} alignItems="flex-end">
						<Box p={0.5}>
							<Typography padding="5px 8px" fontSize="20px" bgcolor={theme.success} color="white">
								0.00
							</Typography>
						</Box>
						<Typography color={theme.text} fontSize="12px">
							0.33 (+0%) total
						</Typography>
					</Stack>
					<Stack direction="row" gap={1} alignItems="flex-end">
						<Typography color={theme.text} fontSize="12px">
							0.67 (+0%) total
						</Typography>
						<Box p={0.5}>
							<Typography padding="5px 8px" fontSize="20px" bgcolor="#F29200" color="white">
								0.00
							</Typography>
						</Box>
					</Stack>
					<Stack
						direction="row"
						width="100%"
						position="absolute"
						bottom={0}
						sx={{ transform: 'translateY(15px)' }}
						height="4px">
						<Box width="50%" bgcolor={theme.success} height="4px" />
						<Box
							bgcolor={theme.success}
							sx={{ height: '25px', width: '2px', transform: 'translateY(-22px)' }}
						/>
						<Box width="50%" bgcolor="#F29200" height="4px" />
					</Stack>
					<Box
						component="img"
						src={TeamOneIcon}
						position="absolute"
						left="49%"
						sx={{ height: '25px', width: '25px', transform: 'translateY(15px)' }}
					/>
				</Stack>
				<Box component="img" src={TeamTwoIcon} />
			</Stack>
		</Stack>
	)
}
