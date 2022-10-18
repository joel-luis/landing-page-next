import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SectionBackground from '.'

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    renderWithTheme(
      <SectionBackground background>
        <h1>Children</h1>
      </SectionBackground>
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('should render with background white', () => {
    renderWithTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
