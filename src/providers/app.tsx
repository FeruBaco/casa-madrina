import { MantineProvider } from '@mantine/core'
import { BrowserRouter as Router } from 'react-router-dom'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'light',
        colors: {
          white: ['#FFFFFF'],
          black: ['#1A1C1E'],
          pink: ['#EFDDDF']
        }
      }}>
      <Router>{children}</Router>
    </MantineProvider>
  )
}
