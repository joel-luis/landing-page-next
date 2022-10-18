import { Story, Meta } from '@storybook/react/types-6-0'
import NavLinks, { NavLinksProps } from '.'
import linksMock from './mock'

export default {
  title: 'Components/NavLinks',
  component: NavLinks,
  args: {
    links: linksMock
  }
} as Meta<NavLinksProps>

export const Default: Story<NavLinksProps> = (args) => <NavLinks {...args} />
