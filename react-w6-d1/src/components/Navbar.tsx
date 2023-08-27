function Navbar() {
    return (
      <>
          <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-stone-900 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:py-4">
              <div className="flex w-full flex-wrap items-center justify-between px-3">
                  <div>
                      <a className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0" href="/">
                          <span className="font-medium text-stone-900">Kids Book Store</span>
                      </a>
                  </div>
              </div>
          </nav>
      </>
    )
  }
  
  export default Navbar