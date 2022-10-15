import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

export const headingSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    @media ${theme.media.lessThanMedium} {
      font-size: ${theme.font.sizes.large};
    }
  `
}

export const Wrapper = styled.h1<HeadingProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.black : theme.colors.white};
    text-transform: ${uppercase ? 'uppercase' : 'none'};
    ${!!size && headingSize[size](theme)};
  `}
`
