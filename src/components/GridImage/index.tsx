import { Heading } from 'components/Heading'
import SectionBackground from 'components/SectionBackground'
import TextComponent from 'components/TextComponent'
import * as S from './styles'

type ImageGridProps = {
  id: number
  srcImg: string
  alternativeText: string
}

export interface GridImageProps {
  title: string
  description: string
  background: boolean
  grid: ImageGridProps[]
}

const GridImage = ({
  title,
  description,
  background,
  grid
}: GridImageProps) => (
  <SectionBackground background={background}>
    <S.Wrapper>
      <Heading colorDark={!background} size="huge" uppercase>
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <S.Grid>
        {grid.map(({ id, srcImg, alternativeText }: ImageGridProps) => (
          <S.GridElement key={id}>
            <S.Image src={srcImg} alt={alternativeText} />
          </S.GridElement>
        ))}
      </S.Grid>
    </S.Wrapper>
  </SectionBackground>
)

export default GridImage
