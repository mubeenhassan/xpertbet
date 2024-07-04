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
			py={'10px'}
			bgcolor={theme.primary}
			justifyContent="center"
			direction="row"
			sx={{boxShadow: 'rgba(0, 0, 0, 0.26) 0px 10px 36px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'}}
			gap={4}>
			
			{navItems.map(item => (
				<Link
					underline="none"
					color="white"
					p={'4px 15px'}
					borderRadius="20px"
					sx={[{ '&:hover': { color: theme.primary, backgroundColor: 'white' }, transition: 'all 0.4s' }]}
					key={item.name}
					href={item.link}>
					<Typography fontSize="12px" letterSpacing={'0.4px'} textTransform="uppercase" fontWeight={600}>
						{item.name}
					</Typography>
				</Link>
			))}
		</Stack>
	)
}
