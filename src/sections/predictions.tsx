import { Stack, Typography, useTheme } from '@mui/material'
import { StatCard } from 'components/cards/stat-card'

import { SectionHeading } from 'components/section-heading'
import {
  getCartonaseColor,
  getMedieCornersColor,
  getMedieGoluriColor,
  getStatPercentageColor,
  getXGColor
} from 'constants/colors'

export const PredictionsSection = ({ data, referee }: any) => {
	const theme = useTheme()

	return (
		<Stack id="predictions" direction="column" gap={4}>
			<SectionHeading title="Predictions" />

			<Typography
				fontWeight={900}
				component="h1"
				textAlign="center"
				textTransform="uppercase"
				color={theme.heading}
				fontSize="30px">
				Predictii
			</Typography>
			<Stack direction="column" gap={3}>
				<Stack
					display={{ xs: 'flex', md: 'none' }}
					gap={{ xs: 1, md: 2 }}
					direction="row"
					justifyContent="center"
					alignItems="stretch">
					<StatCard
						title="MEDIE GOLURI"
						value={data?.avg_potential}
						background={getMedieGoluriColor(data?.avg_potential)}
					/>
					<StatCard
						title="xG GAZDE"
						value={data?.team_a_xg_prematch}
						headerBackground="#007fc3"
						sx={{ '& header': { '&>p': { wordSpacing: ['999999vw', 'auto'] } } }}
						background={getXGColor(data?.team_a_xg_prematch)}
					/>
					<StatCard
						title="xG OASPETI"
						value={data?.team_b_xg_prematch}
						headerBackground="#dc271e"
						background={getXGColor(data?.team_b_xg_prematch)}
					/>
					<StatCard
						title="+1.5 GOLURI"
						footerText={data?.odds_ft_over15}
						value={data?.o15_potential}
						showPercentage
						background={getStatPercentageColor(data?.o15_potential)}
					/>
					<StatCard
						title="+2.5 GOLURI"
						footerText={data?.odds_ft_over25}
						value={data?.o25_potential}
						showPercentage
						background={getStatPercentageColor(data?.o25_potential)}
					/>
				</Stack>
				<Stack
					display={{ xs: 'flex', md: 'none' }}
					gap={{ xs: 1, md: 2 }}
					direction="row"
					justifyContent="center"
					alignItems="stretch">
					<StatCard
						title="+3.5 GOLURI"
						footerText={data?.odds_ft_over35}
						value={data?.o35_potential}
						showPercentage
						background={getStatPercentageColor(data?.o35_potential)}
					/>
					<StatCard
						sx={{ '& header': { '&>p': { fontSize: '10px !important' } } }}
						title="GG"
						footerText={data?.odds_btts_yes}
						value={data?.btts_potential}
						showPercentage
						background={getStatPercentageColor(84)}
					/>
					<StatCard
						footerText={data?.odds_1st_half_over15}
						title="+1.5 G REPRIZA 1"
						value={data?.o15HT_potential}
						showPercentage
						background={getStatPercentageColor(data?.o15HT_potential)}
					/>
					<StatCard
						footerText={data?.odds_2nd_half_over15}
						title="+1.5 G REPRIZA 2"
						value={data?.o15_2H_potential}
						showPercentage
						background={getStatPercentageColor(data?.o15_2H_potential)}
					/>
				</Stack>

				<Stack
					display={{ xs: 'none', md: 'flex' }}
					gap={{ xs: 1, md: 2 }}
					direction="row"
					justifyContent="center"
					alignItems="stretch">
					<StatCard
						title="MEDIE GOLURI"
						value={data?.avg_potential}
						background={getMedieGoluriColor(data?.avg_potential)}
					/>
					<StatCard
						title="xG GAZDE"
						value={data?.team_a_xg_prematch}
						headerBackground="#007fc3"
						background={getXGColor(data?.team_a_xg_prematch)}
					/>
					<StatCard
						title="xG OASPETI"
						value={data?.team_b_xg_prematch}
						headerBackground="#dc271e"
						background={getXGColor(data?.team_b_xg_prematch)}
					/>
					<StatCard
						title="+1.5 GOLURI"
						footerText={data?.odds_ft_over15}
						value={data?.o15_potential}
						showPercentage
						background={getStatPercentageColor(data?.o15_potential)}
					/>
					<StatCard
						title="+2.5 GOLURI"
						footerText={data?.odds_ft_over25}
						value={data?.o25_potential}
						showPercentage
						background={getStatPercentageColor(data?.o25_potential)}
					/>
					<StatCard
						title="+3.5 GOLURI"
						footerText={data?.odds_ft_over35}
						value={data?.o35_potential}
						showPercentage
						background={getStatPercentageColor(data?.o35_potential)}
					/>
					<StatCard
						sx={{ '& header': { '&>p': { fontSize: '10px !important' } } }}
						title="GG"
						footerText={data?.odds_btts_yes}
						value={data?.btts_potential}
						showPercentage
						background={getStatPercentageColor(data?.btts_potential)}
					/>
					<StatCard
						footerText={data?.odds_1st_half_over15}
						title="+1.5 G REPRIZA 1"
						value={data?.o15HT_potential}
						showPercentage
						background={getStatPercentageColor(data?.o15HT_potential)}
					/>
					<StatCard
						footerText={data?.odds_2nd_half_over15}
						title="+1.5 G REPRIZA 2"
						value={data?.o15_2H_potential}
						showPercentage
						background={getStatPercentageColor(data?.o15_2H_potential)}
					/>
				</Stack>
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					justifyContent="center"
					alignItems="center"
					gap={{ xs: 2, md: 10 }}>
					<Stack gap={{ xs: 1, md: 2 }} direction="row" justifyContent="center" alignItems="center">
						<StatCard
							title="MEDIE CORNERE"
							value={data?.corners_potential}
							background={getMedieCornersColor(data?.corners_potential)}
						/>
						<StatCard
							title="+8.5 CORNERE"
							footerText={data?.odds_corners_over_85}
							value={data?.corners_o85_potential}
							showPercentage
							background={getStatPercentageColor(data?.corners_o85_potential)}
						/>
						<StatCard
							title="+9.5 CORNERE"
							footerText={data?.odds_corners_over_95}
							value={data?.corners_o95_potential}
							showPercentage
							background={getStatPercentageColor(data?.corners_o95_potential)}
						/>
						<StatCard
							title="+10.5 CORNERE"
							footerText={data?.odds_corners_over_105}
							value={data?.corners_o105_potential}
							showPercentage
							background={getStatPercentageColor(data?.corners_o105_potential)}
						/>
					</Stack>
					<Stack gap={{ xs: 1, md: 2 }} direction="row" justifyContent="center" alignItems="center">
						<StatCard
							sx={{ '& header': { '&>p': { fontSize: '10px !important' } } }}
							title="MEDIE CARTONASE"
							value={data?.cards_potential}
							background={getCartonaseColor(data?.cards_potential)}
						/>
						<StatCard
							title="MEDIE C. ARBITRU"
							value={referee?.cards_per_match_overall}
							background={getCartonaseColor(referee?.cards_per_match_overall)}
						/>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
}
