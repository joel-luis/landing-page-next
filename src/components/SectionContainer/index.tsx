import * as S from './styles'

export interface SectionContainerProps {
  children: React.ReactNode
}

const SectionContainer = ({ children }: SectionContainerProps) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default SectionContainer
