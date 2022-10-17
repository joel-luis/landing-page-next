import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Text from '.'

describe('<Text />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Text />)

    expect(screen.getByRole('heading', { name: /Text/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
