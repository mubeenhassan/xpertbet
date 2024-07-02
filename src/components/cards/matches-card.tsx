import { Box, Stack, Typography } from '@mui/material'
import { showTextEllipsis } from 'utils/string'

interface MatchCardProps {
	homeTeamName: string
	homeTeamImg: string
	awayTeamName: string
	awayTeamImg: string
	date: string
	homeTeamCorner: number
	awayTeamCorner: number
	homeTeamGoal: number
	awayTeamGoal: number
	homeTeamCard: number
	awayTeamCard: number
}

export const MatchCard = ({
	homeTeamName,
	homeTeamImg,
	awayTeamName,
	awayTeamImg,
	date,
	homeTeamCorner,
	awayTeamCorner,
	homeTeamGoal,
	awayTeamGoal,
	homeTeamCard,
	awayTeamCard
}: MatchCardProps) => {
	return (
		<Stack width={['300px', '350px']} direction="column" gap={0.25}>
			<Stack
				py={0.5}
				bgcolor="#f1f1f1"
				direction="row"
				width="100%"
				gap={0.25}
				justifyContent="center"
				alignItems="center">
				<Stack flex={1} direction="column" alignItems="center">
					<Box component="img" src={homeTeamImg} height={['32px', '40px']} />
					<Typography textAlign="center" fontSize={['12px', '14px']}>
						{showTextEllipsis(homeTeamName)}
					</Typography>
				</Stack>
				<Stack flex={1} direction="column" alignItems="center">
					<Typography textAlign="center" fontSize="10px">
						{date}
					</Typography>
					<Stack gap={3} direction="row" justifyContent="space-between" alignItems="center">
						<Typography color="#333333" fontSize={['30px', '36px']} fontWeight={900}>
							{homeTeamGoal}
						</Typography>
						<Typography color="#333333" fontSize={['30px', '36px']} fontWeight={900}>
							{awayTeamGoal}
						</Typography>
					</Stack>
				</Stack>
				<Stack flex={1} direction="column" alignItems="center">
					<Box component="img" src={awayTeamImg} height={['32px', '40px']} />
					<Typography textAlign="center" fontSize={['12px', '14px']}>
						{showTextEllipsis(awayTeamName)}
					</Typography>
				</Stack>
			</Stack>

			<Stack
				alignItems="center"
				gap={7.5}
				width="100%"
				justifyContent="center"
				direction="row"
				bgcolor="#231f20"
				color="white">
				<Typography textAlign="right" flex={1} fontWeight={900} color="white" fontSize="22px">
					{homeTeamCorner}
				</Typography>
				<Typography flex={1} textTransform="uppercase" fontSize="16px">
					Cornere
				</Typography>
				<Typography flex={1} fontWeight={900} color="white" fontSize="22px">
					{awayTeamCorner}
				</Typography>
			</Stack>

			<Stack
				alignItems="center"
				justifyContent="center"
				direction="row"
				width="100%"
				bgcolor="#fdb913"
				gap={1.25}
				color="white">
				<Typography textAlign="right" flex={1} fontWeight={900} color="#333333" fontSize="22px">
					{homeTeamCard}
				</Typography>
				<Typography
					whiteSpace="nowrap"
					color="#333333"
					flex={1}
					textTransform="uppercase"
					fontSize="16px">
					CARTONAȘE GALBENE
				</Typography>
				<Typography flex={1} fontWeight={900} color="#333333" fontSize="22px">
					{awayTeamCard}
				</Typography>
			</Stack>
		</Stack>
	)
}
