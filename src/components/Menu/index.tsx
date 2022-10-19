import { useState } from 'react'

import LogoLink, { LogoLinkProps } from 'components/LogoLink'
import { MenuLinkProps } from 'components/MenuLink'
import NavLinks from 'components/NavLinks'
import SectionContainer from 'components/SectionContainer'
import {
  Menu as MenuIcon,
  Close as CloseIcon
} from '@styled-icons/material-outlined'

import * as S from './styles'

export interface MenuProps {
  logoData: LogoLinkProps
  links: MenuLinkProps[]
}

const Menu = ({ logoData, links }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <S.Button
        onClick={() => setMenuVisible((menu) => !menu)}
        aria-label="Open/Close menu"
      >
        {menuVisible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </S.Button>
      <S.Wrapper
        menuVisible={menuVisible}
        onClick={() => setMenuVisible(false)}
        aria-label="Menu container"
      >
        <SectionContainer>
          <S.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </S.MenuContainer>
        </SectionContainer>
      </S.Wrapper>
    </>
  )
}

export default Menu
