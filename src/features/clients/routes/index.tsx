import { Route, Routes } from 'react-router-dom'

export const ClientsRoutes = () => {
  return (
    <Routes>
      <Route path='/clients' element={<p>DashboardClients</p>}>
        {/* <Route path='/create' element={<p>Clients creation</p>} /> */}
      </Route>
    </Routes>
  )
}
