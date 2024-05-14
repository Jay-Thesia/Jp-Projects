

const OurServices = () => {
    return (
        <div className="container mt-12 sm:mt-14 md:mt-20 lg:mt-28">
            <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10">
                <p >OUR SERVICES</p>
                <div className="absolute font-800 text-white text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-2 lg:bottom-1 -z-10" style={{ WebkitTextStroke: "0.3px #142534" }}>SERVICES</div>
            </div>

            {/* Cards */}
            <div className="mt-2 md:mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className=" bg-white rounded-lg shadow-2xl p-8">
                    <div className="relative overflow-hidden">
                        <img className="object-cover w-full h-full" src="/images/services/servicess1.png" alt="hands with sheet" />


                    </div>
                    {/* <h3 className="text-xl font-bold text-gray-900 mt-4 min-h-20 max-h-20 overflow-hidden">Construction services</h3> */}
                    <h3 className="text-xl font-bold text-gray-900 mt-4 ">Engineering techniques & implementation</h3>
                    <p className="overflow-hidden h-36 text-gray-500 text-sm mt-2">Lorem ipsum dol
                        libero id mauris malesuada tincidunt. dsjosifj oidsfjodf dosdifj odfosdfifdo fsdofdo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore ab dolore soluta explicabo possimus fugit qui suscipit porro totam ipsum cupiditate vel praesentium. Minima voluptate rerum harum accusamus itaque. dsofjdsi  dsofijs osdijfdsf sofidjs dfo odsifdsjfi dsofj sdfodjsf </p>

                    <div className="flex justify-center mt-4">
                        <button className="bg-primary text-secondary py-2 px-5 rounded-full font-bold hover:bg-gray-600">Read more</button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-2xl p-8">
                    <div className="relative overflow-hidden">
                        <img className="object-cover w-full h-full" src="/images/services/servicess6.png" alt="sheet and glasses" />
                        <div className="absolute inset-0 "></div>

                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4">Pre-construction services</h3>

                    <p className="overflow-hidden h-36 text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                        ante justo. Integer euismod libero id mauris malesuada tincidunt. dsjosifj oidsfjodf dosdifj odfosdfifdo fsdofdo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore ab dolore soluta explicabo possimus fugit qui suscipit porro totam ipsum cupiditate vel praesentium. Minima voluptate rerum harum accusamus itaque.</p>

                    <div className="flex justify-center mt-4">
                        <button className="bg-primary text-secondary py-2 px-5 rounded-full font-bold hover:bg-gray-600">Read more</button>
                    </div>
                </div>


                <div className="bg-white rounded-lg shadow-2xl p-8 ">
                    <div className="relative overflow-hidden">
                        <img className="object-cover w-full h-full" src="/images/services/servicess3.png" alt="Product" />
                        <div className="absolute inset-0"></div>

                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4 ">Construction services</h3>
                    <p className="overflow-hidden h-36 text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                        ante justo. Integer euismod libero id mauris malesuada tincidunt. dsjosifj oidsfjodf dosdifj odfosdfifdo fsdofdo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore ab dolore soluta explicabo possimus fugit qui suscipit porro totam ipsum cupiditate vel praesentium. Minima voluptate rerum harum accusamus itaque.</p>

                    <div className="flex justify-center mt-4">
                        <button className="bg-primary text-secondary py-2 px-5 rounded-full font-bold hover:bg-gray-600">Read more</button>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default OurServices
