import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'
import linksMock from 'components/NavLinks/mock'
import logo from '../../../public/assets/images/logo.svg'

export default {
  title: 'Components/Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: logo
    }
  }
} as Meta<MenuProps>

export const Default: Story<MenuProps> = (args) => <Menu {...args} />
