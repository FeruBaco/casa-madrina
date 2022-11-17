import { AuthProvider } from '@/stores/auth'
import { MantineProvider } from '@mantine/core'
import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>
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
      </AuthProvider>
    </Suspense>
  )
}
