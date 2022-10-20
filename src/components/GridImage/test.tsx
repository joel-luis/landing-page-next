import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GridImage from '.'
import mock from './mock'

describe('<GridImage />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GridImage {...mock} />)

    expect(
      screen.getByRole('heading', { name: /My grid Image/i })
    ).toBeInTheDocument()
  })
})
