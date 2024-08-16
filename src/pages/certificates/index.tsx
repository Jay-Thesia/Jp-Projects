import React from 'react';

const Certificates = () => {
  return (
    <div className="container mt-12 sm:mt-14 md:mt-20 lg:mt-28">
      <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10">
        <p>CERTIFICATES</p>
        <div
          id="certificates"
          className="absolute font-800 text-white text-transparent text-4xl sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-2 lg:bottom-1 -z-10"
          style={{ WebkitTextStroke: '0.3px #142534' }}
        >
          ACHIEVEMENT
        </div>
      </div>

      {/* Cards */}

      <div className="mt-2 md:mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className=" bg-white rounded-lg shadow-2xl p-8">
          <div className="relative">
            <img
              className="w-full h-64 sm:h-72 md:h-80 lg:h-[36rem]"
              src="/images/services/servicess1.png"
              alt="hands with sheet"
            />
          </div>
        </div>

        <div className=" bg-white rounded-lg shadow-2xl p-8">
          <div className="relative">
            <img
              className="w-full h-64 sm:h-72 md:h-80 lg:h-[36rem]"
              src="/images/services/servicess1.png"
              alt="hands with sheet"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
