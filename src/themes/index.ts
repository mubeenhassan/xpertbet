import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
	interface Theme {
		primary: string
		secondary: string
		success: string
		warning: string
		error: string
		gray: string
		text: string
		heading: string
		background: string
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		primary?: string
		secondary?: string
		success?: string
		warning?: string
		error?: string
		gray?: string
		text?: string
		heading?: string
		background?: string
	}
}

export const theme = createTheme({
	primary: '#3372E8',
	secondary: '#404040',
	success: '#B9CB00',
	warning: '#F8C87F',
	error: '#E2101A',
	gray: '#C9C7C6',
	text: '#5D5D5D',
	heading: '#980400',
	background: '#F7F7F7'
})
