import * as S from './styles'

export interface HeadingProps {
  children: React.ReactNode
  colorDark?: boolean
  size?: 'small' | 'medium' | 'large' | 'huge'
  uppercase?: boolean
}

export function Heading({
  children,
  colorDark = true,
  size = 'medium',
  uppercase = false
}: HeadingProps) {
  return (
    <S.Wrapper colorDark={colorDark} size={size} uppercase={uppercase}>
      {children}
    </S.Wrapper>
  )
}
