import { Meta, Story } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    colorDark: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta<HeadingProps>

export const Light: Story<HeadingProps> = (args) => <Heading {...args} />
export const Dark: Story<HeadingProps> = (args) => <Heading {...args} />

Light.parameters = {
  backgrounds: {
    default: 'light'
  }
}

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
  size: 'large'
}
