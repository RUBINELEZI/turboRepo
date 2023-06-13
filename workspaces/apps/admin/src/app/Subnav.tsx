'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Subnav = () => {
  const route = usePathname()
  return (
    <div className="text-lg mb-2 py-2 flex justify-around shadow-md">
      <Link className={route.startsWith('/users') ? 'font-bold' : ''} href="/users">
        Users
      </Link>
      <Link className={route.startsWith('/salons') ? 'font-bold' : ''} href="/salons">
        Salons
      </Link>
      <Link href="/">Something</Link>
      <Link href="/">Something</Link>
      <Link href="/">Something</Link>
    </div>
  )
}

export default Subnav
