import { Box } from '@mui/material'
import { NAVITEMS } from 'constants'
import { Header, NavItem } from './header'

interface LayoutProps {
	children: React.ReactNode
	navItems?: NavItem[]
	isHeaderVisible?: boolean
}

const AppLayout = ({ children, navItems = NAVITEMS, isHeaderVisible = true }: LayoutProps) => {
	return (
		<Box>
			{isHeaderVisible && <Header navItems={navItems} />}
			{children}
		</Box>
	)
}

export default AppLayout
