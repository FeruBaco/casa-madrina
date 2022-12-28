import {
  Home,
  User,
  Notes,
  FullDressLonguette,
  WashingMachine,
  SalesReport,
  Funds,
  Exchange
} from '@icon-park/react'

export const menuItems = [
  { id: 0, icon: <Home size='20' />, label: 'Inicio', urlPath: '/app' },
  { id: 1, icon: <Notes size='20' />, label: 'Notas', urlPath: '/app/notes' },
  {
    id: 2,
    icon: <User size='20' />,
    label: 'Clientes',
    urlPath: '/app/clients'
  },
  {
    id: 3,
    icon: <FullDressLonguette size='20' />,
    label: 'Productos',
    urlPath: '/app/products'
  },
  {
    id: 4,
    icon: <WashingMachine size='20' />,
    label: 'Tintorería',
    urlPath: '/app/cleaners'
  },
  {
    id: 5,
    icon: <Funds size='20' />,
    label: 'Ingresos',
    urlPath: '/app/incomes'
  },
  {
    id: 6,
    icon: <Exchange size='20' />,
    label: 'Gastos',
    urlPath: '/app/bills'
  },
  {
    id: 7,
    icon: <SalesReport size='20' />,
    label: 'Reportes',
    urlPath: '/app/reports'
  }
]
