import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import linksMock from './mock'

import NavLinks from '.'

describe('<NavLinks />', () => {
  it('should render the heading', () => {
    renderWithTheme(<NavLinks links={linksMock} />)

    expect(screen.getAllByRole('link')).toHaveLength(linksMock.length)
  })
})
