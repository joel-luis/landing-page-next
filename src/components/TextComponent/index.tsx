import * as S from './styles'

export interface TextComponentProps {
  children: React.ReactNode
}

const TextComponent = ({ children }: TextComponentProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default TextComponent
