import { Box, Grid, Stack, Typography, useTheme } from '@mui/material'

const TrendCard = ({ trend, image }: any) => {
	const trendType = trend[0]
	let trendColor = ''
	let trendIcon = ''

	switch (trendType) {
		case 'great':
			trendColor = 'green'
			trendIcon = '+'
			break
		case 'bad':
			trendColor = 'red'
			trendIcon = '-'
			break
		case 'chart':
			trendColor = 'blue'
			trendIcon = '📈'
			break
		default:
			trendColor = 'black'
			trendIcon = ''
			break
	}

	return (
		<Stack
			direction="row"
			gap={1}
			p={1}
			pb={2.5}
			bgcolor="#f3f3f3"
			width="100%"
			alignItems="flex-start"
			position="relative">
			<Stack
				p={0.25}
				justifyContent="center"
				alignItems="center"
				bgcolor="white"
				borderRadius="100%">
				<Box
					component="img"
					flexShrink={0}
					height="24px"
					width="24px"
					src={`https://cdn.footystats.org/img/${image}`}
				/>
			</Stack>
			<Typography
				fontSize={['12px', '14px']}
				lineHeight={1.2}
				textAlign="justify"
				component="p">{`${trendIcon} ${trend[1]}`}</Typography>
			<Box
				bgcolor={trendType === 'great' ? '#0cae00' : trendType === 'bad' ? '#ae0000' : '#b0afaf'}
				position="absolute"
				bottom={0}
				right={0}
				width="50%"
				height="6px"
				sx={{ borderTopLeftRadius: '12px' }}
			/>
		</Stack>
	)
}

const TrendsDisplay = ({ data }: any) => {
	const theme = useTheme()
	const homeTrends = data?.trends?.home
	const awayTrends = data?.trends?.away

	const renderTrends = (trends: any, image: string) => {
		const generalTrends = trends?.filter((trend: any) => trend[0] === 'chart') ?? []
		const goodTrends = trends?.filter((trend: any) => trend[0] === 'great') ?? []
		const badTrends = trends?.filter((trend: any) => trend[0] === 'bad') ?? []

		const allTrends = [...generalTrends, ...goodTrends, ...badTrends]

		return allTrends.map((trend: any, index: any) => (
			<TrendCard key={index} image={image} trend={trend} />
		))
	}

	return (
		<Stack direction="column" gap={2} id="trends">
			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				textTransform="uppercase"
				color={theme.heading}
				fontSize="30px">
				Trends
			</Typography>

			<Grid container justifyContent="center" spacing={4}>
				<Grid item xs={12} md={5}>
					<Stack direction="column" alignItems="center" spacing={2} justifyContent="center">
						<Typography fontWeight={900} variant="h6" align="center" gutterBottom>
							{data?.home_name}
						</Typography>
						{renderTrends(homeTrends, data?.home_image)}
					</Stack>
				</Grid>
				<Grid item xs={12} md={5}>
					<Stack direction="column" alignItems="center" spacing={2} justifyContent="center">
						<Typography fontWeight={900} variant="h6" align="center" gutterBottom>
							{data?.away_name}
						</Typography>
						{renderTrends(awayTrends, data?.away_image)}
					</Stack>
				</Grid>
			</Grid>
		</Stack>
	)
}

export default TrendsDisplay
