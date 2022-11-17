import { Route, Routes } from 'react-router-dom'

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<p>Main dashboard</p>}></Route>
    </Routes>
  )
}
