import { Heading } from 'components/Heading'
import * as S from './styles'

export interface LogoLinkProps {
  text: string
  srcImg?: string
  link: string
}

const LogoLink = ({ text, srcImg, link }: LogoLinkProps) => (
  <Heading size="small" uppercase>
    <S.Wrapper href={link}>
      {srcImg ? <img src={srcImg} alt={text} /> : text}
    </S.Wrapper>
  </Heading>
)

export default LogoLink
