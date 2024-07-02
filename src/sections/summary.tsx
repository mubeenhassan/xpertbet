import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { Box, Divider, Grid, Stack, Typography, useTheme } from '@mui/material'
import { TeamOneIcon, TeamTwoIcon } from 'assets/icons'
import { MultiProgress, Progress } from 'components/app/progress'

export const Summary = (data: any) => {
	const theme = useTheme()
	return (
		<Grid container pt={4} spacing={6} columns={3} px={4} gap={2}>
			<Grid display="flex" direction="column" rowGap={2} item xs={1}>
				<Stack mb={1} direction="row" justifyContent="space-between">
					<Box sx={{ height: '25px', width: '25px' }} component="img" src={TeamOneIcon} />
					<Typography
						fontSize="13px"
						fontWeight="bold"
						component="h5"
						textTransform="uppercase"
						color={theme.text}>
						Summary
					</Typography>
					<Box sx={{ height: '25px', width: '25px' }} component="img" src={TeamTwoIcon} />
				</Stack>
				<Stack direction="column">
					<Stack direction="row" justifyContent="space-between">
						<RemoveCircleOutlineIcon sx={{ color: '#F2932B' }} />
						<Typography color="" fontSize="11px">
							H2H
						</Typography>
						<RemoveCircleOutlineIcon sx={{ color: '#F2932B' }} />
					</Stack>
					<Progress stat={2} />
				</Stack>

				<Stack direction="column">
					<Stack direction="row" justifyContent="space-between">
						<RemoveCircleOutlineIcon sx={{ color: '#F2932B' }} />
						<Typography color="" fontSize="11px">
							H2H(HOME/AWAY)
						</Typography>
						<RemoveCircleOutlineIcon sx={{ color: '#F2932B' }} />
					</Stack>
					<Progress stat={1} />
				</Stack>

				<Stack direction="column" gap={0.5}>
					<Stack direction="row" justifyContent="space-between">
						<CancelOutlinedIcon sx={{ color: theme.error }} />
						<Typography color="" fontSize="11px">
							FORM
						</Typography>
						<CheckCircleOutlineIcon sx={{ color: theme.success }} />
					</Stack>
					<MultiProgress statOne={0.33} statTwo={0.67} />
				</Stack>

				<Stack direction="column" gap={0.5}>
					<Stack direction="row" justifyContent="space-between">
						<CancelOutlinedIcon sx={{ color: theme.error }} />
						<Typography color="" fontSize="11px">
							FORM(HOME/AWAY)
						</Typography>
						<CheckCircleOutlineIcon sx={{ color: theme.success }} />
					</Stack>
					<MultiProgress statOne={0.83} statTwo={0.17} />
				</Stack>
			</Grid>

			<Grid pt={4} display="flex" direction="column" rowGap={2} pl={6} xs={1}>
				<Stack bgcolor={theme.background}>
					<Stack p={2} mb={1} direction="row" justifyContent="space-between">
						<Box sx={{ height: '25px', width: '25px' }} component="img" src={TeamOneIcon} />
						<Typography
							fontSize="13px"
							fontWeight="bold"
							component="h5"
							textTransform="uppercase"
							color={theme.text}>
							Team Strength
						</Typography>
						<Box sx={{ height: '25px', width: '25px' }} component="img" src={TeamTwoIcon} />
					</Stack>

					<Divider sx={{ borderColor: 'white', borderWidth: '1px' }} />
					<Stack p={2} direction="column" gap={0.5}>
						<Stack direction="row" justifyContent="space-between" alignItems="center">
							<Typography color={theme.text} fontWeight="bold" fontSize="10px">
								66%
							</Typography>
							<Stack direction="row" alignItems="center" gap="1px">
								<CancelOutlinedIcon sx={{ color: theme.error }} />
								<Typography
									textAlign="center"
									textTransform="uppercase"
									color={theme.text}
									fontSize="10px">
									AVG. Minutes played (Last 6)
								</Typography>
								<CheckCircleOutlineIcon sx={{ color: theme.success }} />
							</Stack>
							<Typography color={theme.text} fontWeight="bold" fontSize="10px">
								70%
							</Typography>
						</Stack>
					</Stack>

					<Divider sx={{ borderColor: 'white', borderWidth: '1px' }} />
					<Stack p={2} direction="column" gap={0.5}>
						<Stack direction="row" justifyContent="space-between" alignItems="center">
							<Typography color={theme.text} fontWeight="bold" fontSize="10px">
								3
							</Typography>
							<Stack direction="row" alignItems="center" gap="1px">
								<CancelOutlinedIcon sx={{ color: theme.error }} />
								<Typography
									textAlign="center"
									textTransform="uppercase"
									color={theme.text}
									fontSize="10px">
									Changes (VS. Last Game)
								</Typography>
								<CheckCircleOutlineIcon sx={{ color: theme.success }} />
							</Stack>
							<Typography color={theme.text} fontWeight="bold" fontSize="10px">
								1
							</Typography>
						</Stack>
					</Stack>

					<Divider sx={{ borderColor: 'white', borderWidth: '1px' }} />
					<Stack p={2} direction="column" gap={0.5}>
						<Stack direction="row" justifyContent="space-between" alignItems="center">
							<Typography color={theme.text} fontWeight="bold" fontSize="10px">
								0
							</Typography>
							<Stack direction="row" alignItems="center" gap="1px">
								<CancelOutlinedIcon sx={{ color: theme.error }} />
								<Typography
									textAlign="center"
									textTransform="uppercase"
									color={theme.text}
									fontSize="10px">
									Fresh Important Missings
								</Typography>
								<CheckCircleOutlineIcon sx={{ color: theme.success }} />
							</Stack>
							<Typography color={theme.text} fontWeight="bold" fontSize="10px">
								1
							</Typography>
						</Stack>
					</Stack>

					<Divider sx={{ borderColor: 'white', borderWidth: '1px' }} />
					<Stack p={2} direction="column" gap={0.5}>
						<Stack direction="row" justifyContent="space-between" alignItems="center">
							<Typography color={theme.text} fontWeight="bold" fontSize="10px">
								2
							</Typography>
							<Stack direction="row" alignItems="center" gap="1px">
								<CancelOutlinedIcon sx={{ color: theme.error }} />
								<Typography
									textAlign="center"
									textTransform="uppercase"
									color={theme.text}
									fontSize="10px">
									Missings
								</Typography>
								<CheckCircleOutlineIcon sx={{ color: theme.success }} />
							</Stack>
							<Typography color={theme.text} fontWeight="bold" fontSize="10px">
								4
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Grid>
		</Grid>
	)
}
