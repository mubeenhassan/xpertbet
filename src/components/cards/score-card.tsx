import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'
import { CornerIcon, GoalIcon, YellowCardIcon } from 'assets/icons'

interface ScoreCardProps {
	teamOneName: string
	teamOneImg: string
	teamTwoName: string
	teamTwoImg: string
	date: string
	score: string
}

export const ScoreCard = ({
	teamOneName,
	teamOneImg,
	teamTwoName,
	teamTwoImg,
	date,
	score
}: ScoreCardProps) => {
	const theme = useTheme()
	return (
		<Grid alignItems="center" px={[0, 10, 34]} container>
			<Grid alignItems="flex-end" xs={4}>
				<Stack alignItems="center" justifyContent="flex-end" direction="row" gap={[0.5, 1]}>
					<Typography
						lineHeight={1}
						textAlign="right"
						color={theme.text}
						fontSize={['16px', '22px']}>
						{teamOneName}
					</Typography>
					<Box component="img" src={teamOneImg} height={['30px', '40px']} />
				</Stack>
			</Grid>
			<Grid xs={4}>
				<Stack alignItems="center" direction="column">
					<Typography
						color={theme.text}
						fontWeight={600}
						lineHeight={2}
						fontSize={['14px', '20px']}>
						{date}
					</Typography>
					<Stack
						direction="row"
						px={[0.5, 1.5]}
						py={[0, 0.25]}
						justifyContent="center"
						bgcolor="#aeaeae"
						borderRadius="12px"
						alignItems="center">
						<Typography
							whiteSpace="nowrap"
							fontSize={['22px', '28px']}
							component="h5"
							color="black"
							fontWeight={900}>
							{score}
						</Typography>
					</Stack>
				</Stack>
			</Grid>
			<Grid xs={4}>
				<Stack alignItems="center" direction="row" gap={[0.5, 1]}>
					<Box component="img" src={teamTwoImg} height={['30px', '40px']} />
					<Typography lineHeight={1} color={theme.text} fontSize={['16px', '22px']}>
						{teamTwoName}
					</Typography>
				</Stack>
			</Grid>
		</Grid>
	)
}

interface FormScoreCardProps {
	homeTeamName: string
	homeTeamImg: string
	awayTeamName: string
	awayTeamImg: string
	homeTeamGoal: number
	awayTeamGoal: number
	homeTeamCorner: number
	awayTeamCorner: number
	homeTeamCard: number
	awayTeamCard: number
	date: string
	isFirst?: boolean
	outcome: 'win' | 'lose' | 'draw'
}

export const FormScoreCard = ({
	homeTeamName,
	homeTeamImg,
	awayTeamName,
	awayTeamImg,
	homeTeamCard,
	awayTeamCard,
	homeTeamCorner,
	awayTeamCorner,
	isFirst,
	homeTeamGoal,
	awayTeamGoal,
	date,
	outcome
}: FormScoreCardProps) => {
	return (
		<Stack direction="column" gap={0.5}>
			{isFirst && (
				<Stack direction="row" justifyContent="flex-end" gap={1.25}>
					<Box component="img" src={GoalIcon} height={20} />
					<Box component="img" src={CornerIcon} height={20} />
					<Box component="img" src={YellowCardIcon} height={20} />
				</Stack>
			)}
			<Stack gap={0.5} direction="row" justifyContent="center" alignItems="center">
				<Typography
					px={0}
					fontSize={['7px', '9px']}
					color="#231f20"
					sx={{ transform: 'rotate(-90deg)' }}>
					{date}
				</Typography>
				<Stack
					ml={[-1.75, -2.5]}
					flex={1}
					bgcolor={outcome === 'win' ? '#d3fcd1' : outcome === 'draw' ? '#fcf2d1' : '#fcd1d1'}
					direction="column"
					justifyContent="center"
					p={'3px'}
					gap={0.5}>
					<Stack direction="row" alignItems="center" gap={0.5}>
						<Box component="img" src={homeTeamImg} height={['16px', '20px']} />
						<Typography
							sx={{
								display: '-webkit-box',
								WebkitBoxOrient: 'vertical',
								WebkitLineClamp: '1'
							}}
							overflow="hidden"
							color="#231f20"
							fontSize={['12px', '14px']}>
							{homeTeamName}
						</Typography>
					</Stack>
					<Stack direction="row" alignItems="center" gap={0.5}>
						<Box component="img" src={awayTeamImg} height={['16px', '20px']} />
						<Typography
							sx={{
								display: '-webkit-box',
								WebkitBoxOrient: 'vertical',
								WebkitLineClamp: '1'
							}}
							overflow="hidden"
							color="#231f20"
							fontSize={['12px', '14px']}>
							{awayTeamName}
						</Typography>
					</Stack>
				</Stack>
				<Stack
					bgcolor={outcome === 'win' ? '#d3fcd1' : outcome === 'draw' ? '#fcf2d1' : '#fcd1d1'}
					direction="column"
					px={1}
					py={0.25}
					gap={0.5}>
					<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
						{homeTeamGoal}
					</Typography>
					<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
						{awayTeamGoal}
					</Typography>
				</Stack>
				<Stack
					bgcolor="#231f20"
					direction="column"
					alignItems="center"
					width={32}
					px={1}
					py={0.25}
					gap={0.5}>
					<Typography color="white" fontWeight={900} fontSize={['12px', '14px']}>
						{homeTeamCorner}
					</Typography>
					<Typography color="white" fontWeight={900} fontSize={['12px', '14px']}>
						{awayTeamCorner}
					</Typography>
				</Stack>
				<Stack bgcolor="#fdb913" direction="column" px={1} py={0.25} gap={0.5}>
					<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
						{homeTeamCard}
					</Typography>
					<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
						{awayTeamCard}
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	)
}
