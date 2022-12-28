import { Route, Routes } from 'react-router-dom'

import { ContentLayout } from '@/components/Layout/ContentLayout'

export const NotesRoutes = () => {
  return (
    <Routes>
      <Route path='/notes' element={<ContentLayout title='Notas' />}>
        <Route path='' element={<p>Notes dashboard</p>} />
        <Route path='create' element={<p>Notas creation</p>} />
      </Route>
    </Routes>
  )
}
