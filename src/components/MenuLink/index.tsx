import * as S from './styles'

export interface MenuLinkProps {
  children: React.ReactNode
  link: string
  newTab?: boolean
}

const MenuLink = ({ children, link, newTab }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <S.Wrapper href={link} target={target}>
      {children}
    </S.Wrapper>
  )
}
export default MenuLink
