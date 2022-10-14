import * as S from './styles'

export interface HeadingProps {
  text: string
}

export function Heading({ text }: HeadingProps) {
  return <S.Wrapper>{text}</S.Wrapper>
}
