import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    background-color: ${theme.colors.white};

    @media ${theme.media.lessThanMedium} {
      flex-flow: column wrap;
      align-content: center;
      justify-content: center;
      gap: 1rem;
      height: 100vh;
    }
  `}
`
