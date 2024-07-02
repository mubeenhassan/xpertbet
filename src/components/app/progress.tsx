import { Stack, Typography, useTheme } from '@mui/material'

interface ProgressProps {
	stat: number
}

export const Progress = ({ stat }: ProgressProps) => {
	const theme = useTheme()
	return (
		<Stack
			direction="row"
			justifyContent="flex-end"
			bgcolor={theme.gray}
			py="1px"
			px={1.25}
			sx={{ transform: 'skewX(-20deg)' }}>
			<Typography sx={{ transform: 'skewX(20deg)' }} fontSize="10px" color="white">
				{stat}
			</Typography>
		</Stack>
	)
}

interface MultiProgressProps {
	statOne: number
	statTwo: number
}

export const MultiProgress = ({ statOne, statTwo }: MultiProgressProps) => {
	const theme = useTheme()
	return (
		<Stack direction="row" gap="1px">
			<Stack
				direction="row"
				width={`${statOne * 100}%`}
				bgcolor={theme.error}
				py="1px"
				px={1.25}
				sx={{ transform: 'skewX(-20deg)' }}>
				<Typography sx={{ transform: 'skewX(20deg)' }} fontSize="10px" color="white">
					{statOne}
				</Typography>
			</Stack>
			<Stack
				direction="row"
				width={`${statTwo * 100}%`}
				bgcolor={theme.secondary}
				py="1px"
				px={1.25}
				sx={{ transform: 'skewX(-20deg)' }}>
				<Typography sx={{ transform: 'skewX(20deg)' }} fontSize="10px" color="white">
					{statTwo}
				</Typography>
			</Stack>
		</Stack>
	)
}
