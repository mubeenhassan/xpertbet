import { Stack } from '@mui/material'
import { MatchesTable, MobileMatchesTable } from 'components/app/table'
import useIsMobile from 'hooks/useIsMobile'

export const Fixtures = ({ matches, leagues }: any) => {
	const isMobile = useIsMobile()
	return (
		<Stack px={[0, 4]} pt={4} direction="column" gap={[1, 2]}>
			{isMobile ? (
				<MobileMatchesTable matches={matches} leagues={leagues} />
			) : (
				<MatchesTable matches={matches} leagues={leagues} />
			)}
		</Stack>
	)
}
