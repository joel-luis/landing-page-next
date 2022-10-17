import { Story, Meta } from '@storybook/react/types-6-0'
import TextComponent, { TextComponentProps } from '.'

export default {
  title: 'Components/TextComponent',
  component: TextComponent,
  args: {
    children: 'Text Component'
  }
} as Meta<TextComponentProps>

export const Default: Story<TextComponentProps> = (args) => (
  <TextComponent {...args} />
)
