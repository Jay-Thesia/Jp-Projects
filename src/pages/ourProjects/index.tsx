import React from 'react'

const Projects = () => {
    return (
        <div className="container mt-12 sm:mt-14 md:mt-20 lg:mt-28">
            <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10">
                <p >OUR PROJECTS</p>
                <div className="absolute font-800 text-white text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-2 lg:bottom-1 -z-10" style={{ WebkitTextStroke: "0.3px #142534" }}>GALLERY</div>
            </div>

            {/* Cards */}
            
            <div className="mt-12 relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-2xl w-full  flex-row lg:max-h-80">
                <div
                    className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img
                        src="/images/projects/project1.png"
                        alt="card-image" className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                    <h6
                        className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                        startups
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Google Inc.
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 max-h-32 overflow-hidden">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part of
                        the story
                    </p>

                    <div className="flex justify-center">
                        <button className="flex items-center gap-2 px-4  py-2  font-bold text-center text-secondary rounded-full hover:bg-gray-700   bg-primary"> Know More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            strokeWidth="2" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button>
                    </div>

                    
                </div>
            </div>

            <div className="mt-12 relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-2xl w-full  flex-row max-h-80">
               
                <div className="p-6">
                    <h6
                        className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                        startups
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Google Inc.
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 max-h-32 overflow-hidden">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part of
                        the story
                    </p>

                    <div className="flex justify-center">
                        <button className="flex items-center gap-2 px-4  py-2  font-bold text-center text-secondary rounded-full hover:bg-gray-700   bg-primary"> Know More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            strokeWidth="2" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button>
                    </div>

                    
                </div>

                <div
                    className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-l-none bg-clip-border rounded-xl shrink-0">
                    <img
                        src="/images/projects/project2.png"
                        alt="card" className="object-cover w-full h-full" />
                </div>
            </div>

            <div className="mt-12 relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-2xl w-full  flex-row max-h-80">
                <div
                    className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img
                        src="/images/projects/project1.png"
                        alt="card-image" className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                    <h6
                        className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                        startups
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Google Inc.
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700 max-h-32 overflow-hidden">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part of
                        the story
                    </p>

                    <div className="flex justify-center">
                        <button className="flex items-center gap-2 px-4  py-2  font-bold text-center text-secondary rounded-full hover:bg-gray-700   bg-primary"> Know More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            strokeWidth="2" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Projects
