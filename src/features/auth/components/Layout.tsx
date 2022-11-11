import logo from '@assets/images/logo.png'
import { Center } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'

interface LayoutProps {
  children: React.ReactNode
}

const LoginLayout = ({ children }: LayoutProps) => {
  const { height, width } = useViewportSize()

  return (
    <>
      <Center
        sx={theme => ({ backgroundColor: theme.colors.pink[0] })}
        style={{ height, width }}>
        {children}
      </Center>
    </>
  )
}

export default LoginLayout
