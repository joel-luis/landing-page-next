import styled, { css } from 'styled-components'
import { Wrapper as SectionContainer } from 'components/SectionContainer/styles'

export const Wrapper = styled.div<{ menuVisible?: boolean }>`
  ${({ theme, menuVisible }) => css`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    background: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall} 0;
    border-bottom: ${theme.colors.lightGray};

    ${SectionContainer} {
      padding: 0 1.5rem;
    }

    @media ${theme.media.lessThanMedium} {
      ${SectionContainer} {
        visibility: ${menuVisible ? 'visible' : 'hidden'};
        opacity: ${menuVisible ? '1' : '0'};
        transition: all ${theme.transition.default};
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        overflow-y: auto;
      }
    }
  `}
`

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media ${theme.media.lessThanMedium} {
      flex-direction: column;
      justify-content: center;
    }
  `}
`

export const Button = styled.div`
  ${({ theme }) => css`
    z-index: 9;
    display: none;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 2rem;
    cursor: pointer;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    background: ${theme.colors.black};
    color: ${theme.colors.white};
    border: none;

    @media ${theme.media.lessThanMedium} {
      display: flex;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`
