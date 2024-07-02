import { Link, Stack, Typography, useTheme } from '@mui/material'

interface HeaderProps {
	navItems: NavItem[]
}

export type NavItem = {
	name: string
	link: string
}

export const Header = ({ navItems }: HeaderProps) => {
	const theme = useTheme()
	return (
		<Stack
			position="sticky"
			top={0}
			zIndex={20}
			p={1}
			bgcolor={theme.primary}
			justifyContent="center"
			direction="row"
			gap={2}>
			{navItems.map(item => (
				<Link
					underline="none"
					color="white"
					p="2px"
					borderRadius="4px"
					sx={[{ '&:hover': { color: theme.primary, backgroundColor: 'white' } }]}
					key={item.name}
					href={item.link}>
					<Typography fontSize="12px" textTransform="uppercase" fontWeight={600}>
						{item.name}
					</Typography>
				</Link>
			))}
		</Stack>
	)
}
