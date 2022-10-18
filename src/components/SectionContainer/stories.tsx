import { Story, Meta } from '@storybook/react/types-6-0'
import SectionContainer, { SectionContainerProps } from '.'

export default {
  title: 'Components/SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, sunt?
          Reprehenderit tempora, quis deleniti esse magni, impedit possimus
          accusantium iure atque est cupiditate nam, laborum cum inventore
          deserunt excepturi. Laborum.
        </p>
      </div>
    )
  }
} as Meta<SectionContainerProps>

export const Default: Story<SectionContainerProps> = (args) => (
  <SectionContainer {...args} />
)
