import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};

    @media ${theme.media.lessThanMedium} {
      flex-flow: column wrap;
      align-content: center;
      justify-content: center;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
  `}
`
