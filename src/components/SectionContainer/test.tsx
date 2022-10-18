import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import SectionContainer from '.'

describe('<SectionContainer />', () => {
  it('should render content', () => {
    renderWithTheme(
      <SectionContainer>
        <h1> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
      </SectionContainer>
    )
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
