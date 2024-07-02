import { Box, Grid, Stack } from '@mui/material'
import { ShirtCard } from 'components/cards/shirt-card'

export const Formation = () => {
	return (
		<Box
			height="400px"
			sx={{
				background: 'url(src/assets/svgs/playground.svg) no-repeat 50% 50%',
				backgroundSize: '100% auto'
			}}>
			<Grid columns={10} container spacing={1.5}>
				<Grid mt={-2} item xs={1}>
					<Stack direction="column" height="400px" justifyContent="space-around">
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
					</Stack>
				</Grid>
				<Grid mt={-2} item xs={1}>
					<Stack direction="column" height="400px" justifyContent="space-around">
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
					</Stack>
				</Grid>
				<Grid mt={-2} item xs={1}>
					<Stack direction="column" height="400px" justifyContent="space-around">
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
					</Stack>
				</Grid>
				<Grid mt={-2} item xs={1}>
					<Stack direction="column" height="400px" justifyContent="space-around">
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
					</Stack>
				</Grid>
				<Grid mt={-2} item xs={1}>
					<Stack direction="column" height="400px" justifyContent="space-around">
						<ShirtCard number={1} shirtNumber={10} shirtColor="yellow" rating={7.4} name="Messi" />
					</Stack>
				</Grid>

				<Grid mt={-2} item xs={1}>
					<Stack direction="column" height="400px" justifyContent="space-around">
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
					</Stack>
				</Grid>
				<Grid mt={-2} item xs={1}>
					<Stack direction="column" height="400px" justifyContent="space-around">
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
					</Stack>
				</Grid>
				<Grid mt={-2} item xs={1}>
					<Stack direction="column" height="400px" justifyContent="space-around">
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
					</Stack>
				</Grid>
				<Grid mt={-2} item xs={1}>
					<Stack direction="column" height="400px" justifyContent="space-around">
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
					</Stack>
				</Grid>
				<Grid mt={-2} item xs={1}>
					<Stack direction="column" height="400px" justifyContent="space-around">
						<ShirtCard number={1} shirtNumber={10} shirtColor="black" rating={7.4} name="Messi" />
					</Stack>
				</Grid>
			</Grid>
		</Box>
	)
}
