import { Group, Text, UnstyledButton } from '@mantine/core'
import { Link } from 'react-router-dom'
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

interface SidebarProps {
  icon: React.ReactNode
  label: string
  urlPath: string
}

const menuItems = [
  { icon: <Home size='20' />, label: 'Inicio', urlPath: '/app' },
  { icon: <Notes size='20' />, label: 'Notas', urlPath: '/app/notes' },
  { icon: <User size='20' />, label: 'Clientes', urlPath: '/app/clients' },
  {
    icon: <FullDressLonguette size='20' />,
    label: 'Productos',
    urlPath: '/products'
  },
  { icon: <WashingMachine size='20' />, label: 'Tintorería', urlPath: '/app' },
  { icon: <Funds size='20' />, label: 'Ingresos', urlPath: '/app' },
  { icon: <Exchange size='20' />, label: 'Gastos', urlPath: '/app' },
  { icon: <SalesReport size='20' />, label: 'Reportes', urlPath: '/app' }
]

const SidebarItem = ({ icon, label, urlPath }: SidebarProps) => {
  return (
    <UnstyledButton
      component={Link}
      to={urlPath}
      sx={theme => ({
        display: 'block',
        padding: theme.spacing.sm,
        borderRadius: theme.radius.md,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0]
        }
      })}>
      <Group>
        {icon}
        <Text size='md'>{label}</Text>
      </Group>
    </UnstyledButton>
  )
}

export const SidebarMenu = () => {
  const items = menuItems.map(item => (
    <SidebarItem {...item} key={item.label} />
  ))
  return <div>{items}</div>
}
