import {
	Stack,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
	useTheme
} from '@mui/material'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { SectionHeading } from 'components/section-heading'
import { StyledTableCell, StyledTableHead } from 'themes/styled-components'

export const OddsSection = (data: any) => {
	return (
		<Stack direction="column" gap={4}>
			<SectionHeading title="Odds" />
			<Stack direction="row" gap={4} px={4} alignItems="flex-start">
				<MatchTable />
				<AsianHandicapTable />
				<GoalsTable />
				<CornersTable />
			</Stack>
		</Stack>
	)
}

const MatchTable = () => {
	const theme = useTheme()
	return (
		<TableContainer>
			<Table sx={{ tableLayout: 'fixed' }}>
				<TableHead>
					<TableRow>
						<StyledTableHead
							sx={{ backgroundColor: theme.background, borderRight: '1px solid white' }}
						/>
						<StyledTableHead
							align="center"
							colSpan={3}
							sx={{ backgroundColor: theme.secondary, color: 'white' }}>
							Match
						</StyledTableHead>
					</TableRow>
					<TableRow>
						<StyledTableHead
							sx={{ backgroundColor: theme.background, borderRight: '1px solid white' }}
						/>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: 'black'
							}}>
							1
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: 'black'
							}}>
							X
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								fontWeight: '600',
								color: 'black'
							}}>
							2
						</StyledTableHead>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<StyledTableCell
							sx={{
								backgroundColor: theme.background,
								border: '1px solid white',
								borderLeft: 'none'
							}}>
							Opening odds
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{
								backgroundColor: '#fafafa',
								border: '1px solid #f7f7f7',
								borderLeft: 'none'
							}}>
							1.91
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{
								backgroundColor: '#fafafa',
								border: '1px solid #f7f7f7',
								borderLeft: 'none'
							}}>
							3.4
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{
								backgroundColor: '#fafafa',
								border: '1px solid #f7f7f7',
								borderLeft: 'none'
							}}>
							4
						</StyledTableCell>
					</TableRow>
					<TableRow>
						<StyledTableCell
							sx={{
								backgroundColor: theme.background,
								border: '1px solid #f7f7f7',
								borderLeft: 'none'
							}}>
							Pre match odds
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							1.91
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							<Stack direction="row" justifyContent="center" gap={0.5}>
								<ArrowUpwardIcon fontSize="small" color="success" />
								3.8
							</Stack>
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							<Stack direction="row" justifyContent="center" gap={0.5}>
								<ArrowDownwardIcon fontSize="small" color="error" />
								3.75
							</Stack>
						</StyledTableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}

const AsianHandicapTable = () => {
	const theme = useTheme()
	return (
		<TableContainer>
			<Table sx={{ tableLayout: 'fixed' }}>
				<TableHead>
					<TableRow>
						<StyledTableHead />
						<StyledTableHead
							align="center"
							colSpan={2}
							sx={{ backgroundColor: theme.primary, color: 'white' }}>
							Asian Handicap
						</StyledTableHead>
					</TableRow>
					<TableRow>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: theme.text
							}}>
							LINE
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: theme.text
							}}>
							1
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: theme.text
							}}>
							2
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								fontWeight: '600',
								color: theme.text
							}}>
							LINE
						</StyledTableHead>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<StyledTableCell
							align="center"
							sx={{
								backgroundColor: '#fafafa',
								border: '1px solid #f7f7f7',
								borderLeft: 'none'
							}}>
							-0.25
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{
								backgroundColor: '#fafafa',
								border: '1px solid #f7f7f7',
								borderLeft: 'none'
							}}>
							1.68
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{
								backgroundColor: '#fafafa',
								border: '1px solid #f7f7f7',
								borderLeft: 'none'
							}}>
							2.11
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{
								backgroundColor: '#fafafa',
								border: '1px solid #f7f7f7',
								borderLeft: 'none'
							}}>
							+0.25
						</StyledTableCell>
					</TableRow>
					<TableRow>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							-0.75
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							2.16
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							1.66
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							+0.75
						</StyledTableCell>
					</TableRow>
					<TableRow>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							+0
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							1.45
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							2.59
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							-0
						</StyledTableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}

const GoalsTable = () => {
	const theme = useTheme()
	return (
		<TableContainer>
			<Table sx={{ tableLayout: 'fixed' }}>
				<TableHead>
					<TableRow>
						<StyledTableHead />
						<StyledTableHead
							align="center"
							colSpan={2}
							sx={{ backgroundColor: theme.primary, color: 'white' }}>
							Goals
						</StyledTableHead>
					</TableRow>
					<TableRow>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: theme.text
							}}>
							LINE
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: theme.text
							}}>
							UNDER
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: theme.text
							}}>
							OVER
						</StyledTableHead>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							2.5
						</StyledTableCell>

						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							<Stack direction="row" justifyContent="center" gap={0.5}>
								<ArrowUpwardIcon fontSize="small" color="success" />
								2.3
							</Stack>
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							<Stack direction="row" justifyContent="center" gap={0.5}>
								<ArrowDownwardIcon fontSize="small" color="error" />
								1.62
							</Stack>
						</StyledTableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}

const CornersTable = () => {
	const theme = useTheme()
	return (
		<TableContainer>
			<Table sx={{ tableLayout: 'fixed' }}>
				<TableHead>
					<TableRow>
						<StyledTableHead />
						<StyledTableHead
							align="center"
							colSpan={2}
							sx={{ backgroundColor: theme.primary, color: 'white' }}>
							Corners
						</StyledTableHead>
					</TableRow>
					<TableRow>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: theme.text
							}}>
							LINE
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: theme.text
							}}>
							UNDER
						</StyledTableHead>
						<StyledTableHead
							align="center"
							sx={{
								backgroundColor: theme.background,
								borderRight: '1px solid white',
								fontWeight: '600',
								color: theme.text
							}}>
							OVER
						</StyledTableHead>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							10.5
						</StyledTableCell>

						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							1.93
						</StyledTableCell>
						<StyledTableCell
							align="center"
							sx={{ border: '1px solid #f7f7f7', borderLeft: 'none' }}>
							1.88
						</StyledTableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	)
}
