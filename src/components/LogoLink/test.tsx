import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import LogoLink from '.'

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderWithTheme(<LogoLink link="#target" text="Olá Mundo" />)
    const heading = screen.getByRole('heading', { name: /Olá Mundo/i })

    expect(heading.firstChild).toHaveAttribute('href', '#target')
  })

  it('should render image logo', () => {
    renderWithTheme(
      <LogoLink link="#target" text="Olá Mundo" srcImg="image.jpg" />
    )
    const heading = screen.getByRole('heading', { name: /Olá Mundo/i })
    expect(heading.firstChild?.firstChild).toHaveAttribute('src', 'image.jpg')
  })
})
