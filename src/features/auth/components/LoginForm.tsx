import { AuthContext } from '@/stores/auth'
import { Button, Group, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useContext } from 'react'

export const LoginForm = () => {
  type FormValues = typeof formData.values

  const { setUser } = useContext(AuthContext)
  const handleSubmit = (values: FormValues) => {
    setUser({
      uid: '1',
      logged: true,
      user: 'P'
    })
    console.log(values)
  }

  const formData = useForm({
    initialValues: {
      user: 'Casa-Madrina',
      password: 'secret'
    },
    validate: {
      user: value => (value.length > 4 ? null : 'Usuario invalido'),
      password: value => (value.length > 4 ? null : 'Contraseña invalida')
    }
  })

  return (
    <>
      <form onSubmit={formData.onSubmit(values => handleSubmit(values))}>
        <TextInput
          label='Usuario'
          placeholder='Pepe'
          {...formData.getInputProps('user')}
          required
        />
        <PasswordInput
          label='Contraseña'
          mt='sm'
          placeholder='••••••'
          {...formData.getInputProps('password')}
          required
        />
        <Group position='right' mt='md'>
          <Button
            type='submit'
            styles={theme => ({
              root: {
                backgroundColor: '#d4afad',
                '&:hover': {
                  backgroundColor: theme.fn.darken('#D4AFAD', 0.05)
                }
              }
            })}>
            INGRESAR
          </Button>
        </Group>
      </form>
    </>
  )
}
