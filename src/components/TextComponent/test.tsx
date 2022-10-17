import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import TextComponent from '.'

describe('<TextComponent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextComponent>Text Component</TextComponent>)

    expect(screen.getByText('Text Component')).toBeInTheDocument()
  })
})
