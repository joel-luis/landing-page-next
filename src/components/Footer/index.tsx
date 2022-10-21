import TextComponent from 'components/TextComponent'
import React from 'react'
import * as S from './styles'

export interface FooterProps {
  children: string
}

const Footer = ({ children }: FooterProps) => (
  <S.Wrapper>
    <TextComponent>{children}</TextComponent>
  </S.Wrapper>
)

export default Footer
