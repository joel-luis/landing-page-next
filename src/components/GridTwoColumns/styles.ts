import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: ${theme.spacings.medium};

    @media ${theme.media.lessThanMedium} {
      grid-template-columns: 1fr;
    }
  `}
`
export const TextContainer = styled.div`
  ${({ theme }) => css``}
`

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`

export const Image = styled.img`
  ${({ theme }) => css``}
`
