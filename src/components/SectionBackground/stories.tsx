import { Story, Meta } from '@storybook/react/types-6-0'
import SectionBackground, { SectionBackgroundprops } from '.'

export default {
  title: 'Components/SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1 style={{ margin: 0 }}>Section Background</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sunt?
          Reprehenderit tempora, quis deleniti esse magni, impedit possimus
          accusantium iure atque est cupiditate nam, laborum cum inventore
          deserunt excepturi. Laborum.
        </p>
      </div>
    )
  }
} as Meta<SectionBackgroundprops>

export const Default: Story<SectionBackgroundprops> = (args) => (
  <SectionBackground {...args} />
)

export const withBackground: Story<SectionBackgroundprops> = (args) => (
  <SectionBackground {...args} />
)

withBackground.args = {
  background: true
}
