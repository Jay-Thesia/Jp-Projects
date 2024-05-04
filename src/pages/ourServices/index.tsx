import React from 'react'

const OurServices = () => {
  return (
    <div className="container sm:mt-10 md:mt-12 lg:mt-24">
      <div className="relative sm:text-10xl md:text-6xl lg:text-7xl z-10">
        <p >OUR SERVICES</p>
      <div className="absolute font-800 text-white text-transparent sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-0 -z-10" style={{WebkitTextStroke:"0.3px #142534"}}>SERVICES</div>
      </div>
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <div className=" bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Product"/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Engineering techniques & implementation</h3>
                <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">$29.99</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div> */}
            
            {/* <div className="flex flex-col bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="/images/services/servicess6.png" alt="Product"/>
                    <div className="absolute inset-0 "></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Pre-construction services</h3>
                <p className="text-gray-500 text-sm mt-2 overflow-hidden text-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt. dsjosifj oidsfjodf dosdifj odfosdfifdo fsdofdo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore ab dolore soluta explicabo possimus fugit qui suscipit porro totam ipsum cupiditate vel praesentium. Minima voluptate rerum harum accusamus itaque.</p>
                <div className="flex justify-center mt-4 flex-grow">
                   
                    <button className="bg-primary text-white py-2 px-5 rounded-full font-bold hover:bg-gray-600">Read more</button>
                </div>
            </div> */}


            <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="relative overflow-hidden">
                    <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" alt="Product"/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">Construction services</h3>
                <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-bold text-lg">$29.99</span>
                    <button className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
        </div>


      </div>
    
  )
}

export default OurServices
