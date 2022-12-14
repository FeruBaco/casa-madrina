import { ClientsRoutes } from '@/features/clients'
import { DashboardRoutes } from '@/features/dashboard'
import { MainLayout } from '@/components/Layout/MainLayout'
import { NotesRoutes } from '@/features/notes'

interface Props {
  children: React.ReactNode
}

const App = ({ children }: Props) => {
  return <MainLayout>{children}</MainLayout>
}

export const PrivateRoutes = () => {
  return (
    <App>
      <DashboardRoutes />
      <NotesRoutes />
      <ClientsRoutes />
    </App>
  )
}
