import { Heading } from 'components/Heading'
import SectionBackground from 'components/SectionBackground'
import TextComponent from 'components/TextComponent'
import * as S from './styles'

export interface GridTwoColumnsProps {
  title: string
  text: string
  srcImg: string
  background?: boolean
}

const GridTwoColumns = ({
  title,
  text,
  srcImg,
  background
}: GridTwoColumnsProps) => (
  <SectionBackground background={background}>
    <S.Wrapper>
      <S.TextContainer>
        <Heading colorDark={!background} uppercase>
          {title}
        </Heading>
        <TextComponent>{text}</TextComponent>
      </S.TextContainer>
      <S.ImageContainer>
        <S.Image src={srcImg} alt={title} />
      </S.ImageContainer>
    </S.Wrapper>
  </SectionBackground>
)

export default GridTwoColumns
