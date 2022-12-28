import { Title } from '@mantine/core'
import { Outlet } from 'react-router-dom'

interface Props {
  title: string
}

export const ContentLayout = ({ title }: Props) => {
  return (
    <>
      <Title order={4} size='h1' sx={{ fontWeight: 'normal' }}>
        {title}
      </Title>
      <Outlet />
    </>
  )
}
