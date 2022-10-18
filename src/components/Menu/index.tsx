import LogoLink, { LogoLinkProps } from 'components/LogoLink'
import { MenuLinkProps } from 'components/MenuLink'
import NavLinks from 'components/NavLinks'
import SectionContainer from 'components/SectionContainer'

import * as S from './styles'

export interface MenuProps {
  logoData: LogoLinkProps
  links: MenuLinkProps[]
}

const Menu = ({ logoData, links }: MenuProps) => (
  <S.Wrapper>
    <SectionContainer>
      <S.MenuContainer>
        <LogoLink {...logoData} />
        <NavLinks links={links} />
      </S.MenuContainer>
    </SectionContainer>
  </S.Wrapper>
)

export default Menu
