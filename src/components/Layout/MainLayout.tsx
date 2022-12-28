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
      })}
      navbar={
        <Navbar
          width={{ sm: 250, md: 300, lg: 350 }}
          p='md'
          style={{ borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
          <Navbar.Section>
            <Image
              src={logo}
              alt='Logo'
              style={{ width: 150, marginLeft: 'auto', marginRight: 'auto' }}
            />
          </Navbar.Section>
          <Navbar.Section grow mt='sm'>
            <SidebarMenu />
          </Navbar.Section>
          {/* <Navbar.Section>
            TODO: Check if add footer of user or something else
          </Navbar.Section> */}
        </Navbar>
      }>
      {children}
    </AppShell>
  )
}
