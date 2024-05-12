
const Team = () => {
  return (
    <div className="container mt-12 sm:mt-14 md:mt-20 lg:mt-28">
      <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10">
        <p >OUR TEAM</p>
        <div className="absolute font-800 text-white text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-2 lg:bottom-1 -z-10" style={{ WebkitTextStroke: "0.3px #142534" }}>EXPERTS</div>
      </div>


      {/* Cards */}
      <div className="mt-2 md:mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-2 gap-14">

        <div className=" bg-white rounded-lg shadow-2xl p-8">
          <div className="relative">
            <img className="w-full md:h-96 lg:h-[31rem]" src="/images/services/servicess1.png" alt="hands with sheet" />


          </div>
          <h3 className="text-2xl font-bold text-gray-900 mt-5 text-center ">Jitu Hirapara</h3>
          <p className=" text-gray-500 text-lg mt-2 text-center">Founder & MD </p>

          
        </div>

        <div className=" bg-white rounded-lg shadow-2xl p-8">
          <div className="relative">
            <img className="w-full md:h-96 lg:h-[31rem]" src="/images/services/servicess6.png" alt="hands with sheet" />


          </div>
          <h3 className="text-2xl font-bold text-gray-900 mt-5 text-center ">Paresh Hirapara</h3>
          <p className=" text-gray-500 text-lg mt-2 text-center">Founder & CEO </p>

          
        </div>


       
      </div>
    </div>
    )
}

export default Team
