import { AppShell, Navbar, Image } from '@mantine/core'

import logo from '@/assets/images/logo.png'
import { SidebarMenu } from '@/components/Menu'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <AppShell
      padding='md'
      navbarOffsetBreakpoint='sm'
      fixed
      styles={theme => ({
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[2]
        }
      })}>
      <Navbar>
        <Navbar.Section>
          <Image src={logo} alt='Logo' width={150} />
        </Navbar.Section>
        <Navbar.Section grow mt='lg'>
          <SidebarMenu />
        </Navbar.Section>
      </Navbar>
      {children}
    </AppShell>
  )
}
