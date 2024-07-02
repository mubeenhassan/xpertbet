import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import React from 'react'
import { tabStyle } from 'themes/styled-components'

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	}
}

interface BasicTabsProps {
	items: string[]
	selectedItem: number
	onChange: (item: number) => void
}

export default function BasicTabs({ items, selectedItem, onChange }: BasicTabsProps) {
	const theme = useTheme()

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		onChange(newValue)
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Box>
				<Tabs
					sx={tabStyle}
					value={selectedItem}
					onChange={handleChange}
					aria-label="basic tabs example">
					{items.map((item, index) => (
						<Tab
							sx={{
								background: theme.background,
								fontSize: '12px',
								padding: '4px 8px'
							}}
							key={index}
							label={item}
							{...a11yProps(index)}
						/>
					))}
				</Tabs>
			</Box>
		</Box>
	)
}
