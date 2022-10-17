import 'jest-styled-components'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Heading</Heading>)
    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()
  })
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading colorDark={false}>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading colorDark>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
  })
  it('should render a heading with a medium size', () => {
    renderWithTheme(<Heading>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'font-size': '2.4rem'
    })
  })

  it('should render a heading with a large size', () => {
    renderWithTheme(<Heading size="large">Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'font-size': '3.2rem'
    })
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'font-size': '5.6rem'
    })
  })

  it('should render a heading without uppercase text', () => {
    renderWithTheme(<Heading uppercase={false}>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'text-transform': 'none'
    })
  })
  it('should render a heading wit uppercase text', () => {
    renderWithTheme(<Heading uppercase>Heading</Heading>)
    expect(screen.getByRole('heading', { name: /Heading/i })).toHaveStyle({
      'text-transform': 'uppercase'
    })
  })
})
