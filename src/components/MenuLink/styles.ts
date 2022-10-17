import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.small};
    display: block;
    text-decoration: none;
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.black};

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: 25%;
        width: 50%;
        height: 0.2rem;
        background-color: ${theme.colors.red};
        animation: hoverAnimation 0.3s ease-in-out;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
      }
  `}
`
