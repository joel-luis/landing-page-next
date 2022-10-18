import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-family: ${theme.font.family.default};

    img {
      max-height: 2rem;
    }
  `}
`
