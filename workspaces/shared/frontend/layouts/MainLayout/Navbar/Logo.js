'use client'
import Image from 'next/image'
import Link from 'next/link'
import brandLogo from 'ui/images/logo.png'

const Logo = ({ scale = 0.5 }) => {
  return (
    <Link href="/">
      <Image
        width={400 * scale}
        height={100 * scale}
        priority="true"
        alt="logo"
        src={brandLogo}
      />
    </Link>
  )
}

export default Logo
