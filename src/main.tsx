import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ThemeProvider } from '@mui/material'

import Routing from 'routing'
import { theme } from 'themes'

import 'styles/main.css'

const container = document.getElementById('root')
const queryClient = new QueryClient()

if (container) {
	const root = createRoot(container)
	root.render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<Routing />
				</ThemeProvider>
			</QueryClientProvider>
		</StrictMode>
	)
}
