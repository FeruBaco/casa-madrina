import { Box, Center, Image } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import logo from '@/assets/images/logo.png'

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
        <Box
          sx={theme => ({
            backgroundColor: theme.colors.pink[0],
            width: '260px'
          })}
          mx='auto'>
          <Image src={logo} alt='Logo' />
          {children}
        </Box>
      </Center>
    </>
  )
}

export default LoginLayout
