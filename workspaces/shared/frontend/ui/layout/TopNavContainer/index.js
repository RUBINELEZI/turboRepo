const TopNavContainer = ({ children }) => {
  return (
    <header className="fixed border-b-2 w-full h-[--navbar-height] bg-white  border-b-1">
      <nav className="px-5 md:px-10 lg:px-16 h-[--navbar-height] w-full flex flex-column justify-center">
        {children}
      </nav>
    </header>
  )
}

export default TopNavContainer
