import { Heading } from 'components/Heading'
import SectionBackground from 'components/SectionBackground'
import TextComponent from 'components/TextComponent'
import * as S from './styles'

export interface GridContentProps {
  title: string
  html: string
}

const GridContent = ({ title, html }: GridContentProps) => (
  <SectionBackground>
    <S.Wrapper>
      <Heading uppercase size="huge">
        {title}
      </Heading>
      <S.Html>
        <TextComponent>{html}</TextComponent>
      </S.Html>
    </S.Wrapper>
  </SectionBackground>
)

export default GridContent
