import { Heading } from 'components/Heading'
import SectionBackground from 'components/SectionBackground'
import TextComponent from 'components/TextComponent'
import * as S from './styles'

type GridProps = {
  id: number
  title: string
  description: string
}

export interface GridSectionPros {
  background: boolean
  title: string
  description: string
  grid: GridProps[]
}

const GridSection = ({
  background,
  title,
  description,
  grid
}: GridSectionPros) => (
  <SectionBackground background={background}>
    <S.Wrapper>
      <Heading colorDark={!background} size="huge" uppercase>
        {title}
      </Heading>
      <TextComponent>{description}</TextComponent>
      <S.Grid>
        {grid.map(({ id, description, title }: GridProps) => (
          <S.GridElement key={id}>
            <Heading colorDark={!background} size="medium">
              {title}
            </Heading>
            <TextComponent>{description}</TextComponent>
          </S.GridElement>
        ))}
      </S.Grid>
    </S.Wrapper>
  </SectionBackground>
)

export default GridSection
