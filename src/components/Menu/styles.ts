import styled, { css } from 'styled-components'
import { Wrapper as SectionContainer } from 'components/SectionContainer/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
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
