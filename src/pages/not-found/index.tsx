import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="h-48 flex items-center justify-center">
            <h1 className="text-9xl font-bold text-gray-800 m-0">
              4
              <img
                src="/images/404Page/emoji.png"
                alt="Emoji"
                className="inline-block w-24 h-24 scale-[1.4] -z-10"
              />
              4
            </h1>
          </div>
          <h2 className="text-2xl font-bold uppercase text-gray-800 m-0">
            Oops! Page Not Be Found
          </h2>
          <p className="text-gray-500 font-light">
            Sorry but the page you are looking for does not exist, has been
            removed, name changed or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary hover:bg-secondary hover:text-black text-white rounded-full font-bold hover:opacity-80 transition-colors duration-300"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
