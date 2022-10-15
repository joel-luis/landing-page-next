import { Meta, Story } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    text: 'oi'
  }
} as Meta<HeadingProps>

export const Default: Story<HeadingProps> = (args) => {
  return <Heading {...args} />
}
