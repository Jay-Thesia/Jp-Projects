import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = ({
  showNavBar = true,
  isAdminView = false,
}: {
  showNavBar?: boolean;
  isAdminView?: boolean;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary">
      {showNavBar && isAdminView ? (
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1 p-1.5">
            {/* className="-m-1.5 p-1.5" */}
            <Link to="#">
              <span className="sr-only">JP Projects</span>
              <img
                className="w-7 h-7 lg:w-8 lg:h-8 scale-[2.9]"
                src="./images/logo/JpLogo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden text-white">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 text-white">
            <Link to="/" className="text-sm font-semibold leading-6 ">
              Home
            </Link>
            <Link to="/dashboard/projects" className="text-sm font-semibold ">
              Projects
            </Link>
            <Link
              to="/dashboard/clients"
              className="text-sm font-semibold leading-6 "
            >
              Clients
            </Link>
            <Link
              to="/dashboard/career"
              className="text-sm font-semibold leading-6 "
            >
              Career
            </Link>
          </div>
        </nav>
      ) : (
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1 p-1.5">
            {/* className="-m-1.5 p-1.5" */}
            <Link to="/">
              <span className="sr-only">JP Projects</span>
              <img
                className="w-7 h-7 lg:w-8 lg:h-8 scale-[2.9]"
                src="./images/logo/JpLogo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden text-white">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 text-white">
            <HashLink
              smooth
              to="/"
              className="text-sm font-semibold leading-6 "
            >
              Home
            </HashLink>

            <HashLink smooth to="#projects" className="text-sm font-semibold ">
              Projects
            </HashLink>
            <HashLink
              smooth
              to="#clients"
              className="text-sm font-semibold leading-6 "
            >
              Clients
            </HashLink>
            <HashLink
              smooth
              to="#aboutUs"
              className="text-sm font-semibold leading-6 "
            >
              About us
            </HashLink>
            <HashLink
              smooth
              to="#contactUs"
              className="text-sm font-semibold leading-6 "
            >
              Contact us
            </HashLink>
            <Link to="/career" className="text-sm font-semibold leading-6 ">
              Career
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="text-sm font-semibold leading-6 text-white "
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      )}
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      {mobileMenuOpen &&
        (isAdminView ? (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}

            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">JP projects</span>
                  <img
                    className="w-7 h-7 lg:w-8 lg:h-8 scale-[2.9]"
                    src="./images/logo/JpLogo.png"
                    alt=""
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y ">
                  <div className="space-y-2 py-6">
                    <Link
                      to="/"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>

                    <Link
                      to="dashbaord/projects"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      Projects
                    </Link>
                    <Link
                      to="dashbaord/clients"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      Clients
                    </Link>

                    <Link
                      to="dashbaord/career"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      Career
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}

            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">JP projects</span>
                  <img
                    className="w-7 h-7 lg:w-8 lg:h-8 scale-[2.9]"
                    src="./images/logo/JpLogo.png"
                    alt=""
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y ">
                  <div className="space-y-2 py-6">
                    <HashLink
                      smooth
                      to="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </HashLink>

                    <HashLink
                      smooth
                      to="#projects"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      Projects
                    </HashLink>
                    <HashLink
                      smooth
                      to="#clients"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      Clients
                    </HashLink>
                    <HashLink
                      smooth
                      to="#aboutUs"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      About us
                    </HashLink>
                    <HashLink
                      smooth
                      to="#contactUs"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      Contact us
                    </HashLink>
                    <HashLink
                      to="/career"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      Career
                    </HashLink>
                  </div>
                  <div className="py-6">
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-900"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </header>
  );
};

export default Header;
