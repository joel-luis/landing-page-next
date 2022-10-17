import { Story, Meta } from '@storybook/react/types-6-0'
import MenuLink, { MenuLinkProps } from '.'

export default {
  title: 'Components/MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://google.com.br',
    newTab: true
  }
} as Meta<MenuLinkProps>

export const Default: Story<MenuLinkProps> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  )
}
