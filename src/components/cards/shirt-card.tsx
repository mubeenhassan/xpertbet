import { Box, Stack, Typography, useTheme } from '@mui/material'
import { ReactComponent as ShirtIcon } from 'assets/svgs/shirt.svg'

interface PlayerCardProps {
	shirtNumber: number
	shirtColor: string
	number: number
	rating: number
	name: string
}

export const ShirtCard = ({ shirtNumber, shirtColor, number, rating, name }: PlayerCardProps) => {
	const theme = useTheme()
	return (
		<Stack direction="column" alignItems="center">
			<Stack direction="row" justifyContent="center" alignItems="flex-end">
				<Typography px={0.25} color={theme.text} fontSize="10px" bgcolor={theme.warning}>
					{number}
				</Typography>

				<Stack position="relative" direction="column">
					<Stack justifyContent="center" alignItems="center" position="relative">
						<ShirtIcon height={50} width={50} fill={shirtColor} />
						<Typography color="black" fontSize="10px" position="absolute">
							{shirtNumber}
						</Typography>
					</Stack>
					<Typography
						color="black"
						fontSize="10px"
						position="absolute"
						px={0.5}
						sx={{ transform: 'translateX(15px)' }}
						bottom={3}
						right={0}
						bgcolor={rating > 7 ? theme.success : rating > 4 ? theme.warning : theme.error}>
						{rating}
					</Typography>
				</Stack>
			</Stack>
			<Box width="100%" mt={0.5} mx="auto">
				<Typography
					bgcolor={theme.text}
					textAlign="center"
					component="p"
					fontSize="11px"
					color="white">
					{name}
				</Typography>
				<Stack mx="auto" direction="row" gap="1px">
					<Typography
						flex={1}
						textAlign="center"
						px={0.5}
						fontSize="12px"
						color="black"
						bgcolor={theme.gray}>
						1706
					</Typography>
					<Typography
						flex={1}
						textAlign="center"
						px={0.5}
						fontSize="12px"
						color="black"
						bgcolor={theme.gray}>
						7
					</Typography>
					<Typography
						flex={1}
						textAlign="center"
						px={0.5}
						fontSize="12px"
						color="black"
						bgcolor={theme.gray}>
						0+0
					</Typography>
				</Stack>
			</Box>
		</Stack>
	)
}
