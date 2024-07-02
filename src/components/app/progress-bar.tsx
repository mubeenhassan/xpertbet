import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'

function LinearProgressWithLabel(
	props: LinearProgressProps & {
		label: string
		progressBarColor: string
		maxValue: number
		isReverse?: boolean
	}
) {
	const scaledValue = ((props.value as number) / props.maxValue) * 100

	return (
		<Grid
			container
			display="flex"
			direction={props.isReverse ? 'row' : 'row-reverse'}
			alignItems="center"
			gap={[1, 2.5]}>
			<Grid xs={7}>
				<LinearProgress
					sx={{
						p: 1.25,
						background: '#f3f3f3',
						color: '#007FC3',
						rotate: props.isReverse ? '180deg' : '0deg',
						'& .MuiLinearProgress-bar': {
							backgroundColor: props.progressBarColor
						}
					}}
					variant="determinate"
					{...props}
					value={scaledValue}
				/>
			</Grid>
			<Grid
				xs={4}
				display="flex"
				direction={props.isReverse ? 'row' : 'row-reverse'}
				gap={[0.25, 1.25]}>
				<Typography fontSize={['12px', '14px']} fontWeight="bold">
					{props.value}
				</Typography>
				<Typography
					fontSize={['12px', '14px']}
					whiteSpace="nowrap"
					variant="body2"
					color="text.secondary">
					{props.label}
				</Typography>
			</Grid>
		</Grid>
	)
}

interface LinearProgressBarProps {
	progress: number
	progressBarColor: string
	label: string
	maxValue?: number
	isReverse?: boolean
}

export const LinearWithValueLabel = ({
	progress,
	progressBarColor,
	label,
	maxValue = 100,
	isReverse = false
}: LinearProgressBarProps) => {
	return (
		<Box sx={{ width: '100%' }}>
			<LinearProgressWithLabel
				isReverse={isReverse}
				progressBarColor={progressBarColor}
				label={label}
				maxValue={maxValue}
				value={progress}
			/>
		</Box>
	)
}

export const LinearProgressBar = ({
	progress,
	progressBarColor,
	maxValue = 100
}: Omit<LinearProgressBarProps, 'label'>) => {
	const calculatedProgress = progress > maxValue ? maxValue : progress
	const scaledValue = (calculatedProgress / maxValue) * 100
	return (
		<Box sx={{ width: '100%' }}>
			<LinearProgress
				sx={{
					p: 1,
					background: 'transparent',
					'& .MuiLinearProgress-bar': {
						backgroundColor: progressBarColor
					}
				}}
				variant="determinate"
				value={scaledValue}
			/>
		</Box>
	)
}

interface GoalContributionBarProps {
	progress: number
	progressBarColor: string
	maxValue?: number
}

export const GoalContributionBar: React.FC<Omit<GoalContributionBarProps, 'label'>> = ({
	progress,
	progressBarColor,
	maxValue = 100
}) => {
	const scaledValue = (progress / maxValue) * 100

	return (
		<Box sx={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center' }}>
			<Typography
				variant="body2"
				component="div"
				sx={{ position: 'absolute', left: 0, zIndex: 1, color: 'black', paddingLeft: 1 }}>
				{progress}
			</Typography>
			<LinearProgress
				sx={{
					flexGrow: 1,
					p: 1,
					background: 'transparent',
					height: 20,
					'& .MuiLinearProgress-bar': {
						backgroundColor: 'green'
					}
				}}
				variant="determinate"
				value={scaledValue}
			/>
			<Typography
				variant="body2"
				component="div"
				sx={{ position: 'absolute', right: 0, color: 'black', paddingRight: 1 }}>
				{maxValue}
			</Typography>
		</Box>
	)
}
