import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  `}
`
export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`
