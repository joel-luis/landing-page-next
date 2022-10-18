import SectionContainer from 'components/SectionContainer'
import * as S from './styles'

export interface SectionBackgroundprops {
  children: React.ReactNode
  background?: boolean
}

const SectionBackground = ({
  children,
  background
}: SectionBackgroundprops) => (
  <S.Wrapper background={background}>
    <SectionContainer>{children}</SectionContainer>
  </S.Wrapper>
)

export default SectionBackground
