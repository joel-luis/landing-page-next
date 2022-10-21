import { Story, Meta } from '@storybook/react/types-6-0'
import Footer, { FooterProps } from '.'

export default {
  title: 'Components/Footer',
  component: Footer,
  args: {
    children: `<p><a href='https://www.linkedin.com/in/joel-luiss'>Feito por Joel Luis</a></p>`
  }
} as Meta<FooterProps>

export const Default: Story<FooterProps> = (args) => <Footer {...args} />
