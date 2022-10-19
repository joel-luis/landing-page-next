import MenuLink, { MenuLinkProps } from 'components/MenuLink'
import * as S from './styles'

export interface NavLinksProps {
  links: MenuLinkProps[]
}

const NavLinks = ({ links }: NavLinksProps) => {
  return (
    <S.Wrapper aria-label="Main menu">
      {links.map(({ link, children, newTab }: MenuLinkProps) => (
        <MenuLink key={link} link={link} newTab={newTab}>
          {children}
        </MenuLink>
      ))}
    </S.Wrapper>
  )
}

export default NavLinks
