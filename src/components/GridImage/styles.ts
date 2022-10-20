import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: ${theme.spacings.large};
  `}
`
export const GridElement = styled.div`
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
`
