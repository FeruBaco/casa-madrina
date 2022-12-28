import {
  Group,
  Text,
  UnstyledButton,
  createStyles,
  Space,
  Flex
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Right } from '@icon-park/react'

import { menuItems } from './menuItems'

interface SidebarProps {
  id: number
  icon: React.ReactNode
  label: string
  urlPath: string
  active: number
  setActive: any
}

const btnStyles = createStyles(theme => ({
  button: {
    display: 'block',
    padding: theme.spacing.sm,
    borderRadius: theme.radius.md,

    color: 'black',
    '&:hover': {
      color: 'white',
      backgroundColor: 'black',
      width: '120%',
      borderRadius: theme.radius.lg
    }
  },
  active: {
    color: 'white',
    backgroundColor: 'black',
    width: '120%',
    borderRadius: theme.radius.lg
  }
}))

const SidebarItem = ({
  id,
  icon,
  label,
  urlPath,
  active,
  setActive
}: SidebarProps) => {
  const { classes, cx } = btnStyles()
  return (
    <UnstyledButton
      className={cx(classes.button, { [classes.active]: active === id })}
      onClick={_ => setActive(id)}
      component={Link}
      to={urlPath}>
      <Flex justify='space-between'>
        <Group>
          {icon}
          <Text size='md'>{label}</Text>
        </Group>
        <Right theme='outline' size='20' fill='#FFFFFF' />
      </Flex>
    </UnstyledButton>
  )
}

export const SidebarMenu = () => {
  const [active, setActive] = useState(0)

  const items = menuItems.map(item => (
    <SidebarItem
      {...item}
      key={item.label}
      setActive={setActive}
      active={active}
    />
  ))
  return <div>{items}</div>
}
