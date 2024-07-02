import { Box, Stack, Typography, useTheme, Card, CardContent, Grid } from '@mui/material'

interface PlayerCardProps {
	shirtNumber: number
	nationality: string
	position: string
	name: string
	age: number
	weight: number
	height: number
}

export const PlayerCard = ({
	shirtNumber,
	nationality,
	position,
	name,
	age,
	weight,
	height
}: PlayerCardProps) => {
	const theme = useTheme()

	return (
		<Card sx={{ width: 220, height: 140, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
			<CardContent>
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Stack direction="row" alignItems="center" spacing={1}>
							<Box
								sx={{
									height: 28,
									width: 28,
									borderRadius: '50%',
									border: `1px solid ${theme.palette.divider}`,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									backgroundColor: theme.palette.background.paper,
									boxShadow: '0px 1px 3px rgba(0,0,0,0.1)'
								}}>
								<Typography variant="caption" fontWeight="bold">
									{shirtNumber}
								</Typography>
							</Box>
							<Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
								<Typography variant="subtitle2" noWrap>
									{name}
								</Typography>
								<Typography variant="caption" color="text.secondary" noWrap>
									{position}
								</Typography>
								<Typography variant="caption" sx={{ display: 'block', mt: 0.5 }} noWrap>
									{nationality}
								</Typography>
							</Box>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack direction="row" justifyContent="space-between" spacing={0}>
							<Typography variant="caption">Age: {age}</Typography>
							<Typography variant="caption">Wt: {weight} kg</Typography>
							<Typography variant="caption">Ht: {height} cm</Typography>
						</Stack>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	)
}
