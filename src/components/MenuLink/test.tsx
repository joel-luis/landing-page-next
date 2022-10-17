import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import MenuLink from '.'

describe('<MenuLink />', () => {
  it('should render the link', () => {
    renderWithTheme(<MenuLink link="https://google.com.br">Menu Link</MenuLink>)

    expect(screen.getByRole('link', { name: /Menu Link/i })).toHaveAttribute(
      'target',
      '_self'
    )
  })
  it('should render open in a new tab', () => {
    renderWithTheme(
      <MenuLink newTab link="https://google.com.br">
        Menu Link
      </MenuLink>
    )

    expect(screen.getByRole('link', { name: /Menu Link/i })).toHaveAttribute(
      'target',
      '_blank'
    )
  })
})
