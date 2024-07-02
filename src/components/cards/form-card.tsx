import { Box } from '@mui/material'

interface FormCardProps {
	color: '#B9D36B' | '#C9C7C6' | '#FAB108' | '#DE655A'
}

export const FormCard = ({ color }: FormCardProps) => {
	return <Box height="6px" width="8px" bgcolor={color} />
}
