import { Stack, Typography } from '@mui/material'

interface SectionHeadingProps {
	title: string
	size?: number
}

export const SectionHeading = ({ title, size = 12 }: SectionHeadingProps) => {
	return (
		<Stack
			direction="row"
			justifyContent="center"
			sx={{
				background: 'url(src/assets/pngs/heading-background.png)',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center'
			}}>
			<Typography component="h3" fontSize={`${size}px`} color="white" textTransform="uppercase">
				{title}
			</Typography>
		</Stack>
	)
}
