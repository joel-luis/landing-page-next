import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Footer>Footer</Footer>)

    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})
