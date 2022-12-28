import { Route, Routes } from 'react-router-dom'

import { ContentLayout } from '@/components/Layout/ContentLayout'

export const ClientsRoutes = () => {
  return (
    <Routes>
      <Route path='/clients' element={<ContentLayout title='Clientes' />}>
        <Route path='' element={<p>Clients creation</p>} />
        <Route path='create' element={<p>Clients creation</p>} />
      </Route>
    </Routes>
  )
}
