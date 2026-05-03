

const NavBar = () => {
  return (
    <div className="border-b-0 w-6xl border-r border-l border-gray-300 border-dashed bg-white mx-auto h-18 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6">
      <div className="w-full flex items-center justify-between gap-4">
        <div></div>
        <div className="flex items-center gap-8 font-light cursor-pointer">
            <p>Projects</p>
            <p>Blog</p>
            <p>Contact</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default NavBar
