import React from 'react';
import { Link } from 'react-router-dom';

const HalfHeader = () => {
  return (
    <header className="bg-primary">
      {' '}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <Link
          to={'..'}
          className="inline-flex items-center border border-secondary px-1 py-1.4 md:py-1 md:px-2.5  rounded-md text-secondary hover:bg-indigo-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
          <span className="ml-1 font-bold text-sm hidden sm:block">Back</span>
        </Link>
        <div className="flex justify-center lg:flex-1 p-1.5">
          <Link to="/">
            <span className="sr-only">JP Projects</span>
            <img
              className="w-7 h-7 lg:w-8 lg:h-8 scale-[2.9]"
              src="/images/logo/JpLogo.png"
              alt="site-logo"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HalfHeader;
