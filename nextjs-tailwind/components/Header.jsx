import Link from 'next/link'
function Header () {
  return (
    <header role='banner' class='sticky top-0 w-screen'>
      <nav role='navigation' aria-label='Main navigation' class='bg-gray-900'>
        <div class='mx-auto px-4'>
          <div class='px-80 flex justify-between items-center py-4'>
            <Link class='text-white text-xl font-semi leading-none' href='/'>
              MyWebClass.org
            </Link>
            <button
              class='navbar-toggler lg:hidden'
              type='button'
              data-toggle='collapse'
              data-target='#navbarCollapse'
              aria-controls='navbarCollapse'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon' aria-hidden='true' />
              <span class='sr-only'>Toggle navigation</span>
            </button>
            <div class='hidden lg:block flex-grow'>
              <ul class='flex justify-end flex-wrap items-center'>
                <li class='nav-item'>
                  <Link
                    class='nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                    href='/content'
                  >
                    Content Template
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
