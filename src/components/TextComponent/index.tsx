import * as S from './styles'

export interface TextComponentProps {
  children: string
}

const TextComponent = ({ children }: TextComponentProps) => (
  <S.Wrapper dangerouslySetInnerHTML={{ __html: children }} />
)

export default TextComponent
