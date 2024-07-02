import {
	Box,
	Grid,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	useMediaQuery,
	useTheme
} from '@mui/material'
import { NotAvailableIcon } from 'assets/icons'
import { LinearProgressBar } from 'components/app/progress-bar'
import { PositionsTable, RefereeTable } from 'components/app/table'

import {
	cartonasePlusValueToColor,
	getCornerePercentageColorForValue,
	getMedieCornereColorForValue,
	getMedieFaulturiColorForValue,
	getMedieGoluriColorForValue,
	getMedieSuturiTeamColorForValue,
	getMedieTotalCornereColorForValue,
	getMedieTotalGoluriColorForValue,
	getMedieTotalSuturiColorForValue,
	getPesteColorForValue,
	getSuturiPercentageColorForValue,
	getTotalMedieFaulturiColorForValue,
	medieCartonaseValueToColor,
	medieTotalCartonaseValueToColor
} from 'constants/colors'
import React from 'react'
import { getExactMedianValue, getMedianValue } from 'utils/median'
import { showTextEllipsis } from 'utils/string'
import { getTotalValue } from 'utils/sum'

export const StatsSection = ({
	data,
	homeTeam,
	awayTeam,
	leagueTeams,
	referee,
	homeTeamMatches = [],
	awayTeamMatches = []
}: any) => {
	const theme = useTheme()

	const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
	const padding = isMobile ? { pb: 0, p: 0.5 } : {}

	const homeTeamData = homeTeam?.filter(
		(team: any) => team.competition_id === data.competition_id
	)[0]
	const awayTeamData = awayTeam?.filter(
		(team: any) => team.competition_id === data.competition_id
	)[0]

	return (
		<Stack id="stats" px={[0, 4]} direction="column" gap={[2, 3]}>
			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				mt={1}
				textTransform="uppercase"
				color={theme.heading}
				fontSize={['20px', '30px']}>
				Statistici Goluri
			</Typography>

			<TableContainer>
				<Table sx={{ borderCollapse: 'separate' }}>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: '14px' }}
								align="center"
								colSpan={2}>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="flex-end"
									gap={[0.5, 1.5]}>
									<Typography
										color="#323232"
										fontWeight={900}
										whiteSpace="nowrap"
										fontSize={['12px', '22px']}
										component="h1">
										{showTextEllipsis(data.home_name)}
									</Typography>
									<Box
										component="img"
										src={`https://cdn.footystats.org/img/${data.home_image}`}
										height={['20px', '24px']}
									/>
								</Stack>
							</TableCell>
							<Box
								sx={{
									borderStyle: 'solid solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									borderTopLeftRadius: '10px',
									borderTopRightRadius: '10px',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									sx={{
										borderColor: 'white',
										fontWeight: 700,
										pb: 0,
										fontSize: ['12px', '14px']
									}}
									align="center">
									Medie
								</TableCell>
							</Box>
							<TableCell
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: ['12px', '22px'] }}
								colSpan={2}
								align="center">
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="flex-start"
									gap={[0.5, 1.5]}>
									<Box
										component="img"
										src={`https://cdn.footystats.org/img/${data.away_image}`}
										height={['20px', '24px']}
									/>
									<Typography
										color="#323232"
										fontWeight={900}
										whiteSpace="nowrap"
										fontSize={['12px', '22px']}
										component="h1">
										{showTextEllipsis(data.away_name)}
									</Typography>
								</Stack>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#007fc3',
									color: 'white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Goluri Marcate
							</TableCell>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									bgcolor: getMedieGoluriColorForValue(homeTeamData?.stats?.seasonScoredAVG_home),
									color: 'black',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								{homeTeamData?.stats?.seasonScoredAVG_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: getMedieGoluriColorForValue(
										getExactMedianValue(
											homeTeamData?.stats?.seasonScoredAVG_home,
											awayTeamData?.stats?.seasonConcededAVG_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										fontSize: ['12px', '14px'],
										borderColor: getMedieGoluriColorForValue(
											getExactMedianValue(
												homeTeamData?.stats?.seasonScoredAVG_home,
												awayTeamData?.stats?.seasonConcededAVG_away
											)
										),
										...padding
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.seasonScoredAVG_home,
										awayTeamData?.stats?.seasonConcededAVG_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getMedieGoluriColorForValue(awayTeamData?.stats?.seasonConcededAVG_away),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.seasonConcededAVG_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#dc271e',
									fontSize: ['12px', '14px'],
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Goluri Încasate
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#007fc3',
									color: 'white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Goluri Încasate
							</TableCell>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									bgcolor: getMedieGoluriColorForValue(homeTeamData?.stats?.seasonConcededAVG_home),
									color: 'black',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								{homeTeamData?.stats?.seasonConcededAVG_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: getMedieGoluriColorForValue(
										getExactMedianValue(
											homeTeamData?.stats?.seasonConcededAVG_home,
											awayTeamData?.stats?.seasonScoredAVG_away
										)
									),
									fontSize: ['12px', '14px'],
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getMedieGoluriColorForValue(
											getExactMedianValue(
												homeTeamData?.stats?.seasonConcededAVG_home,
												awayTeamData?.stats?.seasonScoredAVG_away
											)
										),
										...padding
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.seasonConcededAVG_home,
										awayTeamData?.stats?.seasonScoredAVG_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									fontSize: ['12px', '14px'],
									bgcolor: getMedieGoluriColorForValue(awayTeamData?.stats?.seasonScoredAVG_away),
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.seasonScoredAVG_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#dc271e',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Goluri Marcate
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<Box
								sx={{
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: 'white',
										...padding
									}}
								/>
							</Box>
							<TableCell
								align="center"
								sx={{
									color: 'white',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}
							/>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#e0e0e0',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Total Goluri/Meci
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: getMedieTotalGoluriColorForValue(homeTeamData?.stats?.seasonAVG_home),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									p: 0.5
								}}>
								{homeTeamData?.stats?.seasonAVG_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: getMedieTotalGoluriColorForValue(
										getExactMedianValue(
											homeTeamData?.stats?.seasonAVG_home,
											awayTeamData?.stats?.seasonAVG_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										...padding,
										fontWeight: 600,
										fontSize: ['12px', '14px'],
										borderColor: getMedieTotalGoluriColorForValue(
											getExactMedianValue(
												homeTeamData?.stats?.seasonAVG_home,
												awayTeamData?.stats?.seasonAVG_away
											)
										)
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.seasonAVG_home,
										awayTeamData?.stats?.seasonAVG_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getMedieTotalGoluriColorForValue(awayTeamData?.stats?.seasonAVG_away),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.seasonAVG_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#e0e0e0',
									fontWeight: 600,
									p: 0.5
								}}>
								Total Goluri/Meci
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="center"
								sx={{
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<Box
								sx={{
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: 'white',
										...padding
									}}
								/>
							</Box>
							<TableCell
								align="center"
								sx={{
									fontSize: ['12px', '14px'],
									color: 'white',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="left"
								sx={{
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									p: 0.5
								}}>
								Meciuri cu + 1.5 goluri
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: getPesteColorForValue(homeTeamData?.stats?.seasonOver15Percentage_home),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderRight: '1px solid white',
									borderBottom: '1px solid white',
									p: 0.5
								}}>
								{homeTeamData?.stats?.seasonOver15Percentage_home}%
							</TableCell>
							<Box
								sx={{
									bgcolor: getPesteColorForValue(
										Math.round(
											getMedianValue(
												homeTeamData?.stats?.seasonOver15Percentage_home,
												awayTeamData?.stats?.seasonOver15Percentage_away
											)
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getPesteColorForValue(
											Math.round(
												getMedianValue(
													homeTeamData?.stats?.seasonOver15Percentage_home,
													awayTeamData?.stats?.seasonOver15Percentage_away
												)
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getMedianValue(
										homeTeamData?.stats?.seasonOver15Percentage_home,
										awayTeamData?.stats?.seasonOver15Percentage_away
									)}
									%
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									fontSize: ['12px', '14px'],
									bgcolor: getPesteColorForValue(awayTeamData?.stats?.seasonOver15Percentage_away),
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.seasonOver15Percentage_away}%
							</TableCell>
							<TableCell
								align="left"
								sx={{
									fontSize: ['12px', '14px'],
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									p: 0.5
								}}>
								Meciuri cu + 1.5 goluri
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5,
									fontWeight: 600
								}}>
								Meciuri cu + 2.5 goluri
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: getPesteColorForValue(homeTeamData?.stats?.seasonOver25Percentage_home),
									color: 'black',
									borderRight: '1px solid white',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									p: 0.5
								}}>
								{homeTeamData?.stats?.seasonOver25Percentage_home}%
							</TableCell>
							<Box
								sx={{
									bgcolor: getPesteColorForValue(
										Math.round(
											getMedianValue(
												homeTeamData?.stats?.seasonOver25Percentage_home,
												awayTeamData?.stats?.seasonOver25Percentage_away
											)
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getPesteColorForValue(
											Math.round(
												getMedianValue(
													homeTeamData?.stats?.seasonOver25Percentage_home,
													awayTeamData?.stats?.seasonOver25Percentage_away
												)
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getMedianValue(
										homeTeamData?.stats?.seasonOver25Percentage_home,
										awayTeamData?.stats?.seasonOver25Percentage_away
									)}
									%
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getPesteColorForValue(awayTeamData?.stats?.seasonOver25Percentage_away),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.seasonOver25Percentage_away}%
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5,
									fontWeight: 600
								}}>
								Meciuri cu + 2.5 goluri
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									p: 0.5
								}}>
								Meciuri cu + 3.5 goluri
							</TableCell>
							<TableCell
								align="center"
								sx={{
									fontSize: ['12px', '14px'],
									bgcolor: getPesteColorForValue(homeTeamData?.stats?.seasonOver35Percentage_home),
									color: 'black',
									borderRight: '1px solid white',
									borderBottom: '1px solid white',
									p: 0.5
								}}>
								{homeTeamData?.stats?.seasonOver35Percentage_home}%
							</TableCell>
							<Box
								sx={{
									bgcolor: getPesteColorForValue(
										Math.round(
											getMedianValue(
												homeTeamData?.stats?.seasonOver35Percentage_home,
												awayTeamData?.stats?.seasonOver35Percentage_away
											)
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getPesteColorForValue(
											Math.round(
												getMedianValue(
													homeTeamData?.stats?.seasonOver35Percentage_home,
													awayTeamData?.stats?.seasonOver35Percentage_away
												)
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getMedianValue(
										homeTeamData?.stats?.seasonOver35Percentage_home,
										awayTeamData?.stats?.seasonOver35Percentage_away
									)}
									%
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getPesteColorForValue(awayTeamData?.stats?.seasonOver35Percentage_away),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.seasonOver35Percentage_away}%
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Meciuri cu + 3.5 goluri
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5,
									fontSize: ['12px', '14px']
								}}
							/>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<Box
								sx={{
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: 'white',
										...padding
									}}
								/>
							</Box>
							<TableCell
								align="center"
								sx={{
									color: 'white',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									fontSize: ['12px', '14px'],
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#e0e0e0',
									fontWeight: 600,
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Meciuri cu GG
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: getPesteColorForValue(homeTeamData?.stats?.seasonBTTSPercentage_home),
									color: 'black',
									borderRight: '1px solid white',
									borderBottom: '1px solid white',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								{homeTeamData?.stats?.seasonBTTSPercentage_home}%
							</TableCell>
							<Box
								sx={{
									bgcolor: getPesteColorForValue(
										Math.round(
											getMedianValue(
												homeTeamData?.stats?.seasonBTTSPercentage_home,
												awayTeamData?.stats?.seasonBTTSPercentage_away
											)
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getPesteColorForValue(
											Math.round(
												getMedianValue(
													homeTeamData?.stats?.seasonBTTSPercentage_home,
													awayTeamData?.stats?.seasonBTTSPercentage_away
												)
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getMedianValue(
										homeTeamData?.stats?.seasonBTTSPercentage_home,
										awayTeamData?.stats?.seasonBTTSPercentage_away
									)}
									%
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getPesteColorForValue(awayTeamData?.stats?.seasonBTTSPercentage_away),
									color: 'black',
									borderBottom: '1px solid white',
									fontSize: ['12px', '14px'],
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.seasonBTTSPercentage_away}%
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#e0e0e0',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Meciuri cu GG
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<Box
								sx={{
									borderStyle: 'none solid solid solid',
									borderColor: '#abd380',
									borderBottomLeftRadius: '10px',
									borderBottomRightRadius: '10px',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: 'white',
										p: 0.5
									}}
								/>
							</Box>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								colSpan={2}
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: ['none', '1px solid white'],
									bgcolor: '#e0e0e0',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Rezultate Recente Acasa
							</TableCell>

							<TableCell sx={{ borderBottom: '1px solid white' }} />
							<TableCell
								align="left"
								colSpan={2}
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									borderLeft: 'none',
									bgcolor: '#e0e0e0',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Rezultate Recente Deplasare
							</TableCell>
						</TableRow>

						{homeTeamMatches &&
							awayTeamMatches &&
							[0, 1, 2, 3, 4].map((row, index) => (
								<React.Fragment key={row}>
									<TableRow>
										<TableCell
											align="right"
											sx={{
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												color: 'white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
										<TableCell
											align="center"
											sx={{
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												color: 'white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
										<TableCell
											align="center"
											sx={{
												p: 0.5,
												borderBottom: '1px solid white'
											}}
										/>
										<TableCell
											align="center"
											sx={{
												color: 'white',
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
										<TableCell
											align="left"
											sx={{
												display: ['none', 'table-cell'],
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												color: 'white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
									</TableRow>
									<TableRow>
										<TableCell
											colSpan={2}
											sx={{
												borderRight: 'none',
												borderBottom: 'none',
												px: 0,
												py: 0,
												fontSize: '14px'
											}}>
											<Stack gap={1} direction="row" justifyContent="center" alignItems="center">
												<Stack
													flex={1}
													bgcolor={
														homeTeamMatches[index]?.goals?.home >
														homeTeamMatches[index]?.goals?.away
															? '#d3fcd1'
															: homeTeamMatches[index]?.goals?.home ===
																  homeTeamMatches[index]?.goals?.away
																? '#fcf2d1'
																: '#fcd1d1'
													}
													direction="column"
													alignItems="flex-end"
													px={1}
													py={0.25}
													gap={0.5}>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Typography
															whiteSpace="nowrap"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{homeTeamMatches[index]?.teams?.home?.name
																? showTextEllipsis(homeTeamMatches[index]?.teams?.home?.name)
																: 'Not Available'}
														</Typography>
														<Box
															component="img"
															src={homeTeamMatches[index]?.teams?.home?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
													</Stack>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Typography
															whiteSpace="nowrap"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{homeTeamMatches[index]?.teams?.away?.name
																? showTextEllipsis(homeTeamMatches[index]?.teams?.away?.name)
																: 'Not Available'}
														</Typography>
														<Box
															component="img"
															src={homeTeamMatches[index]?.teams?.away?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
													</Stack>
												</Stack>
												<Stack
													bgcolor={
														homeTeamMatches[index]?.goals?.home >
														homeTeamMatches[index]?.goals?.away
															? '#d3fcd1'
															: homeTeamMatches[index]?.goals?.home ===
																  homeTeamMatches[index]?.goals?.away
																? '#fcf2d1'
																: '#fcd1d1'
													}
													direction="column"
													px={1.5}
													py={0.25}
													gap={0.5}>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{homeTeamMatches[index]?.goals?.home ?? -1}
													</Typography>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{homeTeamMatches[index]?.goals?.away ?? -1}
													</Typography>
												</Stack>
											</Stack>
										</TableCell>
										<TableCell
											sx={{
												borderBottom: 'none',
												p: 1,
												py: 0,
												fontSize: '14px'
											}}
										/>
										<TableCell
											colSpan={2}
											sx={{
												borderLeft: 'none',
												borderBottom: 'none',
												px: 0,
												py: 0,
												fontSize: '14px'
											}}>
											<Stack gap={1} direction="row">
												<Stack
													bgcolor={
														awayTeamMatches[index]?.goals?.away >
														awayTeamMatches[index]?.goals?.home
															? '#d3fcd1'
															: awayTeamMatches[index]?.goals?.away ===
																  awayTeamMatches[index]?.goals?.home
																? '#fcf2d1'
																: '#fcd1d1'
													}
													direction="column"
													px={1.5}
													py={0.25}
													gap={0.5}>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{awayTeamMatches[index]?.goals?.home ?? -1}
													</Typography>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{awayTeamMatches[index]?.goals?.away ?? -1}
													</Typography>
												</Stack>
												<Stack
													flex={1}
													bgcolor={
														awayTeamMatches[index]?.goals?.away >
														awayTeamMatches[index]?.goals?.home
															? '#d3fcd1'
															: awayTeamMatches[index]?.goals?.away ===
																  awayTeamMatches[index]?.goals?.home
																? '#fcf2d1'
																: '#fcd1d1'
													}
													direction="column"
													alignItems="flex-start"
													px={1}
													py={0.25}
													gap={0.5}>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Box
															component="img"
															src={awayTeamMatches[index]?.teams?.home?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
														<Typography
															sx={{
																display: '-webkit-box',
																WebkitBoxOrient: 'vertical',
																WebkitLineClamp: '1'
															}}
															overflow="hidden"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{awayTeamMatches[index]?.teams?.home?.name
																? showTextEllipsis(awayTeamMatches[index]?.teams?.home?.name)
																: 'Not Available'}
														</Typography>
													</Stack>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Box
															component="img"
															src={awayTeamMatches[index]?.teams?.away?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
														<Typography
															sx={{
																display: '-webkit-box',
																WebkitBoxOrient: 'vertical',
																WebkitLineClamp: '1'
															}}
															overflow="hidden"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{awayTeamMatches[index]?.teams?.away?.name
																? showTextEllipsis(awayTeamMatches[index]?.teams?.away?.name)
																: 'Not Available'}
														</Typography>
													</Stack>
												</Stack>
											</Stack>
										</TableCell>
									</TableRow>
								</React.Fragment>
							))}
					</TableBody>
				</Table>
			</TableContainer>

			<Grid container rowGap={1} columnGap={3}>
				<Grid xs={12} md={5.8}>
					<Typography
						fontWeight={900}
						component="h1"
						textAlign="center"
						mt={1}
						textTransform="uppercase"
						color={theme.heading}
						lineHeight={1}
						fontSize={['20px', '30px']}>
						STATISTICI GOLURI
						<br />
						PRIMA REPRIZĂ
					</Typography>

					<TableContainer>
						<Table sx={{ borderCollapse: 'separate' }}>
							<TableHead>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: '14px' }}
										align="center"
										colSpan={2}>
										<Stack
											direction="row"
											alignItems="center"
											justifyContent="flex-end"
											gap={[0.5, 1.5]}>
											<Typography
												color="#323232"
												fontWeight={900}
												whiteSpace="nowrap"
												fontSize={['12px', '14px']}
												component="h1">
												{showTextEllipsis(data.home_name)}
											</Typography>
											<Box
												component="img"
												src={`https://cdn.footystats.org/img/${data.home_image}`}
												height={['20px', '24px']}
											/>
										</Stack>
									</TableCell>
									<Box
										sx={{
											borderStyle: 'solid solid none solid',
											borderColor: '#abd380',
											borderTopLeftRadius: '10px',
											borderTopRightRadius: '10px',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{
												borderColor: 'white',
												p: 0.5,
												fontWeight: 700,
												fontSize: ['12px', '14px']
											}}
											align="center">
											Medie
										</TableCell>
									</Box>
									<TableCell
										sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: ['12px', '14px'] }}
										colSpan={2}
										align="center">
										<Stack
											direction="row"
											alignItems="center"
											justifyContent="flex-start"
											gap={[0.5, 1.5]}>
											<Box
												component="img"
												src={`https://cdn.footystats.org/img/${data.away_image}`}
												height={['20px', '24px']}
											/>
											<Typography
												color="#323232"
												fontWeight={900}
												whiteSpace="nowrap"
												fontSize={['12px', '14px']}
												component="h1">
												{showTextEllipsis(data.away_name)}
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#007fc3',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}>
										Total Goluri
									</TableCell>
									<TableCell
										align="center"
										sx={{
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											bgcolor: getMedieGoluriColorForValue(homeTeamData?.stats?.AVGHT_home),
											color: 'black',
											p: 0.5
										}}>
										{homeTeamData?.stats?.AVGHT_home}
									</TableCell>
									<Box
										sx={{
											bgcolor: getMedieGoluriColorForValue(
												getExactMedianValue(
													homeTeamData?.stats?.AVGHT_home,
													awayTeamData?.stats?.AVGHT_away
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getMedieGoluriColorForValue(
													getExactMedianValue(
														homeTeamData?.stats?.AVGHT_home,
														awayTeamData?.stats?.AVGHT_away
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getExactMedianValue(
												homeTeamData?.stats?.AVGHT_home,
												awayTeamData?.stats?.AVGHT_away
											).toFixed(2)}
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getMedieGoluriColorForValue(awayTeamData?.stats?.AVGHT_away),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.AVGHT_away}
									</TableCell>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#dc271e',
											fontSize: ['12px', '14px'],
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}>
										Medie Total
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<Box
										sx={{
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									</Box>
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										+ 0.5 goluri
									</TableCell>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												homeTeamData?.stats?.seasonOver05PercentageHT_home
											),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderRight: '1px solid white',
											borderBottom: '1px solid white',
											p: 0.5
										}}>
										{homeTeamData?.stats?.seasonOver05PercentageHT_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getPesteColorForValue(
												Math.round(
													getMedianValue(
														homeTeamData?.stats?.seasonOver05PercentageHT_home,
														awayTeamData?.stats?.seasonOver05PercentageHT_away
													)
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getPesteColorForValue(
													Math.round(
														getMedianValue(
															homeTeamData?.stats?.seasonOver05PercentageHT_home,
															awayTeamData?.stats?.seasonOver05PercentageHT_away
														)
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.seasonOver05PercentageHT_home,
												awayTeamData?.stats?.seasonOver05PercentageHT_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											fontSize: ['12px', '14px'],
											bgcolor: getPesteColorForValue(
												awayTeamData?.stats?.seasonOver05PercentageHT_away
											),
											color: 'black',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.seasonOver05PercentageHT_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											fontSize: ['12px', '14px'],
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										+ 0.5 goluri
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											fontSize: ['12px', '14px'],
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										+ 1.5 goluri
									</TableCell>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												homeTeamData?.stats?.seasonOver15PercentageHT_home
											),
											fontSize: ['12px', '14px'],
											color: 'black',
											borderRight: '1px solid white',
											borderBottom: '1px solid white',
											p: 0.5
										}}>
										{homeTeamData?.stats?.seasonOver15PercentageHT_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getPesteColorForValue(
												Math.round(
													getMedianValue(
														homeTeamData?.stats?.seasonOver15PercentageHT_home,
														awayTeamData?.stats?.seasonOver15PercentageHT_away
													)
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getPesteColorForValue(
													Math.round(
														getMedianValue(
															homeTeamData?.stats?.seasonOver15PercentageHT_home,
															awayTeamData?.stats?.seasonOver15PercentageHT_away
														)
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.seasonOver15PercentageHT_home,
												awayTeamData?.stats?.seasonOver15PercentageHT_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											fontSize: ['12px', '14px'],
											bgcolor: getPesteColorForValue(
												awayTeamData?.stats?.seasonOver15PercentageHT_away
											),
											color: 'black',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.seasonOver15PercentageHT_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											fontSize: ['12px', '14px'],
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										+ 1.5 goluri
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											fontSize: ['12px', '14px'],
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										+ 2.5 goluri
									</TableCell>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												homeTeamData?.stats?.seasonOver25PercentageHT_home
											),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderRight: '1px solid white',
											borderBottom: '1px solid white',
											p: 0.5
										}}>
										{homeTeamData?.stats?.seasonOver25PercentageHT_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getPesteColorForValue(
												Math.round(
													getMedianValue(
														homeTeamData?.stats?.seasonOver25PercentageHT_home,
														awayTeamData?.stats?.seasonOver25PercentageHT_away
													)
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getPesteColorForValue(
													Math.round(
														getMedianValue(
															homeTeamData?.stats?.seasonOver25PercentageHT_home,
															awayTeamData?.stats?.seasonOver25PercentageHT_away
														)
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.seasonOver25PercentageHT_home,
												awayTeamData?.stats?.seasonOver25PercentageHT_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												awayTeamData?.stats?.seasonOver25PercentageHT_away
											),
											fontSize: ['12px', '14px'],
											color: 'black',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.seasonOver25PercentageHT_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										+ 2.5 goluri
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<Box
										sx={{
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									</Box>
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										GG
									</TableCell>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												homeTeamData?.stats?.seasonBTTSPercentageHT_home
											),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderRight: '1px solid white',
											borderBottom: '1px solid white',
											p: 0.5
										}}>
										{homeTeamData?.stats?.seasonBTTSPercentageHT_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getPesteColorForValue(
												Math.round(
													getMedianValue(
														homeTeamData?.stats?.seasonBTTSPercentageHT_home,
														awayTeamData?.stats?.seasonBTTSPercentageHT_away
													)
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getPesteColorForValue(
													Math.round(
														getMedianValue(
															homeTeamData?.stats?.seasonBTTSPercentageHT_home,
															awayTeamData?.stats?.seasonBTTSPercentageHT_away
														)
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.seasonBTTSPercentageHT_home,
												awayTeamData?.stats?.seasonBTTSPercentageHT_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												awayTeamData?.stats?.seasonBTTSPercentageHT_away
											),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.seasonBTTSPercentageHT_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										GG
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
									<Box
										sx={{
											borderStyle: 'none solid solid solid',
											borderBottomLeftRadius: '10px',
											borderBottomRightRadius: '10px',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{ borderColor: 'white', p: 1, py: 0, pt: 1, fontSize: ['12px', '14px'] }}
											align="center"></TableCell>
									</Box>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>

					<Typography
						fontWeight={900}
						component="h1"
						textAlign="center"
						mt={2}
						textTransform="uppercase"
						color={theme.heading}
						lineHeight={1}
						fontSize={['20px', '30px']}>
						STATISTICI GOLURI
						<br /> A DOUĂ REPRIZĂ
					</Typography>

					<TableContainer>
						<Table sx={{ borderCollapse: 'separate' }}>
							<TableHead>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: '14px' }}
										align="center"
										colSpan={2}>
										<Stack
											direction="row"
											alignItems="center"
											justifyContent="flex-end"
											gap={[0.5, 1.5]}>
											<Typography
												color="#323232"
												fontWeight={900}
												whiteSpace="nowrap"
												fontSize={['12px', '14px']}
												component="h1">
												{showTextEllipsis(data.home_name)}
											</Typography>
											<Box
												component="img"
												src={`https://cdn.footystats.org/img/${data.home_image}`}
												height={['20px', '24px']}
											/>
										</Stack>
									</TableCell>
									<Box
										sx={{
											borderStyle: 'solid solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											borderTopLeftRadius: '10px',
											borderTopRightRadius: '10px',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{
												borderColor: 'white',
												fontWeight: 700,
												p: 1,
												pb: 0,
												fontSize: ['12px', '14px']
											}}
											align="center">
											Medie
										</TableCell>
									</Box>
									<TableCell
										sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: ['12px', '14px'] }}
										colSpan={2}
										align="center">
										<Stack
											direction="row"
											alignItems="center"
											justifyContent="flex-start"
											gap={[0.5, 1.5]}>
											<Box
												component="img"
												src={`https://cdn.footystats.org/img/${data.away_image}`}
												height={['20px', '24px']}
											/>
											<Typography
												color="#323232"
												fontWeight={900}
												whiteSpace="nowrap"
												fontSize={['12px', '14px']}
												component="h1">
												{showTextEllipsis(data.away_name)}
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#007fc3',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}>
										Total Goluri
									</TableCell>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											bgcolor: getMedieGoluriColorForValue(homeTeamData?.stats?.AVG_2hg_home),
											color: 'black',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										{homeTeamData?.stats?.AVG_2hg_home}
									</TableCell>
									<Box
										sx={{
											bgcolor: getMedieGoluriColorForValue(
												getExactMedianValue(
													homeTeamData?.stats?.AVG_2hg_home,
													awayTeamData?.stats?.AVG_2hg_away
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getMedieGoluriColorForValue(
													getExactMedianValue(
														homeTeamData?.stats?.AVG_2hg_home,
														awayTeamData?.stats?.AVG_2hg_away
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getExactMedianValue(
												homeTeamData?.stats?.AVG_2hg_home,
												awayTeamData?.stats?.AVG_2hg_away
											).toFixed(2)}
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getMedieGoluriColorForValue(awayTeamData?.stats?.AVG_2hg_away),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.AVG_2hg_away}
									</TableCell>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#dc271e',
											fontSize: ['12px', '14px'],
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}>
										Medie Total
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<Box
										sx={{
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									</Box>
									<TableCell
										align="center"
										sx={{
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontSize: ['12px', '14px'],
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											color: theme.text,
											borderBottom: '1px solid white',
											fontSize: ['12px', '14px'],
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										+ 0.5 goluri
									</TableCell>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												homeTeamData?.stats?.over05_2hg_percentage_home
											),
											color: 'black',
											borderRight: '1px solid white',
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											p: 0.5
										}}>
										{homeTeamData?.stats?.over05_2hg_percentage_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getPesteColorForValue(
												Math.round(
													getMedianValue(
														homeTeamData?.stats?.over05_2hg_percentage_home,
														awayTeamData?.stats?.over05_2hg_percentage_away
													)
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getPesteColorForValue(
													Math.round(
														getMedianValue(
															homeTeamData?.stats?.over05_2hg_percentage_home,
															awayTeamData?.stats?.over05_2hg_percentage_away
														)
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.over05_2hg_percentage_home,
												awayTeamData?.stats?.over05_2hg_percentage_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												awayTeamData?.stats?.over05_2hg_percentage_away
											),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.over05_2hg_percentage_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										+ 0.5 goluri
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										+ 1.5 goluri
									</TableCell>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												homeTeamData?.stats?.over15_2hg_percentage_home
											),
											color: 'black',
											borderRight: '1px solid white',
											borderBottom: '1px solid white',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										{homeTeamData?.stats?.over15_2hg_percentage_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getPesteColorForValue(
												Math.round(
													getMedianValue(
														homeTeamData?.stats?.over15_2hg_percentage_home,
														awayTeamData?.stats?.over15_2hg_percentage_away
													)
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getPesteColorForValue(
													Math.round(
														getMedianValue(
															homeTeamData?.stats?.over15_2hg_percentage_home,
															awayTeamData?.stats?.over15_2hg_percentage_away
														)
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.over15_2hg_percentage_home,
												awayTeamData?.stats?.over15_2hg_percentage_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												awayTeamData?.stats?.over15_2hg_percentage_away
											),
											fontSize: ['12px', '14px'],
											color: 'black',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.over15_2hg_percentage_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											color: theme.text,
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										+ 1.5 goluri
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											color: theme.text,
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										+ 2.5 goluri
									</TableCell>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												homeTeamData?.stats?.over25_2hg_percentage_home
											),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderRight: '1px solid white',
											borderBottom: '1px solid white',
											p: 0.5
										}}>
										{homeTeamData?.stats?.over25_2hg_percentage_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getPesteColorForValue(
												Math.round(
													getMedianValue(
														homeTeamData?.stats?.over25_2hg_percentage_home,
														awayTeamData?.stats?.over25_2hg_percentage_away
													)
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getPesteColorForValue(
													Math.round(
														getMedianValue(
															homeTeamData?.stats?.over25_2hg_percentage_home,
															awayTeamData?.stats?.over25_2hg_percentage_away
														)
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.over25_2hg_percentage_home,
												awayTeamData?.stats?.over25_2hg_percentage_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(
												awayTeamData?.stats?.over25_2hg_percentage_away
											),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.over25_2hg_percentage_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										+ 2.5 goluri
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}
									/>
									<Box
										sx={{
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									</Box>
									<TableCell
										align="center"
										sx={{
											color: 'white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										GG
									</TableCell>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(homeTeamData?.stats?.btts_2hg_percentage_home),
											color: 'black',
											borderRight: '1px solid white',
											borderBottom: '1px solid white',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										{homeTeamData?.stats?.btts_2hg_percentage_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getPesteColorForValue(
												Math.round(
													getMedianValue(
														homeTeamData?.stats?.btts_2hg_percentage_home,
														awayTeamData?.stats?.btts_2hg_percentage_away
													)
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getPesteColorForValue(
													Math.round(
														getMedianValue(
															homeTeamData?.stats?.btts_2hg_percentage_home,
															awayTeamData?.stats?.btts_2hg_percentage_away
														)
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.btts_2hg_percentage_home,
												awayTeamData?.stats?.btts_2hg_percentage_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getPesteColorForValue(awayTeamData?.stats?.btts_2hg_percentage_away),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.btts_2hg_percentage_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											color: theme.text,
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										GG
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
									<Box
										sx={{
											borderStyle: 'none solid solid solid',
											borderBottomLeftRadius: '10px',
											borderBottomRightRadius: '10px',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{ borderColor: 'white', p: 1, py: 0, pt: 1, fontSize: ['12px', '14px'] }}
											align="center"></TableCell>
									</Box>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>

				<Grid md={5.8} xs={12}>
					<Typography
						fontWeight={900}
						component="h1"
						textAlign="center"
						my={1}
						textTransform="uppercase"
						color={theme.heading}
						lineHeight={1}
						fontSize={['20px', '30px']}>
						Goluri / Intervale
					</Typography>
					<TableContainer sx={{ display: { xs: 'none', md: 'block' } }}>
						<Table sx={{ borderSpacing: 'separate', tableLayout: 'fixed', width: '100%' }}>
							<TableHead>
								<TableRow>
									<TableCell
										sx={{
											bgcolor: 'white',
											p: 0,
											py: 0.5,
											borderBottom: '0px'
										}}
										align="center"
										colSpan={2}>
										<Box
											component="img"
											src={`https://cdn.footystats.org/img/${data.home_image}`}
											height="30px"
										/>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: 'white',
											p: 0,
											py: 0.5,
											borderBottom: '0px',
											borderRight: '1px solid white'
										}}
										colSpan={7}
										align="center">
										<Stack direction="column" alignItems="center">
											<Typography
												sx={{
													display: '-webkit-box',
													WebkitBoxOrient: 'vertical',
													WebkitLineClamp: '1',
													overflow: 'hidden'
												}}
												textTransform="uppercase"
												color="#007fc3"
												fontSize={['12px', '14px']}
												fontWeight={700}>
												{showTextEllipsis(data?.home_name)}
											</Typography>
											<Typography
												fontSize={['12px', '14px']}
												textTransform="uppercase"
												color="black"
												fontWeight={700}>
												Acasa
											</Typography>
										</Stack>
									</TableCell>

									<TableCell
										sx={{
											bgcolor: 'white',
											p: 0,
											py: 0.5,
											borderBottom: '0px'
										}}
										align="center"
										colSpan={2}>
										<Box
											component="img"
											src={`https://cdn.footystats.org/img/${data.away_image}`}
											height="30px"
										/>
									</TableCell>

									<TableCell
										sx={{
											p: 0,
											py: 0.5,
											bgcolor: 'white',
											borderBottom: '0px',
											borderRight: '1px solid white'
										}}
										colSpan={7}
										align="center">
										<Stack direction="column" alignItems="center">
											<Typography
												sx={{
													display: '-webkit-box',
													WebkitBoxOrient: 'vertical',
													WebkitLineClamp: '1',
													overflow: 'hidden'
												}}
												textTransform="uppercase"
												color="#dc271e"
												fontSize={['12px', '14px']}
												fontWeight={700}>
												{showTextEllipsis(data?.away_name)}
											</Typography>
											<Typography
												fontSize={['12px', '14px']}
												textTransform="uppercase"
												color="black"
												fontWeight={700}>
												Deplasare
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											fontSize: ['12px', '14px'],
											color: 'black',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										0-15
									</TableCell>
									<TableCell
										align="right"
										sx={{
											fontSize: ['12px', '14px'],
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography
												sx={{
													fontSize: ['12px', '14px']
												}}
												color="black"
												fontWeight={600}>
												GM
											</Typography>
											<Typography
												sx={{
													fontSize: ['12px', '14px']
												}}
												color="black"
												fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											fontSize: ['12px', '14px'],
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_0_to_15_home}
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_0_to_15_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_0_to_15_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_0_to_15_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											fontSize: ['12px', '16px'],
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										0-15
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_0_to_15_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_0_to_15_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_0_to_15_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_0_to_15_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											fontSize: ['12px', '14px'],
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										16-30
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_16_to_30_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_16_to_30_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_16_to_30_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_16_to_30_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											fontSize: ['12px', '14px'],
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										16-30
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_16_to_30_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_16_to_30_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_16_to_30_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_16_to_30_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											borderBottom: '3px solid white',
											color: 'black',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										31-45
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderBottom: '3px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderBottom: '3px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_31_to_45_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_31_to_45_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderBottom: '3px solid white',
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_31_to_45_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_31_to_45_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											borderBottom: '3px solid white',
											color: 'black',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										31-45
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderBottom: '3px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderBottom: '3px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_31_to_45_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_31_to_45_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderBottom: '3px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_31_to_45_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_31_to_45_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											fontSize: ['12px', '14px'],
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										46-60
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_46_to_60_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_46_to_60_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_46_to_60_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_46_to_60_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											fontSize: ['12px', '14px'],
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										41-60
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_46_to_60_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_46_to_60_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_46_to_60_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_46_to_60_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											fontSize: ['12px', '16px'],
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										61-75
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_61_to_75_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_61_to_75_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_61_to_75_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_61_to_75_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											fontSize: ['12px', '16px'],
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										61-75
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_61_to_75_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_61_to_75_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_61_to_75_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_61_to_75_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											fontSize: ['12px', '14px'],
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										76-90
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_76_to_90_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_76_to_90_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_76_to_90_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_76_to_90_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											fontSize: ['12px', '14px'],
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										76-90
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_76_to_90_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_76_to_90_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_76_to_90_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_76_to_90_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											bgcolor: 'white',
											p: 0,
											py: 0.5,
											pt: 2,
											borderBottom: '0px'
										}}
										align="center"
										colSpan={2}>
										<Box
											component="img"
											src={`https://cdn.footystats.org/img/${data.home_image}`}
											height="30px"
										/>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: 'white',
											p: 0,
											py: 0.5,
											pt: 2,
											borderBottom: '0px',
											borderRight: '1px solid white'
										}}
										colSpan={7}
										align="center">
										<Stack direction="column" alignItems="center">
											<Typography
												sx={{
													display: '-webkit-box',
													WebkitBoxOrient: 'vertical',
													WebkitLineClamp: '1',
													overflow: 'hidden'
												}}
												textTransform="uppercase"
												color="#007fc3"
												fontSize={['12px', '14px']}
												fontWeight={700}>
												{showTextEllipsis(data?.home_name)}
											</Typography>
											<Typography
												fontSize={['12px', '14px']}
												textTransform="uppercase"
												color="black"
												fontWeight={700}>
												Acasa
											</Typography>
										</Stack>
									</TableCell>

									<TableCell
										sx={{
											bgcolor: 'white',
											p: 0,
											py: 0.5,
											pt: 2,
											borderBottom: '0px'
										}}
										align="center"
										colSpan={2}>
										<Box
											component="img"
											src={`https://cdn.footystats.org/img/${data.away_image}`}
											height="30px"
										/>
									</TableCell>

									<TableCell
										sx={{
											p: 0,
											py: 0.5,
											pt: 2,
											bgcolor: 'white',
											borderBottom: '0px',
											borderRight: '1px solid white'
										}}
										colSpan={7}
										align="center">
										<Stack direction="column" alignItems="center">
											<Typography
												sx={{
													display: '-webkit-box',
													WebkitBoxOrient: 'vertical',
													WebkitLineClamp: '1',
													overflow: 'hidden'
												}}
												textTransform="uppercase"
												color="#dc271e"
												fontSize={['12px', '14px']}
												fontWeight={700}>
												{showTextEllipsis(data?.away_name)}
											</Typography>
											<Typography
												fontSize={['12px', '14px']}
												textTransform="uppercase"
												color="black"
												fontWeight={700}>
												Deplasare
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											color: 'black',
											bgcolor: '#e0e0e0',
											textTransform: 'uppercase',
											fontWeight: 600,
											fontSize: '12px',
											p: 0.5
										}}>
										Prima Repriza
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_0_to_15_home +
													homeTeamData?.stats?.goals_scored_min_16_to_30_home +
													homeTeamData?.stats?.goals_scored_min_31_to_45_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_0_to_15_home +
													homeTeamData?.stats?.goals_conceded_min_16_to_30_home +
													homeTeamData?.stats?.goals_conceded_min_31_to_45_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={
													homeTeamData?.stats?.goals_scored_min_0_to_15_home +
													homeTeamData?.stats?.goals_scored_min_16_to_30_home +
													homeTeamData?.stats?.goals_scored_min_31_to_45_home
												}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={
													homeTeamData?.stats?.goals_conceded_min_0_to_15_home +
													homeTeamData?.stats?.goals_conceded_min_16_to_30_home +
													homeTeamData?.stats?.goals_conceded_min_31_to_45_home
												}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											color: 'black',
											bgcolor: '#e0e0e0',
											textTransform: 'uppercase',
											fontWeight: 600,
											fontSize: '12px',
											p: 0.5
										}}>
										Prima Repriza
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_0_to_15_away +
													awayTeamData?.stats?.goals_scored_min_16_to_30_away +
													awayTeamData?.stats?.goals_scored_min_31_to_45_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_0_to_15_away +
													awayTeamData?.stats?.goals_conceded_min_16_to_30_away +
													awayTeamData?.stats?.goals_conceded_min_31_to_45_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={
													awayTeamData?.stats?.goals_scored_min_0_to_15_away +
													awayTeamData?.stats?.goals_scored_min_16_to_30_away +
													awayTeamData?.stats?.goals_scored_min_31_to_45_away
												}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={
													awayTeamData?.stats?.goals_conceded_min_0_to_15_away +
													awayTeamData?.stats?.goals_conceded_min_16_to_30_away +
													awayTeamData?.stats?.goals_conceded_min_31_to_45_away
												}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											textAlign: 'center',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											fontSize: '12px',
											p: 0.5
										}}>
										A DOUA REPRIZA
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.scored_2hg_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.conceded_2hg_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.scored_2hg_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.conceded_2hg_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											fontSize: '12px',
											textAlign: 'center',
											p: 0.5
										}}>
										A DOUA REPRIZA
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.scored_2hg_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.conceded_2hg_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={5}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.scored_2hg_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.conceded_2hg_home}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={9}
										align="center"
										sx={{
											color: 'black',
											borderTop: '2px solid white',
											textAlign: 'center',
											bgcolor: '#f7f7f7',
											fontWeight: 700,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										GM-{' '}
										<Typography fontSize={['12px', '14px']} component="span" color="#339933">
											Goluri Marcate
										</Typography>
									</TableCell>

									<TableCell
										colSpan={9}
										align="center"
										sx={{
											color: 'black',
											borderTop: '2px solid white',
											textAlign: 'center',
											bgcolor: '#f7f7f7',
											fontWeight: 700,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										GP-{' '}
										<Typography fontSize={['12px', '14px']} component="span" color="#ff0000">
											Goluri Primite
										</Typography>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>

					<TableContainer sx={{ display: { xs: 'block', md: 'none' } }}>
						<Table sx={{ borderSpacing: 'separate', tableLayout: 'fixed', width: '100%' }}>
							<TableHead>
								<TableRow>
									<TableCell
										sx={{
											bgcolor: 'white',
											p: 0,
											py: 0.5,
											borderBottom: '0px',
											borderRight: '1px solid white'
										}}
										colSpan={6}
										align="center">
										<Stack direction="column" alignItems="center">
											<Typography
												sx={{
													display: '-webkit-box',
													WebkitBoxOrient: 'vertical',
													WebkitLineClamp: '1',
													overflow: 'hidden'
												}}
												textTransform="uppercase"
												color="#007fc3"
												fontSize={['12px', '14px']}
												fontWeight={700}>
												{showTextEllipsis(data?.home_name)}
											</Typography>
											<Typography
												fontSize={['12px', '14px']}
												textTransform="uppercase"
												color="black"
												fontWeight={700}>
												Acasa
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											p: 0,
											py: 0.5,
											bgcolor: 'white',
											borderBottom: '0px',
											borderRight: '1px solid white'
										}}
										colSpan={6}
										align="center">
										<Stack direction="column" alignItems="center">
											<Typography
												sx={{
													display: '-webkit-box',
													WebkitBoxOrient: 'vertical',
													WebkitLineClamp: '1',
													overflow: 'hidden'
												}}
												textTransform="uppercase"
												color="#dc271e"
												fontSize={['12px', '14px']}
												fontWeight={700}>
												{showTextEllipsis(data?.away_name)}
											</Typography>
											<Typography
												fontSize={['12px', '14px']}
												textTransform="uppercase"
												color="black"
												fontWeight={700}>
												Deplasare
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											p: 0.5
										}}>
										0-15
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_0_to_15_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_0_to_15_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_0_to_15_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_0_to_15_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											p: 0.5
										}}>
										0-15
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_0_to_15_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_0_to_15_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_0_to_15_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_0_to_15_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#f7f7f7',
											fontWeight: 600,
											p: 0.5
										}}>
										16-30
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_16_to_30_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_16_to_30_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_16_to_30_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_16_to_30_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#f7f7f7',
											fontWeight: 600,
											p: 0.5
										}}>
										16-30
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_16_to_30_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_16_to_30_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_16_to_30_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_16_to_30_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											p: 0.5
										}}>
										31-45
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_31_to_45_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_31_to_45_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_31_to_45_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_31_to_45_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											p: 0.5
										}}>
										31-45
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_31_to_45_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_31_to_45_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_31_to_45_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_31_to_45_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#f7f7f7',
											fontWeight: 600,
											p: 0.5
										}}>
										46-60
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_46_to_60_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_46_to_60_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_46_to_60_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_46_to_60_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#f7f7f7',
											fontWeight: 600,
											p: 0.5
										}}>
										41-60
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_46_to_60_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_46_to_60_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_46_to_60_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_46_to_60_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											p: 0.5
										}}>
										61-75
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_61_to_75_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_61_to_75_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_61_to_75_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_61_to_75_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											p: 0.5
										}}>
										61-75
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_61_to_75_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_61_to_75_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_61_to_75_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_61_to_75_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#f7f7f7',
											fontWeight: 600,
											p: 0.5
										}}>
										76-90
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_76_to_90_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_76_to_90_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.goals_scored_min_76_to_90_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.goals_conceded_min_76_to_90_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#f7f7f7',
											fontWeight: 600,
											p: 0.5
										}}>
										76-90
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_76_to_90_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_76_to_90_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#f7f7f7',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.goals_scored_min_76_to_90_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.goals_conceded_min_76_to_90_away}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											bgcolor: 'white',
											p: 0,
											py: 0.5,
											pt: 2,
											borderBottom: '0px',
											borderRight: '1px solid white'
										}}
										colSpan={6}
										align="center">
										<Stack direction="column" alignItems="center">
											<Typography
												sx={{
													display: '-webkit-box',
													WebkitBoxOrient: 'vertical',
													WebkitLineClamp: '1',
													overflow: 'hidden'
												}}
												textTransform="uppercase"
												color="#007fc3"
												fontSize={['12px', '14px']}
												fontWeight={700}>
												{data?.home_name}
											</Typography>
											<Typography
												fontSize={['12px', '14px']}
												textTransform="uppercase"
												color="black"
												fontWeight={700}>
												Acasa
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											p: 0,
											py: 0.5,
											pt: 2,
											bgcolor: 'white',
											borderBottom: '0px',
											borderRight: '1px solid white'
										}}
										colSpan={6}
										align="center">
										<Stack direction="column" alignItems="center">
											<Typography
												sx={{
													display: '-webkit-box',
													WebkitBoxOrient: 'vertical',
													WebkitLineClamp: '1',
													overflow: 'hidden'
												}}
												textTransform="uppercase"
												color="#dc271e"
												fontSize={['12px', '14px']}
												fontWeight={700}>
												{data?.away_name}
											</Typography>
											<Typography
												fontSize={['12px', '14px']}
												textTransform="uppercase"
												color="black"
												fontWeight={700}>
												Deplasare
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											color: 'black',
											textTransform: 'uppercase',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											fontSize: '12px',
											p: 0.5
										}}>
										Prima Repriza
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_scored_min_0_to_15_home +
													homeTeamData?.stats?.goals_scored_min_16_to_30_home +
													homeTeamData?.stats?.goals_scored_min_31_to_45_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.goals_conceded_min_0_to_15_home +
													homeTeamData?.stats?.goals_conceded_min_16_to_30_home +
													homeTeamData?.stats?.goals_conceded_min_31_to_45_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={
													homeTeamData?.stats?.goals_scored_min_0_to_15_home +
													homeTeamData?.stats?.goals_scored_min_16_to_30_home +
													homeTeamData?.stats?.goals_scored_min_31_to_45_home
												}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={
													homeTeamData?.stats?.goals_conceded_min_0_to_15_home +
													homeTeamData?.stats?.goals_conceded_min_16_to_30_home +
													homeTeamData?.stats?.goals_conceded_min_31_to_45_home
												}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											color: 'black',
											bgcolor: '#e0e0e0',
											textTransform: 'uppercase',
											fontWeight: 600,
											fontSize: '12px',
											p: 0.5
										}}>
										Prima Repriza
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_scored_min_0_to_15_away +
													awayTeamData?.stats?.goals_scored_min_16_to_30_away +
													awayTeamData?.stats?.goals_scored_min_31_to_45_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.goals_conceded_min_0_to_15_away +
													awayTeamData?.stats?.goals_conceded_min_16_to_30_away +
													awayTeamData?.stats?.goals_conceded_min_31_to_45_away}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderTop: '8px solid white',
											borderBottom: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={
													awayTeamData?.stats?.goals_scored_min_0_to_15_away +
													awayTeamData?.stats?.goals_scored_min_16_to_30_away +
													awayTeamData?.stats?.goals_scored_min_31_to_45_away
												}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={
													awayTeamData?.stats?.goals_conceded_min_0_to_15_away +
													awayTeamData?.stats?.goals_conceded_min_16_to_30_away +
													awayTeamData?.stats?.goals_conceded_min_31_to_45_away
												}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											textAlign: 'center',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											fontSize: '12px',
											p: 0.5
										}}>
										A DOUA REPRIZA
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.scored_2hg_home}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{homeTeamData?.stats?.conceded_2hg_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											borderRight: '1px solid white',
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={homeTeamData?.stats?.scored_2hg_home}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={homeTeamData?.stats?.conceded_2hg_home}
											/>
										</Stack>
									</TableCell>

									<TableCell
										colSpan={2}
										align="center"
										sx={{
											color: 'black',
											bgcolor: '#e0e0e0',
											fontWeight: 600,
											fontSize: '12px',
											textAlign: 'center',
											p: 0.5
										}}>
										A DOUA REPRIZA
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GM
											</Typography>
											<Typography fontSize={['12px', '14px']} color="black" fontWeight={600}>
												GP
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										align="right"
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}>
										<Stack direction="column">
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.scored_2hg_away}
											</Typography>
											<Typography color="black" fontSize={['12px', '16px']} fontWeight={600}>
												{awayTeamData?.stats?.conceded_2hg_home}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell
										sx={{
											bgcolor: '#e0e0e0',
											p: 0.5
										}}
										colSpan={2}>
										<Stack direction="column" rowGap={1}>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#339933"
												progress={awayTeamData?.stats?.scored_2hg_away}
											/>
											<LinearProgressBar
												maxValue={25}
												progressBarColor="#ff0000"
												progress={awayTeamData?.stats?.conceded_2hg_home}
											/>
										</Stack>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={6}
										align="center"
										sx={{
											color: 'black',
											borderTop: '2px solid white',
											textAlign: 'center',
											bgcolor: '#f7f7f7',
											fontWeight: 700,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										GM-{' '}
										<Typography fontSize={['12px', '14px']} component="span" color="#339933">
											Goluri Marcate
										</Typography>
									</TableCell>

									<TableCell
										colSpan={6}
										align="center"
										sx={{
											color: 'black',
											borderTop: '2px solid white',
											textAlign: 'center',
											bgcolor: '#f7f7f7',
											fontSize: ['12px', '14px'],
											fontWeight: 700,
											p: 0.5
										}}>
										GP-{' '}
										<Typography fontSize={['12px', '14px']} component="span" color="#ff0000">
											Goluri Primite
										</Typography>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
			<Grid container gap={2}>
				<Grid xs={5.6} md={2.8}>
					<PositionsTable
						color="#007fc3"
						homeTeam={data.home_name}
						awayTeam={data.away_name}
						title="Goluri Marcate Gazde/Meci"
						data={leagueTeams}
						showHomeTeamColor
						showMedie
						property="seasonScoredAVG_home"
						sort="desc"
					/>
				</Grid>
				<Grid xs={5.6} md={2.8}>
					<PositionsTable
						color="#dc271e"
						homeTeam={data.home_name}
						awayTeam={data.away_name}
						showAwayTeamColor
						showMedie
						title="Goluri Primite Oaspeți/Meci"
						data={leagueTeams}
						property="seasonConcededAVG_away"
						sort="asc"
					/>
				</Grid>
				<Grid xs={5.6} md={2.8}>
					<PositionsTable
						color="#dc271e"
						homeTeam={data.home_name}
						awayTeam={data.away_name}
						showAwayTeamColor
						showMedie
						title="Goluri Marcate Oaspeți/Meci"
						data={leagueTeams}
						property="seasonScoredAVG_away"
						sort="desc"
					/>
				</Grid>
				<Grid xs={5.6} md={2.8}>
					<PositionsTable
						color="#007fc3"
						homeTeam={data.home_name}
						awayTeam={data.away_name}
						showHomeTeamColor
						showMedie
						title="Goluri Primite Gazde/Meci"
						data={leagueTeams}
						property="seasonConcededAVG_home"
						sort="asc"
					/>
				</Grid>
			</Grid>

			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				mt={1}
				textTransform="uppercase"
				color={theme.heading}
				fontSize={['20px', '30px']}>
				Statistici Suturi
			</Typography>

			<TableContainer sx={{ mt: -2 }}>
				<Table sx={{ borderCollapse: 'separate' }}>
					<TableHead>
						<TableRow>
							<TableCell
								align="right"
								colSpan={2}
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: '14px' }}>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="flex-end"
									gap={[0.5, 1.5]}>
									<Typography
										color="#323232"
										fontWeight={900}
										whiteSpace="nowrap"
										fontSize={['12px', '14px']}
										component="h1">
										{showTextEllipsis(data.home_name)}
									</Typography>
									<Box
										component="img"
										src={`https://cdn.footystats.org/img/${data.home_image}`}
										height={['16px', '20px']}
									/>
								</Stack>
							</TableCell>
							<TableCell sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: '14px' }} />
							<TableCell
								align="left"
								colSpan={2}
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: ['12px', '14px'] }}>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="flex-start"
									gap={[0.5, 1.5]}>
									<Box
										component="img"
										src={`https://cdn.footystats.org/img/${data.away_image}`}
										height={['16px', '20px']}
									/>
									<Typography
										color="#323232"
										fontWeight={900}
										whiteSpace="nowrap"
										fontSize={['12px', '14px']}
										component="h1">
										{showTextEllipsis(data.away_name)}
									</Typography>
								</Stack>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#007fc3',
									color: 'white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Șuturi pe Poartă/Gol
							</TableCell>
							<TableCell
								align="center"
								sx={{
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: getMedieSuturiTeamColorForValue(
										homeTeamData?.stats?.additional_info?.shots_on_target_per_goals_scored_home
									),
									color: 'black',
									p: 0.5
								}}>
								{homeTeamData?.stats?.additional_info?.shots_on_target_per_goals_scored_home?.toFixed(
									2
								)}
							</TableCell>

							<TableCell
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: '14px' }}
								align="center"
							/>
							<TableCell
								align="center"
								sx={{
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: getMedieSuturiTeamColorForValue(
										awayTeamData?.stats?.additional_info?.shots_on_target_per_goals_scored_away
									),
									color: 'black',
									p: 0.5
								}}>
								{awayTeamData?.stats?.additional_info?.shots_on_target_per_goals_scored_away?.toFixed(
									2
								)}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#dc271e',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}>
								Șuturi pe Poartă/Gol
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>

			<Grid container gap={5}>
				<Grid sx={{ flexGrow: '1 !important' }} flexGrow={1} xs={12} md={'auto'}>
					<TableContainer>
						<Table sx={{ borderCollapse: 'separate' }}>
							<TableHead>
								<TableRow>
									<TableCell
										colSpan={5}
										sx={{
											borderBottom: 'none',
											bgcolor: '#e0e0e0',
											p: 1,
											fontSize: { xs: '16px', md: '18px' }
										}}
										align="center">
										Șuturi
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											color: '#007fc3',
											p: 1,
											pt: 2,
											py: 0,
											fontSize: '14px'
										}}
										align="right">
										<Stack
											direction="row"
											alignItems="center"
											justifyContent="flex-end"
											gap={[0.5, 1.5]}>
											<Typography
												color="#323232"
												fontWeight={900}
												whiteSpace="nowrap"
												fontSize={['12px', '14px']}
												component="h1">
												{showTextEllipsis(data.home_name)}
											</Typography>
											<Box
												component="img"
												src={`https://cdn.footystats.org/img/${data.home_image}`}
												height={['16px', '20px']}
											/>
										</Stack>
									</TableCell>
									<Box
										sx={{
											borderStyle: 'solid solid none solid',
											borderTopLeftRadius: '10px',
											borderTopRightRadius: '10px',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{ borderColor: 'white', p: 1, pt: 2, py: 0, fontSize: ['12px', '14px'] }}
											align="center">
											Pronostic
										</TableCell>
									</Box>
									<TableCell
										colSpan={2}
										sx={{
											color: '#dc271e',
											borderBottom: 'none',
											p: 1,
											pt: 2,
											py: 0,
											fontSize: ['12px', '14px']
										}}
										align="center">
										<Stack
											direction="row"
											alignItems="center"
											justifyContent="flex-start"
											gap={[0.5, 1.5]}>
											<Box
												component="img"
												src={`https://cdn.footystats.org/img/${data.away_image}`}
												height={['16px', '20px']}
											/>
											<Typography
												color="#323232"
												fontWeight={900}
												whiteSpace="nowrap"
												fontSize={['12px', '14px']}
												component="h1">
												{showTextEllipsis(data.away_name)}
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#007fc3',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}>
										Șuturi/meci
									</TableCell>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: getMedieSuturiTeamColorForValue(homeTeamData?.stats?.shotsAVG_home),
											color: 'black',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										{homeTeamData?.stats?.shotsAVG_home}
									</TableCell>
									<Box
										sx={{
											bgcolor: getMedieTotalSuturiColorForValue(
												getTotalValue(
													homeTeamData?.stats?.shotsAVG_home,
													awayTeamData?.stats?.shotsAVG_away
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getMedieTotalSuturiColorForValue(
													getTotalValue(
														homeTeamData?.stats?.shotsAVG_home,
														awayTeamData?.stats?.shotsAVG_away
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getTotalValue(
												homeTeamData?.stats?.shotsAVG_home,
												awayTeamData?.stats?.shotsAVG_away
											).toFixed(2)}
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getMedieSuturiTeamColorForValue(awayTeamData?.stats?.shotsAVG_away),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.shotsAVG_away}
									</TableCell>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#dc271e',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}>
										Șuturi/meci
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}
									/>
									<Box
										sx={{
											borderStyle: 'none solid solid solid',
											borderBottomLeftRadius: '10px',
											borderBottomRightRadius: '10px',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
									</Box>
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ p: 0.5, borderBottom: '1px solid white' }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
									<Box
										sx={{
											borderStyle: 'solid solid none solid',
											borderTopLeftRadius: '10px',
											borderTopRightRadius: '10px',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{ borderColor: 'white', p: 1, py: 0, pt: 1, fontSize: ['12px', '14px'] }}
											align="center">
											Medie
										</TableCell>
									</Box>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#007fc3',
											color: 'white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										+ 24.5 Șuturi
									</TableCell>
									<TableCell
										align="center"
										sx={{
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: getSuturiPercentageColorForValue(
												homeTeamData?.stats?.additional_info?.match_shots_over245_percentage_home
											),
											color: 'black',
											p: 0.5
										}}>
										{homeTeamData?.stats?.additional_info?.match_shots_over245_percentage_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												getMedianValue(
													homeTeamData?.stats?.additional_info?.match_shots_over245_percentage_home,
													awayTeamData?.stats?.additional_info?.match_shots_over245_percentage_away
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getSuturiPercentageColorForValue(
													getMedianValue(
														homeTeamData?.stats?.additional_info
															?.match_shots_over245_percentage_home,
														awayTeamData?.stats?.additional_info
															?.match_shots_over245_percentage_away
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.additional_info?.match_shots_over245_percentage_home,
												awayTeamData?.stats?.additional_info?.match_shots_over245_percentage_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											fontSize: ['12px', '14px'],
											bgcolor: getSuturiPercentageColorForValue(
												awayTeamData?.stats?.additional_info?.match_shots_over245_percentage_away
											),
											color: 'black',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.additional_info?.match_shots_over245_percentage_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#dc271e',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}>
										+ 24.5 Șuturi
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#007fc3',
											color: 'white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										+ 25.5 Șuturi
									</TableCell>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: getSuturiPercentageColorForValue(
												homeTeamData?.stats?.additional_info?.match_shots_over255_percentage_home
											),
											fontSize: ['12px', '14px'],
											color: 'black',
											p: 0.5
										}}>
										{homeTeamData?.stats?.additional_info?.match_shots_over255_percentage_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												getMedianValue(
													homeTeamData?.stats?.additional_info?.match_shots_over255_percentage_home,
													awayTeamData?.stats?.additional_info?.match_shots_over255_percentage_away
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getSuturiPercentageColorForValue(
													getMedianValue(
														homeTeamData?.stats?.additional_info
															?.match_shots_over255_percentage_home,
														awayTeamData?.stats?.additional_info
															?.match_shots_over255_percentage_away
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.additional_info?.match_shots_over255_percentage_home,
												awayTeamData?.stats?.additional_info?.match_shots_over255_percentage_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												awayTeamData?.stats?.additional_info?.match_shots_over255_percentage_away
											),
											fontSize: ['12px', '14px'],
											color: 'black',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.additional_info?.match_shots_over255_percentage_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#dc271e',
											color: 'white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										+ 25.5 Șuturi
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#007fc3',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}>
										+ 26.5 Șuturi
									</TableCell>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: getSuturiPercentageColorForValue(
												homeTeamData?.stats?.additional_info?.match_shots_over265_percentage_home
											),
											color: 'black',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										{homeTeamData?.stats?.additional_info?.match_shots_over265_percentage_home}%
									</TableCell>
									<Box
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												getMedianValue(
													homeTeamData?.stats?.additional_info?.match_shots_over265_percentage_home,
													awayTeamData?.stats?.additional_info?.match_shots_over265_percentage_away
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getSuturiPercentageColorForValue(
													getMedianValue(
														homeTeamData?.stats?.additional_info
															?.match_shots_over265_percentage_home,
														awayTeamData?.stats?.additional_info
															?.match_shots_over265_percentage_away
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.additional_info?.match_shots_over265_percentage_home,
												awayTeamData?.stats?.additional_info?.match_shots_over265_percentage_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												awayTeamData?.stats?.additional_info?.match_shots_over265_percentage_away
											),
											fontSize: ['12px', '14px'],
											color: 'black',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.additional_info?.match_shots_over265_percentage_away}%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#dc271e',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}>
										+ 26.5 Șuturi
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
									<Box
										sx={{
											borderStyle: 'none solid solid solid',
											borderBottomLeftRadius: '10px',
											borderBottomRightRadius: '10px',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{ borderColor: 'white', p: 1, py: 0, pt: 1, fontSize: ['12px', '14px'] }}
											align="center"></TableCell>
									</Box>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>

				<Grid sx={{ flexGrow: '1 !important' }} flexGrow={1} xs={12} md={'auto'}>
					<TableContainer>
						<Table sx={{ borderCollapse: 'separate' }}>
							<TableHead>
								<TableRow>
									<TableCell
										colSpan={5}
										sx={{
											borderBottom: 'none',
											bgcolor: '#e0e0e0',
											p: 1,
											fontSize: { xs: '16px', md: '18px' }
										}}
										align="center">
										Șuturi pe Poartă
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											color: '#007fc3',
											p: 1,
											pt: 2,
											py: 0,
											fontSize: '14px'
										}}
										align="right">
										<Stack
											direction="row"
											alignItems="center"
											justifyContent="flex-end"
											gap={[0.5, 1.5]}>
											<Typography
												color="#323232"
												fontWeight={900}
												whiteSpace="nowrap"
												fontSize={['12px', '14px']}
												component="h1">
												{showTextEllipsis(data.home_name)}
											</Typography>
											<Box
												component="img"
												src={`https://cdn.footystats.org/img/${data.home_image}`}
												height={['16px', '20px']}
											/>
										</Stack>
									</TableCell>
									<Box
										sx={{
											borderStyle: 'solid solid none solid',
											borderTopLeftRadius: '10px',
											borderTopRightRadius: '10px',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{ borderColor: 'white', p: 1, pt: 2, py: 0, fontSize: ['12px', '14px'] }}
											align="center">
											Pronostic
										</TableCell>
									</Box>
									<TableCell
										colSpan={2}
										sx={{
											color: '#dc271e',
											borderBottom: 'none',
											p: 1,
											pt: 2,
											py: 0,
											fontSize: ['12px', '14px']
										}}
										align="center">
										<Stack
											direction="row"
											alignItems="center"
											justifyContent="flex-start"
											gap={[0.5, 1.5]}>
											<Box
												component="img"
												src={`https://cdn.footystats.org/img/${data.away_image}`}
												height={['16px', '20px']}
											/>
											<Typography
												color="#323232"
												fontWeight={900}
												whiteSpace="nowrap"
												fontSize={['12px', '14px']}
												component="h1">
												{showTextEllipsis(data.away_name)}
											</Typography>
										</Stack>
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#007fc3',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}>
										Șuturi/meci
									</TableCell>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: getMedieSuturiTeamColorForValue(
												homeTeamData?.stats?.shotsOnTargetAVG_home
											),
											color: 'black',
											fontSize: ['12px', '14px'],
											p: 0.5
										}}>
										{homeTeamData?.stats?.shotsOnTargetAVG_home}
									</TableCell>
									<Box
										sx={{
											bgcolor: getMedieTotalSuturiColorForValue(
												getTotalValue(
													homeTeamData?.stats?.shotsOnTargetAVG_home,
													awayTeamData?.stats?.shotsOnTargetAVG_away
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getMedieTotalSuturiColorForValue(
													getTotalValue(
														homeTeamData?.stats?.shotsOnTargetAVG_home,
														awayTeamData?.stats?.shotsOnTargetAVG_away
													)
												),
												fontSize: ['12px', '14px'],
												p: 0.5
											}}>
											{getTotalValue(
												homeTeamData?.stats?.shotsOnTargetAVG_home,
												awayTeamData?.stats?.shotsOnTargetAVG_away
											).toFixed(2)}
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getMedieSuturiTeamColorForValue(
												awayTeamData?.stats?.shotsOnTargetAVG_away
											),
											color: 'black',
											fontSize: ['12px', '14px'],
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{awayTeamData?.stats?.shotsOnTargetAVG_away}
									</TableCell>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#dc271e',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}>
										Șuturi/meci
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
									<Box
										sx={{
											borderStyle: 'none solid solid solid',
											borderBottomLeftRadius: '10px',
											borderBottomRightRadius: '10px',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{ borderColor: 'white', p: 1, py: 0, pt: 1, fontSize: ['12px', '14px'] }}
											align="center"></TableCell>
									</Box>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}
									/>
									<TableCell align="center" sx={{ p: 0.5, borderBottom: '1px solid white' }} />
									<TableCell
										align="center"
										sx={{
											color: 'white',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											fontWeight: 600,
											fontSize: ['12px', '14px'],
											p: 0.5
										}}
									/>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											color: 'white',
											fontSize: ['12px', '14px'],
											fontWeight: 600,
											p: 0.5
										}}
									/>
								</TableRow>

								<TableRow>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
									<Box
										sx={{
											borderStyle: 'solid solid none solid',
											borderTopLeftRadius: '10px',
											borderTopRightRadius: '10px',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{ borderColor: 'white', p: 1, py: 0, pt: 1, fontSize: ['12px', '14px'] }}
											align="center">
											Medie
										</TableCell>
									</Box>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
								</TableRow>
								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#007fc3',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}>
										+ 7.5 Șuturi
									</TableCell>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: getSuturiPercentageColorForValue(
												homeTeamData?.stats?.additional_info
													?.match_shots_on_target_over75_percentage_home
											),
											color: 'black',
											p: 0.5
										}}>
										{
											homeTeamData?.stats?.additional_info
												?.match_shots_on_target_over75_percentage_home
										}
										%
									</TableCell>
									<Box
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												getMedianValue(
													homeTeamData?.stats?.additional_info
														?.match_shots_on_target_over75_percentage_home,
													awayTeamData?.stats?.additional_info
														?.match_shots_on_target_over75_percentage_away
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getSuturiPercentageColorForValue(
													getMedianValue(
														homeTeamData?.stats?.additional_info
															?.match_shots_on_target_over75_percentage_home,
														awayTeamData?.stats?.additional_info
															?.match_shots_on_target_over75_percentage_away
													)
												),
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.additional_info
													?.match_shots_on_target_over75_percentage_home,
												awayTeamData?.stats?.additional_info
													?.match_shots_on_target_over75_percentage_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												awayTeamData?.stats?.additional_info
													?.match_shots_on_target_over75_percentage_away
											),
											color: 'black',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{
											awayTeamData?.stats?.additional_info
												?.match_shots_on_target_over75_percentage_away
										}
										%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#dc271e',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}>
										+ 7.5 Șuturi
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#007fc3',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}>
										+ 8.5 Șuturi
									</TableCell>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: getSuturiPercentageColorForValue(
												homeTeamData?.stats?.additional_info
													?.match_shots_on_target_over85_percentage_home
											),
											color: 'black',
											p: 0.5
										}}>
										{
											homeTeamData?.stats?.additional_info
												?.match_shots_on_target_over85_percentage_home
										}
										%
									</TableCell>
									<Box
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												getMedianValue(
													homeTeamData?.stats?.additional_info
														?.match_shots_on_target_over85_percentage_home,
													awayTeamData?.stats?.additional_info
														?.match_shots_on_target_over85_percentage_away
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getSuturiPercentageColorForValue(
													getMedianValue(
														homeTeamData?.stats?.additional_info
															?.match_shots_on_target_over85_percentage_home,
														awayTeamData?.stats?.additional_info
															?.match_shots_on_target_over85_percentage_away
													)
												),
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.additional_info
													?.match_shots_on_target_over85_percentage_home,
												awayTeamData?.stats?.additional_info
													?.match_shots_on_target_over85_percentage_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												awayTeamData?.stats?.additional_info
													?.match_shots_on_target_over85_percentage_away
											),
											color: 'black',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{
											awayTeamData?.stats?.additional_info
												?.match_shots_on_target_over85_percentage_away
										}
										%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#dc271e',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}>
										+ 8.5 Șuturi
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										align="right"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#007fc3',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}>
										+ 9.5 Șuturi
									</TableCell>
									<TableCell
										align="center"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: getSuturiPercentageColorForValue(
												homeTeamData?.stats?.additional_info
													?.match_shots_on_target_over95_percentage_home
											),
											color: 'black',
											p: 0.5
										}}>
										{
											homeTeamData?.stats?.additional_info
												?.match_shots_on_target_over95_percentage_home
										}
										%
									</TableCell>
									<Box
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												getMedianValue(
													homeTeamData?.stats?.additional_info
														?.match_shots_on_target_over95_percentage_home,
													awayTeamData?.stats?.additional_info
														?.match_shots_on_target_over95_percentage_away
												)
											),
											borderStyle: 'none solid none solid',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											align="center"
											sx={{
												borderColor: getSuturiPercentageColorForValue(
													getMedianValue(
														homeTeamData?.stats?.additional_info
															?.match_shots_on_target_over95_percentage_home,
														awayTeamData?.stats?.additional_info
															?.match_shots_on_target_over95_percentage_away
													)
												),
												p: 0.5
											}}>
											{getMedianValue(
												homeTeamData?.stats?.additional_info
													?.match_shots_on_target_over95_percentage_home,
												awayTeamData?.stats?.additional_info
													?.match_shots_on_target_over95_percentage_away
											)}
											%
										</TableCell>
									</Box>
									<TableCell
										align="center"
										sx={{
											bgcolor: getSuturiPercentageColorForValue(
												awayTeamData?.stats?.additional_info
													?.match_shots_on_target_over95_percentage_away
											),
											color: 'black',
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											p: 0.5
										}}>
										{
											awayTeamData?.stats?.additional_info
												?.match_shots_on_target_over95_percentage_away
										}
										%
									</TableCell>
									<TableCell
										align="left"
										sx={{
											borderBottom: '1px solid white',
											borderRight: '1px solid white',
											bgcolor: '#dc271e',
											color: 'white',
											fontWeight: 600,
											p: 0.5
										}}>
										+ 9.5 Șuturi
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
									<Box
										sx={{
											borderStyle: 'none solid solid solid',
											borderBottomLeftRadius: '10px',
											borderBottomRightRadius: '10px',
											borderColor: '#abd380',
											borderWidth: 'thick',
											marginLeft: 1,
											marginRight: 1,
											display: 'flex',
											justifyContent: 'center'
										}}>
										<TableCell
											sx={{ borderColor: 'white', p: 1, py: 0, pt: 1, fontSize: ['12px', '14px'] }}
											align="center"></TableCell>
									</Box>
									<TableCell
										colSpan={2}
										sx={{
											borderBottom: 'none',
											p: 1,
											py: 0,
											pt: 1,
											fontSize: ['12px', '14px']
										}}
										align="center"
									/>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>

			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				mt={1}
				textTransform="uppercase"
				color={theme.heading}
				fontSize={['20px', '30px']}>
				Statistici Cornere
			</Typography>

			<TableContainer sx={{ mt: -1 }}>
				<Table sx={{ borderCollapse: 'separate' }}>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: '14px' }}
								align="center"
								colSpan={2}>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="flex-end"
									gap={[0.5, 1.5]}>
									<Typography
										color="#323232"
										fontWeight={900}
										whiteSpace="nowrap"
										fontSize={['12px', '22px']}
										component="h1">
										{showTextEllipsis(data.home_name)}
									</Typography>
									<Box
										component="img"
										src={`https://cdn.footystats.org/img/${data.home_image}`}
										height={['20px', '24px']}
									/>
								</Stack>
							</TableCell>
							<Box
								sx={{
									borderStyle: 'solid solid none solid',
									borderTopLeftRadius: '10px',
									borderTopRightRadius: '10px',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									sx={{
										borderColor: 'white',
										fontWeight: 700,
										pb: 0,
										fontSize: ['12px', '14px']
									}}
									align="center">
									Medie
								</TableCell>
							</Box>
							<TableCell
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: ['12px', '22px'] }}
								colSpan={2}
								align="center">
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="flex-start"
									gap={[0.5, 1.5]}>
									<Box
										component="img"
										src={`https://cdn.footystats.org/img/${data.away_image}`}
										height={['20px', '24px']}
									/>
									<Typography
										color="#323232"
										fontWeight={900}
										whiteSpace="nowrap"
										fontSize={['12px', '22px']}
										component="h1">
										{showTextEllipsis(data.away_name)}
									</Typography>
								</Stack>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#007fc3',
									color: 'white',
									fontSize: ['10px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Cornere Obținute
							</TableCell>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									bgcolor: getMedieCornereColorForValue(homeTeamData?.stats?.cornersAVG_home),
									color: 'black',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								{homeTeamData?.stats?.cornersAVG_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: getMedieCornereColorForValue(
										getExactMedianValue(
											homeTeamData?.stats?.cornersAVG_home,
											awayTeamData?.stats?.cornersAgainstAVG_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getMedieCornereColorForValue(
											getExactMedianValue(
												homeTeamData?.stats?.cornersAVG_home,
												awayTeamData?.stats?.cornersAgainstAVG_away
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.cornersAVG_home,
										awayTeamData?.stats?.cornersAgainstAVG_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getMedieCornereColorForValue(
										awayTeamData?.stats?.cornersAgainstAVG_away
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.cornersAgainstAVG_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#dc271e',
									color: 'white',
									fontSize: ['10px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Cornere Încasate
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#007fc3',
									color: 'white',
									fontWeight: 600,
									fontSize: ['10px', '14px'],
									p: 0.5
								}}>
								Medie Cornere Încasate
							</TableCell>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									bgcolor: getMedieCornereColorForValue(
										homeTeamData?.stats?.cornersAgainstAVG_home
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									p: 0.5
								}}>
								{homeTeamData?.stats?.cornersAgainstAVG_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: getMedieCornereColorForValue(
										getExactMedianValue(
											homeTeamData?.stats?.cornersAgainstAVG_home,
											awayTeamData?.stats?.cornersAVG_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getMedieCornereColorForValue(
											getExactMedianValue(
												homeTeamData?.stats?.cornersAgainstAVG_home,
												awayTeamData?.stats?.cornersAVG_away
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.cornersAgainstAVG_home,
										awayTeamData?.stats?.cornersAVG_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getMedieCornereColorForValue(awayTeamData?.stats?.cornersAVG_away),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.cornersAVG_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#dc271e',
									color: 'white',
									fontSize: ['10px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Cornere Obținute
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<Box
								sx={{
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
							</Box>
							<TableCell
								align="center"
								sx={{
									color: 'white',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#e0e0e0',
									fontWeight: 600,
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Total Cornere
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: getMedieTotalCornereColorForValue(
										homeTeamData?.stats?.cornersTotalAVG_home
									),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									p: 0.5
								}}>
								{homeTeamData?.stats?.cornersTotalAVG_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: getMedieTotalCornereColorForValue(
										getExactMedianValue(
											homeTeamData?.stats?.cornersTotalAVG_home,
											awayTeamData?.stats?.cornersTotalAVG_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getMedieTotalCornereColorForValue(
											getExactMedianValue(
												homeTeamData?.stats?.cornersTotalAVG_home,
												awayTeamData?.stats?.cornersTotalAVG_away
											)
										),
										fontSize: ['12px', '14px'],
										...padding,
										fontWeight: 600
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.cornersTotalAVG_home,
										awayTeamData?.stats?.cornersTotalAVG_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getMedieTotalCornereColorForValue(
										awayTeamData?.stats?.cornersTotalAVG_away
									),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.cornersTotalAVG_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#e0e0e0',
									fontWeight: 600,
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Total Cornere
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<Box
								sx={{
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
							</Box>
							<TableCell
								align="center"
								sx={{
									color: 'white',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Meciuri cu + 8.5 Cornere
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: getCornerePercentageColorForValue(
										homeTeamData?.stats?.over85CornersPercentage_home
									),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderRight: '1px solid white',
									borderBottom: '1px solid white',
									p: 0.5
								}}>
								{homeTeamData?.stats?.over85CornersPercentage_home}%
							</TableCell>
							<Box
								sx={{
									bgcolor: getCornerePercentageColorForValue(
										Math.round(
											getMedianValue(
												homeTeamData?.stats?.over85CornersPercentage_home,
												awayTeamData?.stats?.over85CornersPercentage_away
											)
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getCornerePercentageColorForValue(
											Math.round(
												getMedianValue(
													homeTeamData?.stats?.over85CornersPercentage_home,
													awayTeamData?.stats?.over85CornersPercentage_away
												)
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getMedianValue(
										homeTeamData?.stats?.over85CornersPercentage_home,
										awayTeamData?.stats?.over85CornersPercentage_away
									)}
									%
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getCornerePercentageColorForValue(
										awayTeamData?.stats?.over85CornersPercentage_away
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.over85CornersPercentage_away}%
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Meciuri cu + 8.5 Cornere
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									p: 0.5,
									fontSize: ['12px', '14px'],
									fontWeight: 600
								}}>
								Meciuri cu + 9.5 Cornere
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: getCornerePercentageColorForValue(
										homeTeamData?.stats?.over95CornersPercentage_home
									),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderRight: '1px solid white',
									borderBottom: '1px solid white',
									p: 0.5
								}}>
								{homeTeamData?.stats?.over95CornersPercentage_home}%
							</TableCell>
							<Box
								sx={{
									bgcolor: getCornerePercentageColorForValue(
										Math.round(
											getMedianValue(
												homeTeamData?.stats?.over95CornersPercentage_home,
												awayTeamData?.stats?.over95CornersPercentage_away
											)
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getCornerePercentageColorForValue(
											Math.round(
												getMedianValue(
													homeTeamData?.stats?.over95CornersPercentage_home,
													awayTeamData?.stats?.over95CornersPercentage_away
												)
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getMedianValue(
										homeTeamData?.stats?.over95CornersPercentage_home,
										awayTeamData?.stats?.over95CornersPercentage_away
									)}
									%
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getCornerePercentageColorForValue(
										awayTeamData?.stats?.over95CornersPercentage_away
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.over95CornersPercentage_away}%
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									p: 0.5,
									fontSize: ['12px', '14px'],
									fontWeight: 600
								}}>
								Meciuri cu + 9.5 Cornere
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Meciuri cu + 10.5 Cornere
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: getCornerePercentageColorForValue(
										homeTeamData?.stats?.over105CornersPercentage_home
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderRight: '1px solid white',
									borderBottom: '1px solid white',
									p: 0.5
								}}>
								{homeTeamData?.stats?.over105CornersPercentage_home}%
							</TableCell>
							<Box
								sx={{
									bgcolor: getCornerePercentageColorForValue(
										Math.round(
											getMedianValue(
												homeTeamData?.stats?.over95CornersPercentage_home,
												awayTeamData?.stats?.over95CornersPercentage_away
											)
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getCornerePercentageColorForValue(
											Math.round(
												getMedianValue(
													homeTeamData?.stats?.over95CornersPercentage_home,
													awayTeamData?.stats?.over95CornersPercentage_away
												)
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getMedianValue(
										homeTeamData?.stats?.over105CornersPercentage_home,
										awayTeamData?.stats?.over105CornersPercentage_away
									)}
									%
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getCornerePercentageColorForValue(
										awayTeamData?.stats?.over105CornersPercentage_away
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.over105CornersPercentage_away}%
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Meciuri cu 10.5 Cornere
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								colSpan={2}
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: ['none', '1px solid white'],
									bgcolor: '#e0e0e0',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Rezultate Cornere Recente Gazde
							</TableCell>

							<Box
								sx={{
									borderStyle: 'none solid solid solid',
									borderBottomLeftRadius: '10px',
									borderBottomRightRadius: '10px',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell sx={{ borderColor: 'white' }} />
							</Box>
							<TableCell
								align="left"
								colSpan={2}
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									borderLeft: 'none',
									bgcolor: '#e0e0e0',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Rezultate Cornere Recente Oaspeti
							</TableCell>
						</TableRow>

						{homeTeamMatches &&
							awayTeamMatches &&
							[0, 1, 2, 3, 4].map((row, index) => (
								<React.Fragment key={row}>
									<TableRow>
										<TableCell
											align="right"
											sx={{
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												color: 'white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
										<TableCell
											align="center"
											sx={{
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												color: 'white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
										<TableCell
											align="center"
											sx={{
												p: 0.5,
												borderBottom: '1px solid white'
											}}
										/>
										<TableCell
											align="center"
											sx={{
												color: 'white',
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
										<TableCell
											align="left"
											sx={{
												display: ['none', 'table-cell'],
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												color: 'white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
									</TableRow>
									<TableRow>
										<TableCell
											colSpan={2}
											sx={{
												borderRight: 'none',
												borderBottom: 'none',
												px: 0,
												py: 0,
												fontSize: '14px'
											}}>
											<Stack gap={1} direction="row" justifyContent="center" alignItems="center">
												<Stack
													flex={1}
													bgcolor={
														(homeTeamMatches[index]?.statistics?.[0]?.statistics?.[7]?.value ?? 0) >
														(homeTeamMatches[index]?.statistics?.[1]?.statistics?.[7]?.value ?? 0)
															? '#d3fcd1'
															: (homeTeamMatches[index]?.statistics?.[0]?.statistics?.[7]?.value ??
																		0) ===
																  (homeTeamMatches[index]?.statistics?.[1]?.statistics?.[7]
																		?.value ?? 0)
																? '#fcf2d1'
																: '#fcd1d1'
													}
													direction="column"
													alignItems="flex-end"
													px={1}
													py={0.25}
													gap={0.5}>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Typography
															whiteSpace="nowrap"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{homeTeamMatches[index]?.teams?.home?.name
																? showTextEllipsis(homeTeamMatches[index]?.teams?.home?.name)
																: 'Not Available'}
														</Typography>
														<Box
															component="img"
															src={homeTeamMatches[index]?.teams?.home?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
													</Stack>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Typography
															whiteSpace="nowrap"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{homeTeamMatches[index]?.teams?.away?.name
																? showTextEllipsis(homeTeamMatches[index]?.teams?.away?.name)
																: 'Not Available'}
														</Typography>
														<Box
															component="img"
															src={homeTeamMatches[index]?.teams?.away?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
													</Stack>
												</Stack>
												<Stack
													bgcolor={
														(homeTeamMatches[index]?.statistics?.[0]?.statistics?.[7]?.value ?? 0) >
														(homeTeamMatches[index]?.statistics?.[1]?.statistics?.[7]?.value ?? 0)
															? '#d3fcd1'
															: (homeTeamMatches[index]?.statistics?.[0]?.statistics?.[7]?.value ??
																		0) ===
																  (homeTeamMatches[index]?.statistics?.[1]?.statistics?.[7]
																		?.value ?? 0)
																? '#fcf2d1'
																: '#fcd1d1'
													}
													direction="column"
													px={1.5}
													py={0.25}
													gap={0.5}>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{homeTeamMatches[index]?.statistics?.[0]?.statistics?.[7]?.value !==
														undefined
															? homeTeamMatches[index]?.statistics?.[0]?.statistics?.[7]?.value ?? 0
															: -1}
													</Typography>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{homeTeamMatches[index]?.statistics?.[1]?.statistics?.[7]?.value !==
														undefined
															? homeTeamMatches[index]?.statistics?.[1]?.statistics?.[7]?.value ?? 0
															: -1}
													</Typography>
												</Stack>
											</Stack>
										</TableCell>
										<TableCell
											sx={{
												borderBottom: 'none',
												p: 1,
												py: 0,
												fontSize: '14px'
											}}
										/>
										<TableCell
											colSpan={2}
											sx={{
												borderLeft: 'none',
												borderBottom: 'none',
												px: 0,
												py: 0,
												fontSize: '14px'
											}}>
											<Stack gap={1} direction="row">
												<Stack
													bgcolor={
														(awayTeamMatches[index]?.statistics?.[1]?.statistics?.[7]?.value ?? 0) >
														(awayTeamMatches[index]?.statistics?.[0]?.statistics?.[7]?.value ?? 0)
															? '#d3fcd1'
															: (awayTeamMatches[index]?.statistics?.[1]?.statistics?.[7]?.value ??
																		0) ===
																  (awayTeamMatches[index]?.statistics?.[0]?.statistics?.[7]
																		?.value ?? 0)
																? '#fcf2d1'
																: '#fcd1d1'
													}
													direction="column"
													px={1.5}
													py={0.25}
													gap={0.5}>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{awayTeamMatches[index]?.statistics?.[0]?.statistics?.[7]?.value !==
														undefined
															? awayTeamMatches[index]?.statistics?.[0]?.statistics?.[7]?.value ?? 0
															: -1}
													</Typography>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{awayTeamMatches[index]?.statistics?.[1]?.statistics?.[7]?.value !==
														undefined
															? awayTeamMatches[index]?.statistics?.[1]?.statistics?.[7]?.value ?? 0
															: -1}
													</Typography>
												</Stack>
												<Stack
													flex={1}
													bgcolor={
														(awayTeamMatches[index]?.statistics?.[1]?.statistics?.[7]?.value ?? 0) >
														(awayTeamMatches[index]?.statistics?.[0]?.statistics?.[7]?.value ?? 0)
															? '#d3fcd1'
															: (awayTeamMatches[index]?.statistics?.[1]?.statistics?.[7]?.value ??
																		0) ===
																  (awayTeamMatches[index]?.statistics?.[0]?.statistics?.[7]
																		?.value ?? 0)
																? '#fcf2d1'
																: '#fcd1d1'
													}
													direction="column"
													alignItems="flex-start"
													px={1}
													py={0.25}
													gap={0.5}>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Box
															component="img"
															src={awayTeamMatches[index]?.teams?.home?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
														<Typography
															sx={{
																display: '-webkit-box',
																WebkitBoxOrient: 'vertical',
																WebkitLineClamp: '1'
															}}
															overflow="hidden"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{awayTeamMatches[index]?.teams?.home?.name
																? showTextEllipsis(awayTeamMatches[index]?.teams?.home?.name)
																: 'Not Available'}
														</Typography>
													</Stack>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Box
															component="img"
															src={awayTeamMatches[index]?.teams?.away?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
														<Typography
															sx={{
																display: '-webkit-box',
																WebkitBoxOrient: 'vertical',
																WebkitLineClamp: '1'
															}}
															overflow="hidden"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{awayTeamMatches[index]?.teams?.away?.name
																? showTextEllipsis(awayTeamMatches[index]?.teams?.away?.name)
																: 'Not Available'}
														</Typography>
													</Stack>
												</Stack>
											</Stack>
										</TableCell>
									</TableRow>
								</React.Fragment>
							))}
					</TableBody>
				</Table>
			</TableContainer>

			<Grid container gap={2}>
				<Grid xs={5.6} md={2.8}>
					<PositionsTable
						color="#007fc3"
						homeTeam={data.home_name}
						awayTeam={data.away_name}
						title="Cornere Obținute Gazde/Meci"
						data={leagueTeams}
						showHomeTeamColor
						showMedie
						isCorner
						property="cornersAVG_home"
						sort="desc"
					/>
				</Grid>
				<Grid xs={5.6} md={2.8}>
					<PositionsTable
						color="#dc271e"
						homeTeam={data.home_name}
						awayTeam={data.away_name}
						showAwayTeamColor
						showMedie
						isCorner
						title="Cornere Încasate Oaspeți/Meci"
						data={leagueTeams}
						property="cornersAgainstAVG_away"
						sort="asc"
					/>
				</Grid>
				<Grid xs={5.6} md={2.8}>
					<PositionsTable
						color="#dc271e"
						homeTeam={data.home_name}
						awayTeam={data.away_name}
						showAwayTeamColor
						showMedie
						isCorner
						title="Cornere Obținute Oaspeți/Meci"
						data={leagueTeams}
						property="cornersAVG_away"
						sort="desc"
					/>
				</Grid>
				<Grid xs={5.6} md={2.8}>
					<PositionsTable
						color="#007fc3"
						homeTeam={data.home_name}
						awayTeam={data.away_name}
						showHomeTeamColor
						showMedie
						isCorner
						title="Cornere Încasate Gazde/Meci"
						data={leagueTeams}
						property="cornersAgainstAVG_home"
						sort="asc"
					/>
				</Grid>
			</Grid>

			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				mt={1}
				textTransform="uppercase"
				color={theme.heading}
				fontSize={['20px', '30px']}>
				Statistici Faulturi
			</Typography>

			<TableContainer sx={{ mt: -1 }}>
				<Table sx={{ borderCollapse: 'separate' }}>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: '14px' }}
								align="center"
								colSpan={2}>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="flex-end"
									gap={[0.5, 1.5]}>
									<Typography
										color="#323232"
										fontWeight={900}
										whiteSpace="nowrap"
										fontSize={['12px', '22px']}
										sx={{
											display: '-webkit-box',
											WebkitBoxOrient: 'vertical',
											WebkitLineClamp: '1',
											overflow: 'hidden'
										}}
										component="h1">
										{showTextEllipsis(data.home_name)}
									</Typography>
									<Box
										component="img"
										src={`https://cdn.footystats.org/img/${data.home_image}`}
										height={['20px', '24px']}
									/>
								</Stack>
							</TableCell>
							<Box
								sx={{
									borderStyle: 'solid solid none solid',
									borderTopLeftRadius: '10px',
									borderTopRightRadius: '10px',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									sx={{
										borderColor: 'white',
										fontWeight: 700,
										pb: 0,
										fontSize: ['12px', '14px']
									}}
									align="center">
									Medie
								</TableCell>
							</Box>
							<TableCell
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: ['12px', '22px'] }}
								colSpan={2}
								align="center">
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="flex-start"
									gap={[0.5, 1.5]}>
									<Box
										component="img"
										src={`https://cdn.footystats.org/img/${data.away_image}`}
										height={['20px', '24px']}
									/>
									<Typography
										color="#323232"
										fontWeight={900}
										whiteSpace="nowrap"
										sx={{
											display: '-webkit-box',
											WebkitBoxOrient: 'vertical',
											WebkitLineClamp: '1',
											overflow: 'hidden'
										}}
										fontSize={['12px', '22px']}
										component="h1">
										{showTextEllipsis(data.away_name)}
									</Typography>
								</Stack>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#007fc3',
									color: 'white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Faulturi Comise
							</TableCell>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									bgcolor: getMedieFaulturiColorForValue(homeTeamData?.stats?.foulsAVG_home),
									color: 'black',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								{homeTeamData?.stats?.foulsAVG_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: getMedieFaulturiColorForValue(
										getExactMedianValue(
											homeTeamData?.stats?.foulsAVG_home,
											awayTeamData?.stats?.additional_info?.fouls_against_avg_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getMedieFaulturiColorForValue(
											getExactMedianValue(
												homeTeamData?.stats?.foulsAVG_home,
												awayTeamData?.stats?.additional_info?.fouls_against_avg_away
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.foulsAVG_home,
										awayTeamData?.stats?.additional_info?.fouls_against_avg_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getMedieFaulturiColorForValue(
										awayTeamData?.stats?.additional_info?.fouls_against_avg_away
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.additional_info?.fouls_against_avg_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#dc271e',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Faulturi Obținute
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#007fc3',
									color: 'white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Faulturi Obținute
							</TableCell>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									bgcolor: getMedieFaulturiColorForValue(
										homeTeamData?.stats?.additional_info?.fouls_against_avg_home
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									p: 0.5
								}}>
								{homeTeamData?.stats?.additional_info?.fouls_against_avg_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: getMedieFaulturiColorForValue(
										getExactMedianValue(
											homeTeamData?.stats?.additional_info?.fouls_against_avg_home,
											awayTeamData?.stats?.foulsAVG_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getMedieFaulturiColorForValue(
											getExactMedianValue(
												homeTeamData?.stats?.additional_info?.fouls_against_avg_home,
												awayTeamData?.stats?.foulsAVG_away
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.additional_info?.fouls_against_avg_home,
										awayTeamData?.stats?.foulsAVG_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getMedieFaulturiColorForValue(awayTeamData?.stats?.foulsAVG_away),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.foulsAVG_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#dc271e',
									color: 'white',
									fontSize: ['12px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Faulturi Comise
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<Box
								sx={{
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
							</Box>
							<TableCell
								align="center"
								sx={{
									color: 'white',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#e0e0e0',
									fontWeight: 600,
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Total Faulturi
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: getTotalMedieFaulturiColorForValue(
										homeTeamData?.stats?.foulsAVG_home +
											homeTeamData?.stats?.additional_info?.fouls_against_avg_home
									),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									p: 0.5
								}}>
								{(
									homeTeamData?.stats?.foulsAVG_home +
									homeTeamData?.stats?.additional_info?.fouls_against_avg_home
								).toFixed(2)}
							</TableCell>
							<Box
								sx={{
									bgcolor: getTotalMedieFaulturiColorForValue(
										getExactMedianValue(
											homeTeamData?.stats?.foulsAVG_home +
												homeTeamData?.stats?.additional_info?.fouls_against_avg_home,
											awayTeamData?.stats?.additional_info?.fouls_against_avg_away +
												awayTeamData?.stats?.foulsAVG_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: getTotalMedieFaulturiColorForValue(
											getExactMedianValue(
												homeTeamData?.stats?.foulsAVG_home +
													homeTeamData?.stats?.additional_info?.fouls_against_avg_home,
												awayTeamData?.stats?.additional_info?.fouls_against_avg_away +
													awayTeamData?.stats?.foulsAVG_away
											)
										),
										fontSize: ['12px', '14px'],
										...padding,
										fontWeight: 600
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.foulsAVG_home +
											homeTeamData?.stats?.additional_info?.fouls_against_avg_home,
										awayTeamData?.stats?.additional_info?.fouls_against_avg_away +
											awayTeamData?.stats?.foulsAVG_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: getTotalMedieFaulturiColorForValue(
										awayTeamData?.stats?.additional_info?.fouls_against_avg_away +
											awayTeamData?.stats?.foulsAVG_away
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{(
									awayTeamData?.stats?.additional_info?.fouls_against_avg_away +
									awayTeamData?.stats?.foulsAVG_away
								).toFixed(2)}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#e0e0e0',
									fontWeight: 600,
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Total Faulturi
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<Box
								sx={{
									borderStyle: 'none solid solid solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									borderBottomLeftRadius: '10px',
									borderBottomRightRadius: '10px',
									justifyContent: 'center'
								}}>
								<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
							</Box>
							<TableCell
								align="center"
								sx={{
									color: 'white',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>

			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				mt={1}
				textTransform="uppercase"
				color={theme.heading}
				fontSize={['20px', '30px']}>
				Statistici CARTONAȘE
			</Typography>

			<RefereeTable data={referee} />

			<TableContainer sx={{ mt: -1 }}>
				<Table sx={{ borderCollapse: 'separate' }}>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: '14px' }}
								align="center"
								colSpan={2}>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="flex-end"
									gap={[0.5, 1.5]}>
									<Typography
										color="#323232"
										fontWeight={900}
										whiteSpace="nowrap"
										fontSize={['12px', '22px']}
										sx={{
											display: '-webkit-box',
											WebkitBoxOrient: 'vertical',
											WebkitLineClamp: '1',
											overflow: 'hidden'
										}}
										component="h1">
										{showTextEllipsis(data.home_name)}
									</Typography>
									<Box
										component="img"
										src={`https://cdn.footystats.org/img/${data.home_image}`}
										height={['20px', '24px']}
									/>
								</Stack>
							</TableCell>
							<Box
								sx={{
									borderStyle: 'solid solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									borderTopLeftRadius: '10px',
									borderTopRightRadius: '10px',
									justifyContent: 'center'
								}}>
								<TableCell
									sx={{
										borderColor: 'white',
										fontWeight: 700,
										pb: 0,
										fontSize: ['12px', '14px']
									}}
									align="center">
									Medie
								</TableCell>
							</Box>
							<TableCell
								sx={{ borderBottom: 'none', p: 1, pb: 0, fontSize: ['12px', '22px'] }}
								colSpan={2}
								align="center">
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="flex-start"
									gap={[0.5, 1.5]}>
									<Box
										component="img"
										src={`https://cdn.footystats.org/img/${data.away_image}`}
										height={['20px', '24px']}
									/>
									<Typography
										color="#323232"
										fontWeight={900}
										whiteSpace="nowrap"
										sx={{
											display: '-webkit-box',
											WebkitBoxOrient: 'vertical',
											WebkitLineClamp: '1',
											overflow: 'hidden'
										}}
										fontSize={['12px', '22px']}
										component="h1">
										{showTextEllipsis(data.away_name)}
									</Typography>
								</Stack>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#007fc3',
									color: 'white',
									fontSize: ['10px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Cartonașe Primite
							</TableCell>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									bgcolor: medieCartonaseValueToColor(
										homeTeamData?.stats?.additional_info?.cards_for_avg_home
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									p: 0.5
								}}>
								{homeTeamData?.stats?.additional_info?.cards_for_avg_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: medieCartonaseValueToColor(
										getExactMedianValue(
											homeTeamData?.stats?.additional_info?.cards_for_avg_home,
											awayTeamData?.stats?.additional_info?.cards_against_avg_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: medieCartonaseValueToColor(
											getExactMedianValue(
												homeTeamData?.stats?.additional_info?.cards_for_avg_home,
												awayTeamData?.stats?.additional_info?.cards_against_avg_away
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.additional_info?.cards_for_avg_home,
										awayTeamData?.stats?.additional_info?.cards_against_avg_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: medieCartonaseValueToColor(
										awayTeamData?.stats?.additional_info?.cards_against_avg_away
									),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.additional_info?.cards_against_avg_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#dc271e',
									color: 'white',
									fontWeight: 600,
									fontSize: ['10px', '14px'],
									p: 0.5
								}}>
								Medie Cartonașe Adversari
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#007fc3',
									color: 'white',
									fontWeight: 600,
									fontSize: ['10px', '14px'],
									p: 0.5
								}}>
								Medie Cartonașe Adversari
							</TableCell>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									bgcolor: medieCartonaseValueToColor(
										homeTeamData?.stats?.additional_info?.cards_against_avg_home
									),
									color: 'black',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								{homeTeamData?.stats?.additional_info?.cards_against_avg_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: medieCartonaseValueToColor(
										getExactMedianValue(
											homeTeamData?.stats?.additional_info?.cards_against_avg_home,
											awayTeamData?.stats?.additional_info?.cards_for_avg_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: medieCartonaseValueToColor(
											getExactMedianValue(
												homeTeamData?.stats?.additional_info?.cards_against_avg_home,
												awayTeamData?.stats?.additional_info?.cards_for_avg_away
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.additional_info?.cards_against_avg_home,
										awayTeamData?.stats?.additional_info?.cards_for_avg_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: medieCartonaseValueToColor(
										awayTeamData?.stats?.additional_info?.cards_for_avg_away
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.additional_info?.cards_for_avg_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#dc271e',
									color: 'white',
									fontSize: ['10px', '14px'],
									fontWeight: 600,
									p: 0.5
								}}>
								Medie Cartonașe Primite
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<Box
								sx={{
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
							</Box>
							<TableCell
								align="center"
								sx={{
									color: 'white',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#e0e0e0',
									fontWeight: 600,
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Total Cartonașe
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: medieTotalCartonaseValueToColor(
										homeTeamData?.stats?.additional_info?.cards_total_avg_home
									),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									p: 0.5
								}}>
								{homeTeamData?.stats?.additional_info?.cards_total_avg_home}
							</TableCell>
							<Box
								sx={{
									bgcolor: medieTotalCartonaseValueToColor(
										getExactMedianValue(
											homeTeamData?.stats?.additional_info?.cards_total_avg_home,
											awayTeamData?.stats?.additional_info?.cards_total_avg_away
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: medieTotalCartonaseValueToColor(
											getExactMedianValue(
												homeTeamData?.stats?.additional_info?.cards_total_avg_home,
												awayTeamData?.stats?.additional_info?.cards_total_avg_away
											)
										),
										fontSize: ['12px', '14px'],
										...padding,
										fontWeight: 600
									}}>
									{getExactMedianValue(
										homeTeamData?.stats?.additional_info?.cards_total_avg_home,
										awayTeamData?.stats?.additional_info?.cards_total_avg_away
									).toFixed(2)}
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: medieTotalCartonaseValueToColor(
										awayTeamData?.stats?.additional_info?.cards_total_avg_away
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.additional_info?.cards_total_avg_away}
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#e0e0e0',
									fontWeight: 600,
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Total Cartonașe
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="center"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<Box
								sx={{
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell align="center" sx={{ borderColor: 'white', p: 0.5 }} />
							</Box>
							<TableCell
								align="center"
								sx={{
									color: 'white',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
							<TableCell
								align="left"
								sx={{
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									color: 'white',
									fontWeight: 600,
									p: 0.5
								}}
							/>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Meciuri cu + 3.5 Cartonașe
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: cartonasePlusValueToColor(
										homeTeamData?.stats?.over35CardsPercentage_home
									),
									color: 'black',
									borderRight: '1px solid white',
									borderBottom: '1px solid white',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								{homeTeamData?.stats?.over35CardsPercentage_home}%
							</TableCell>
							<Box
								sx={{
									bgcolor: cartonasePlusValueToColor(
										Math.round(
											getMedianValue(
												homeTeamData?.stats?.over35CardsPercentage_home,
												awayTeamData?.stats?.over35CardsPercentage_away
											)
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: cartonasePlusValueToColor(
											Math.round(
												getMedianValue(
													homeTeamData?.stats?.over35CardsPercentage_home,
													awayTeamData?.stats?.over35CardsPercentage_away
												)
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getMedianValue(
										homeTeamData?.stats?.over35CardsPercentage_home,
										awayTeamData?.stats?.over35CardsPercentage_away
									)}
									%
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: cartonasePlusValueToColor(
										awayTeamData?.stats?.over35CardsPercentage_away
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.over35CardsPercentage_away}%
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Meciuri cu + 3.5 Cartonașe
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									p: 0.5,
									fontSize: ['12px', '14px'],
									fontWeight: 600
								}}>
								Meciuri cu + 4.5 Cartonașe
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: cartonasePlusValueToColor(
										homeTeamData?.stats?.over45CardsPercentage_home
									),
									color: 'black',
									borderRight: '1px solid white',
									borderBottom: '1px solid white',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								{homeTeamData?.stats?.over45CardsPercentage_home}%
							</TableCell>
							<Box
								sx={{
									bgcolor: cartonasePlusValueToColor(
										Math.round(
											getMedianValue(
												homeTeamData?.stats?.over45CardsPercentage_home,
												awayTeamData?.stats?.over45CardsPercentage_away
											)
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: cartonasePlusValueToColor(
											Math.round(
												getMedianValue(
													homeTeamData?.stats?.over45CardsPercentage_home,
													awayTeamData?.stats?.over45CardsPercentage_away
												)
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getMedianValue(
										homeTeamData?.stats?.over45CardsPercentage_home,
										awayTeamData?.stats?.over45CardsPercentage_away
									)}
									%
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: cartonasePlusValueToColor(
										awayTeamData?.stats?.over45CardsPercentage_away
									),
									color: 'black',
									fontSize: ['12px', '14px'],
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.over45CardsPercentage_away}%
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									p: 0.5,
									fontSize: ['12px', '14px'],
									fontWeight: 600
								}}>
								Meciuri cu + 4.5 Cartonașe
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell
								align="right"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Meciuri cu + 5.5 Cartonașe
							</TableCell>
							<TableCell
								align="center"
								sx={{
									bgcolor: cartonasePlusValueToColor(
										homeTeamData?.stats?.over55CardsPercentage_home
									),
									color: 'black',
									borderRight: '1px solid white',
									borderBottom: '1px solid white',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								{homeTeamData?.stats?.over55CardsPercentage_home}%
							</TableCell>
							<Box
								sx={{
									bgcolor: cartonasePlusValueToColor(
										Math.round(
											getMedianValue(
												homeTeamData?.stats?.over55CardsPercentage_home,
												awayTeamData?.stats?.over55CardsPercentage_away
											)
										)
									),
									borderStyle: 'none solid none solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell
									align="center"
									sx={{
										borderColor: cartonasePlusValueToColor(
											Math.round(
												getMedianValue(
													homeTeamData?.stats?.over55CardsPercentage_home,
													awayTeamData?.stats?.over55CardsPercentage_away
												)
											)
										),
										fontSize: ['12px', '14px'],
										...padding
									}}>
									{getMedianValue(
										homeTeamData?.stats?.over55CardsPercentage_home,
										awayTeamData?.stats?.over55CardsPercentage_away
									)}
									%
								</TableCell>
							</Box>
							<TableCell
								align="center"
								sx={{
									bgcolor: cartonasePlusValueToColor(
										awayTeamData?.stats?.over55CardsPercentage_away
									),
									fontSize: ['12px', '14px'],
									color: 'black',
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									p: 0.5
								}}>
								{awayTeamData?.stats?.over55CardsPercentage_away}%
							</TableCell>
							<TableCell
								align="left"
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									bgcolor: '#f7f7f7',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Meciuri cu + 5.5 Cartonașe
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell
								align="right"
								colSpan={2}
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: ['none', '1px solid white'],
									bgcolor: '#e0e0e0',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Rezultate Cartonașe Recente Gazde
							</TableCell>

							<Box
								sx={{
									borderStyle: 'none solid solid solid',
									borderColor: '#abd380',
									borderWidth: 'thick',
									marginLeft: 1,
									marginRight: 1,
									borderBottomLeftRadius: '10px',
									borderBottomRightRadius: '10px',
									display: 'flex',
									justifyContent: 'center'
								}}>
								<TableCell sx={{ borderColor: 'white' }} />
							</Box>
							<TableCell
								align="left"
								colSpan={2}
								sx={{
									color: theme.text,
									borderBottom: '1px solid white',
									borderRight: '1px solid white',
									borderLeft: 'none',
									bgcolor: '#e0e0e0',
									fontSize: ['12px', '14px'],
									p: 0.5
								}}>
								Rezultate Cartonașe Recente Oaspeti
							</TableCell>
						</TableRow>

						{homeTeamMatches &&
							awayTeamMatches &&
							[0, 1, 2, 3, 4].map((row, index) => (
								<React.Fragment key={row}>
									<TableRow>
										<TableCell
											align="right"
											sx={{
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												color: 'white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
										<TableCell
											align="center"
											sx={{
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												color: 'white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
										<TableCell
											align="center"
											sx={{
												p: 0.5,
												borderBottom: '1px solid white'
											}}
										/>
										<TableCell
											align="center"
											sx={{
												color: 'white',
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
										<TableCell
											align="left"
											sx={{
												display: ['none', 'table-cell'],
												borderBottom: '1px solid white',
												borderRight: '1px solid white',
												color: 'white',
												fontWeight: 600,
												p: 0.5
											}}
										/>
									</TableRow>
									<TableRow>
										<TableCell
											colSpan={2}
											sx={{
												borderRight: 'none',
												borderBottom: 'none',
												px: 0,
												py: 0,
												fontSize: '14px'
											}}>
											<Stack gap={1} direction="row" justifyContent="center" alignItems="center">
												<Stack
													flex={1}
													bgcolor={
														(homeTeamMatches[index]?.statistics?.[0]?.statistics?.[10]?.value ??
															0) >
														(homeTeamMatches[index]?.statistics?.[1]?.statistics?.[10]?.value ?? 0)
															? '#fcd1d1'
															: (homeTeamMatches[index]?.statistics?.[0]?.statistics?.[10]?.value ??
																		0) ===
																  (homeTeamMatches[index]?.statistics?.[1]?.statistics?.[10]
																		?.value ?? 0)
																? '#fcf2d1'
																: '#d3fcd1'
													}
													direction="column"
													alignItems="flex-end"
													px={1}
													py={0.25}
													gap={0.5}>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Typography
															whiteSpace="nowrap"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{homeTeamMatches[index]?.teams?.home?.name
																? showTextEllipsis(homeTeamMatches[index]?.teams?.home?.name)
																: 'Not Available'}
														</Typography>
														<Box
															component="img"
															src={homeTeamMatches[index]?.teams?.home?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
													</Stack>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Typography
															whiteSpace="nowrap"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{homeTeamMatches[index]?.teams?.away?.name
																? showTextEllipsis(homeTeamMatches[index]?.teams?.away?.name)
																: 'Not Available'}
														</Typography>
														<Box
															component="img"
															src={homeTeamMatches[index]?.teams?.away?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
													</Stack>
												</Stack>
												<Stack
													bgcolor={
														(homeTeamMatches[index]?.statistics?.[0]?.statistics?.[10]?.value ??
															0) >
														(homeTeamMatches[index]?.statistics?.[1]?.statistics?.[10]?.value ?? 0)
															? '#fcd1d1'
															: (homeTeamMatches[index]?.statistics?.[0]?.statistics?.[10]?.value ??
																		0) ===
																  (homeTeamMatches[index]?.statistics?.[1]?.statistics?.[10]
																		?.value ?? 0)
																? '#fcf2d1'
																: '#d3fcd1'
													}
													direction="column"
													px={1.5}
													py={0.25}
													gap={0.5}>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{homeTeamMatches[index]?.statistics?.[0]?.statistics?.[10]?.value !==
														undefined
															? homeTeamMatches[index]?.statistics?.[0]?.statistics?.[10]?.value ??
																0
															: -1}
													</Typography>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{homeTeamMatches[index]?.statistics?.[1]?.statistics?.[10]?.value !==
														undefined
															? homeTeamMatches[index]?.statistics?.[1]?.statistics?.[10]?.value ??
																0
															: -1}
													</Typography>
												</Stack>
											</Stack>
										</TableCell>
										<TableCell
											sx={{
												borderBottom: 'none',
												p: 1,
												py: 0,
												fontSize: '14px'
											}}
										/>
										<TableCell
											colSpan={2}
											sx={{
												borderLeft: 'none',
												borderBottom: 'none',
												px: 0,
												py: 0,
												fontSize: '14px'
											}}>
											<Stack gap={1} direction="row">
												<Stack
													bgcolor={
														(awayTeamMatches[index]?.statistics?.[1]?.statistics?.[10]?.value ??
															0) >
														(awayTeamMatches[index]?.statistics?.[0]?.statistics?.[10]?.value ?? 0)
															? '#fcd1d1'
															: (awayTeamMatches[index]?.statistics?.[1]?.statistics?.[10]?.value ??
																		0) ===
																  (awayTeamMatches[index]?.statistics?.[0]?.statistics?.[10]
																		?.value ?? 0)
																? '#fcf2d1'
																: '#d3fcd1'
													}
													direction="column"
													px={1.5}
													py={0.25}
													gap={0.5}>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{awayTeamMatches[index]?.statistics?.[0]?.statistics?.[10]?.value !==
														undefined
															? awayTeamMatches[index]?.statistics?.[0]?.statistics?.[10]?.value ??
																0
															: -1}
													</Typography>
													<Typography color="#231f20" fontWeight={900} fontSize={['12px', '14px']}>
														{awayTeamMatches[index]?.statistics?.[1]?.statistics?.[10]?.value !==
														undefined
															? awayTeamMatches[index]?.statistics?.[1]?.statistics?.[10]?.value ??
																0
															: -1}
													</Typography>
												</Stack>
												<Stack
													flex={1}
													bgcolor={
														(awayTeamMatches[index]?.statistics?.[1]?.statistics?.[10]?.value ??
															0) >
														(awayTeamMatches[index]?.statistics?.[0]?.statistics?.[10]?.value ?? 0)
															? '#fcd1d1'
															: (awayTeamMatches[index]?.statistics?.[1]?.statistics?.[10]?.value ??
																		0) ===
																  (awayTeamMatches[index]?.statistics?.[0]?.statistics?.[10]
																		?.value ?? 0)
																? '#fcf2d1'
																: '#d3fcd1'
													}
													direction="column"
													alignItems="flex-start"
													px={1}
													py={0.25}
													gap={0.5}>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Box
															component="img"
															src={awayTeamMatches[index]?.teams?.home?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
														<Typography
															sx={{
																display: '-webkit-box',
																WebkitBoxOrient: 'vertical',
																WebkitLineClamp: '1'
															}}
															overflow="hidden"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{awayTeamMatches[index]?.teams?.home?.name
																? showTextEllipsis(awayTeamMatches[index]?.teams?.home?.name)
																: 'Not Available'}
														</Typography>
													</Stack>
													<Stack direction="row" alignItems="center" gap={0.5}>
														<Box
															component="img"
															src={awayTeamMatches[index]?.teams?.away?.logo || NotAvailableIcon}
															height={['16px', '20px']}
														/>
														<Typography
															sx={{
																display: '-webkit-box',
																WebkitBoxOrient: 'vertical',
																WebkitLineClamp: '1'
															}}
															overflow="hidden"
															color="#231f20"
															fontSize={['12px', '14px']}>
															{awayTeamMatches[index]?.teams?.away?.name
																? showTextEllipsis(awayTeamMatches[index]?.teams?.away?.name)
																: 'Not Available'}
														</Typography>
													</Stack>
												</Stack>
											</Stack>
										</TableCell>
									</TableRow>
								</React.Fragment>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</Stack>
	)
}
