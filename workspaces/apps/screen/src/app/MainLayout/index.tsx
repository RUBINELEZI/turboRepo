import Image from 'next/image'
import Background from './Background'

const MainLayout = ({ children }) => {
  return (
    <div className="h-[100vh] bg-[#FFCDC9]">
      <Background />
      <main className="absolute">{children}</main>
    </div>
  )
}

export default MainLayout
