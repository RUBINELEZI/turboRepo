import HomeScreen from '@/screens/Home'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ ...props }) {
  return (
    <div className={inter.className}>
      <HomeScreen {...props} />
    </div>
  )
}
