import styled, { css } from 'styled-components'

export const Wrapper = styled.div<{ background?: boolean }>`
  ${({ theme, background }) => css`
    background: ${background ? theme.colors.black : theme.colors.white};
    color: ${background ? theme.colors.white : theme.colors.black};
    height: 100vh;
    display: flex;
    align-items: center;
  `}
`
