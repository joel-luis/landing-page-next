import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import linksMock from 'components/NavLinks/mock'

const logoData = {
  text: 'Logo',
  link: '#target'
}

import Menu from '.'
import theme from 'styles/theme'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu links={linksMock} logoData={logoData} />)

    expect(screen.getByRole('heading', { name: /Logo/i })).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: 'Main menu' })
    ).toBeInTheDocument()
  })

  it('should render menu mobile and button for open and close the menu', () => {
    renderWithTheme(<Menu links={linksMock} logoData={logoData} />)

    const button = screen.getByLabelText('Open/Close menu')

    expect(button).toHaveStyleRule('display', 'none')
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lessThanMedium
    })
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    fireEvent.click(button)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()

    const menuContainer = screen.getByLabelText('Menu container')
    fireEvent.click(menuContainer)
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})
