import { Story, Meta } from '@storybook/react/types-6-0'
import GridContent, { GridContentProps } from '.'
import mock from './mock'

export default {
  title: 'Components/GridContent',
  component: GridContent,
  args: mock
} as Meta<GridContentProps>

export const Default: Story<GridContentProps> = (args) => (
  <GridContent {...args} />
)
