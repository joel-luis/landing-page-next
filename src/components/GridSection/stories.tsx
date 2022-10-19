import { Story, Meta } from '@storybook/react/types-6-0'
import GridSection, { GridSectionPros } from '.'
import mock from './mock'

export default {
  title: 'Components/GridSection',
  component: GridSection,
  args: mock
} as Meta<GridSectionPros>

export const Default: Story<GridSectionPros> = (args) => (
  <GridSection {...args} />
)
