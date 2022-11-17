import { AuthContext } from '@/stores/auth'
import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { PrivateRoutes } from './private'
import { PublicRoutes } from './public'

interface RouterProps {
  children: React.ReactElement
  isPublic: boolean
}

const AppRouter = ({ children, isPublic }: RouterProps) => {
  const { user } = useContext(AuthContext)
  const isLogged = Boolean(user.logged)
  if (isPublic) {
    return !isLogged ? children : <Navigate to='/app' />
  } else {
    return isLogged ? children : <Navigate to='/auth/login' />
  }
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<Navigate to='auth/login' />}></Route>
      <Route
        path='/auth/*'
        element={
          <AppRouter isPublic={true}>
            <PublicRoutes />
          </AppRouter>
        }
      />
      <Route
        path='/app/*'
        element={
          <AppRouter isPublic={false}>
            <PrivateRoutes />
          </AppRouter>
        }></Route>
    </Routes>
  )
}
