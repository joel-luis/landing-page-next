import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GridTwoColumns from '.'

const mock = {
  title: 'Grid two columns',
  text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam molestiae, assumenda voluptate quos fugit, voluptas esse quibusdam aperiam at beatae saepe quas distinctio rem aliquid, magnam minus debitis minima vel!',
  srcImg: 'image.jpg',
  background: true
}

describe('<GridTwoColumns />', () => {
  it('should render the grid two columns', () => {
    renderWithTheme(<GridTwoColumns {...mock} />)

    expect(
      screen.getByRole('heading', { name: /Grid two columns/i })
    ).toBeInTheDocument()
  })
})
