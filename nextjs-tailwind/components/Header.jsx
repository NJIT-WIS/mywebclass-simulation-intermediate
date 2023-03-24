function Header() {
  return (
    <div>
      <header role="banner" class="fixed top-0 w-full">
        <nav
          role="navigation"
          aria-label="Main navigation"
          class="px-12 bg-gray-800"
        >
          <div class="container mx-auto px-4">
            <div class="flex justify-between items-center py-4">
              <a class="text-white text-xl font-bold leading-none" href="/">
                MyWebClass.org
              </a>
              <button
                class="navbar-toggler lg:hidden"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" aria-hidden="true"></span>
                <span class="sr-only">Toggle navigation</span>
              </button>
              <div class="hidden lg:block flex-grow">
                <ul class="flex justify-end flex-wrap items-center">
                  <li class="nav-item">
                    <a
                      class="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="content.html"
                    >
                      Content Template
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
