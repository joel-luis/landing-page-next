import { Story, Meta } from '@storybook/react/types-6-0'
import GridImage, { GridImageProps } from '.'
import mock from './mock'

export default {
  title: 'Components/GridImage',
  component: GridImage,
  args: mock
} as Meta<GridImageProps>

export const Default: Story<GridImageProps> = (args) => <GridImage {...args} />
