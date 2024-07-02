import { TableCell, TableRow } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledTableHead = styled(TableCell)(() => ({
	borderBottom: 'none',
	fontWeight: '700',
	fontSize: '12px',
	padding: '0px'
}))

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
	borderBottom: 'none',
	color: theme.text,
	fontSize: '12px',
	padding: '4px'
}))

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
	  backgroundColor: theme.palette.action.hover,
	}
  }));

export const tabStyle = {
	'& .MuiTabs-indicator': {
		backgroundColor: '#F7F7F7'
	},
	'& .MuiButtonBase-root.MuiTab-root': {
		color: '#5D5D5D',
		padding: '4px 8px',
		minHeight: '0px',
		fontSize: '12px',
		border: '1px solid white',
		transition: 'color 0.2s ease-in-out',
		'&:hover': {
			background: '#E2E1E1',
			fontWeight: '700',
			color: '#5D5D5D'
		},
		'&.Mui-selected': {
			color: '#5D5D5D',
			fontWeight: '700',
			background: '#E2E1E1'
		}
	}
}
