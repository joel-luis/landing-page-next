import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GridSection from '.'
import mock from './mock'

describe('<GridSection />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GridSection {...mock} />)

    expect(
      screen.getByRole('heading', { name: /My grid/i })
    ).toBeInTheDocument()
  })
})
