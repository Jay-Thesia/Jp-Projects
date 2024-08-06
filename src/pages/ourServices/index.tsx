const OurServices = () => {
  return (
    <div className="container mt-12 sm:mt-14 md:mt-20 lg:mt-28">
      <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10">
        <p>OUR SERVICES</p>
        <div
          id="services"
          className="absolute font-800 text-white text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-2 lg:bottom-1 -z-10"
          style={{ WebkitTextStroke: '0.3px #142534' }}
        >
          SERVICES
        </div>
      </div>

      {/* Cards */}
      <div className="mt-2 md:mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className=" bg-white rounded-lg shadow-2xl p-8">
          <div className="relative overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="/images/services/servicess1.png"
              alt="hands with sheet"
            />
          </div>
          {/* <h3 className="text-xl font-bold text-gray-900 mt-4 min-h-20 max-h-20 overflow-hidden">Construction services</h3> */}
          <h3 className="text-xl font-bold text-gray-900 mt-4 ">
            Engineering techniques & implementation
          </h3>
          <p className="overflow-hidden h-36 text-gray-500 text-sm mt-2">
            The world of construction rests on the strong shoulders of
            engineers. From soil analysis to material selection, their expertise
            is the invisible foundation of safe, enduring, and sustainable
            structures. Our work lifts the veil on these fascinating techniques.{' '}
          </p>

          <div className="flex justify-center mt-4">
            <button className="bg-primary text-secondary py-2 px-5 rounded-full font-bold hover:bg-gray-600">
              Read more
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="relative overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="/images/services/servicess6.png"
              alt="sheet and glasses"
            />
            <div className="absolute inset-0 "></div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-4">
            Pre-construction services
          </h3>

          <p className="overflow-hidden h-40 text-gray-500 text-sm mt-2">
            Before breaking ground, we ensure a smooth build with our
            pre-construction services. We'll work with you to refine your
            vision, establish a realistic budget, identify potential challenges,
            and develop a collaborative roadmap for success. Our meticulous
            planning lays the foundation for a successful.
          </p>

          <div className="flex justify-center mt-4">
            <button className="bg-primary text-secondary py-2 px-5 rounded-full font-bold hover:bg-gray-600">
              Read more
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 ">
          <div className="relative overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="/images/services/servicess3.png"
              alt="Product"
            />
            <div className="absolute inset-0"></div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mt-4 ">
            Construction services
          </h3>
          <p className="overflow-hidden h-40 text-gray-500 text-sm mt-2">
            At JP Projects, construction services orchestrate your vision, from
            blueprint to brick. Our team of architects composes the design,
            engineers craft the structure, and skilled builders bring it to
            life. Together, they transform dreams into extraordinary realities,
            ensuring every note is perfectly placed for a harmonious creation.{' '}
          </p>

          <div className="flex justify-center mt-4">
            <button className="bg-primary text-secondary py-2 px-5 rounded-full font-bold hover:bg-gray-600">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
