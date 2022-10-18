import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-family: ${theme.font.family.default};
    width: 200px;

    img {
      max-height: 1.5rem;
      margin: 0 auto;
    }
  `}
`
