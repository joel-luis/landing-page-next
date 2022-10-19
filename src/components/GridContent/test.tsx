import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GridContent from '.'
import mock from './mock'

describe('<GridContent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GridContent {...mock} />)

    expect(
      screen.getByRole('heading', { name: /Grid Content/i })
    ).toBeInTheDocument()
  })
})
