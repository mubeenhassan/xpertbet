import { Box, Stack, SxProps, Theme, Typography, useTheme } from '@mui/material'

interface StatCardProps {
	title: string
	value: string
	background: string
	showPercentage?: boolean
	headerBackground?: string
	helperText?: string
	footerText?: string
	sx?: SxProps<Theme>
}

export const StatCard = ({
	title,
	value,
	showPercentage = false,
	headerBackground,
	background,
	helperText,
	footerText,
	sx
}: StatCardProps) => {
	const theme = useTheme()
	return (
		<Stack
			sx={{
				...sx,
				transition: 'all 0.2s ease-in-out',
				'&:hover': {
					transform: 'scale(1.001) translateY(-6px)'
				}
			}}
			width="72px"
			height={'100%'}
			overflow={'hidden'}
			borderRadius={'5px'}
			direction="column">
			<Stack
				height="32px"
				alignItems="center"
				justifyContent="center"
				component="header"
				textAlign="center"
				bgcolor={headerBackground ?? '#E8E8E8'}
				px={'5px'}>
				<Typography
					lineHeight={1}
					color={headerBackground ? 'white' : 'black'}
					fontSize="10px"
					fontWeight={900}>
					{title}
				</Typography>
			</Stack>
			<Stack
				px="5px"
				height={'46px'}
				py={1}
				bgcolor={background}
				alignItems="center"
				justifyContent="center"
				direction="column">
				<Typography fontSize="18px" component="h2" fontWeight={900} color="black">
					{value}
					{showPercentage && (
						<Typography fontWeight={900} color="black" fontSize="10px" component="span">
							%
						</Typography>
					)}
				</Typography>
				{helperText && (
					<Typography
						textAlign="center"
						component="p"
						fontWeight="bold"
						fontSize="10px"
						color={theme.text}>
						{helperText}
					</Typography>
				)}
			</Stack>
			<Box
				component="footer"
				px={0.25}
				bgcolor="#E8E8E8"
				border="1px solid #990000"
				sx={{ borderBottomLeftRadius: '7px', borderBottomRightRadius: '7px', borderTop: 0 }}>
				<Typography fontWeight={900} color="black" textAlign="center" fontSize="14px">
					{footerText ?? '-'}
				</Typography>
			</Box>
		</Stack>
	)
}
