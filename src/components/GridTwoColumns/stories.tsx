import { Story, Meta } from '@storybook/react/types-6-0'
import GridTwoColumns, { GridTwoColumnsProps } from '.'
import javascriptImg from '../../../public/assets/images/javascript.svg'

export default {
  title: 'Components/GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid two columns',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam molestiae, assumenda voluptate quos fugit, voluptas esse quibusdam aperiam at beatae saepe quas distinctio rem aliquid, magnam minus debitis minima vel!',
    srcImg: javascriptImg,
    background: true
  }
} as Meta<GridTwoColumnsProps>

export const Default: Story<GridTwoColumnsProps> = (args) => (
  <GridTwoColumns {...args} />
)
