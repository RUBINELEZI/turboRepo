import Image from 'next/image'
import logo from 'ui/images/logo.png'

const BrandLogo = ({ scale = 1 }) => {
  return <Image priority="true" width={400 * scale} height={100 * scale} alt="logo" src={logo} />
}

export default BrandLogo
