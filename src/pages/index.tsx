import Menu from 'components/Menu'

import linksMock from 'components/NavLinks/mock'
import logo from '../../public/assets/images/logo.svg'

const args = {
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#target',
    srcImg: logo
  }
}

export default function Home() {
  return <Menu {...args} />
}
