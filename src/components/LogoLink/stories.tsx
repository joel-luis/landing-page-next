import { Story, Meta } from '@storybook/react/types-6-0'
import LogoLink, { LogoLinkProps } from '.'
import logo from '../../../public/assets/images/logo.svg'

export default {
  title: 'Components/LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo Link',
    srcImg: logo,
    link: 'http:localhost:8080'
  }
} as Meta<LogoLinkProps>

export const withImage: Story<LogoLinkProps> = (args) => <LogoLink {...args} />

export const withText: Story<LogoLinkProps> = (args) => <LogoLink {...args} />

withText.args = {
  srcImg: ''
}
