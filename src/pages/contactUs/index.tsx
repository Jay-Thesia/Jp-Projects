import JotFormIframe from 'components/shared/form'
import useScrollTriggeredCountUp from 'hooks/useScrollTriggeredCountUp';
import React, { useRef } from 'react'

const ContactUs = () => {

  const ref = useRef<HTMLDivElement>(null);
  const projectCount = useScrollTriggeredCountUp(ref, 100); // 0 to 100 count-up

  const staffCount = useScrollTriggeredCountUp(ref, 30)
  const machineryCount = useScrollTriggeredCountUp(ref, 80)



  return (
    <>
      <div className="bg-primary pb-20">
        <div className="container mt-12 sm:mt-14 md:mt-20 lg:mt-28">
          <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10 top-4 sm:top-8 md:top-12 lg:top-16 text-white">
            <p >CONTACT US</p>
            <div className="absolute font-800 text-shadow-xl  text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-2 lg:bottom-1 -z-10" style={{ WebkitTextStroke: ".3px white" }}>LET'S CHAT</div>
          </div>


          <div className="mt-10 md:mt-20 lg:mt-24 grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-x-4 text-center items-center">
            <div className=" p-4 md:col-span-7 lg:col-span-7 text-gray-300"><p className='text-left sm:text-sm md:text-xl'><span className='text-secondary text-xl md:text-2xl lg:text-3xl underline'>Let's Discuss Your Project!</span> We understand that every construction project is unique. Whether you're building your dream home, renovating a commercial space, or embarking on a large-scale development, our team of experienced professionals is here to guide you every step of the way.</p><br /><p className='text-left sm:text-sm md:text-xl'>Contact us today to schedule a free consultation, discuss your project vision, and receive a customized quote. We look forward to working with you to bring your project to life!</p></div>
            <div className=" p-4 md:col-span-5 lg:col-span-5">

              <div className="bg-white py-8 lg:py-16 px-4 mx-auto max-w-screen-md rounded-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Get your free quote/Any feedback</p>


                {/* form */}
                <form action="#" className="">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@jpporjects.com" required />
                  </div>
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-4">Name</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mt-4">Your message</label>
                    <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                  </div>
                  <button type="submit" className="py-3 px-5 mt-4 text-sm font-medium text-center bg-primary text-secondary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <div className=" h-full mb-28 bg-white shadow-2xl -mt-14">
          <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 ">
            <div className="text-center p-4 text-primary">
              <p className=' font-bold text-lg md:text-xl lg:text-3xl'>Projects</p>
              <p className='text-secondary font-bold text-3xl md:text-4xl lg:text-4xl'><div ref={ref}>{projectCount}+</div></p>
            </div>

            <div className="text-center p-4 text-primary">
              <p className=' font-bold text-lg md:text-xl lg:text-3xl'>Staff</p>
              <p className='text-secondary font-bold text-3xl md:text-4xl lg:text-4xl'><div ref={ref}>{staffCount}+</div></p>
            </div>

            <div className="text-center p-4 text-primary">
              <p className=' font-bold text-lg md:text-xl lg:text-3xl'>Machinery</p>
              <p className='text-secondary font-bold text-3xl md:text-4xl lg:text-4xl'><div ref={ref}>{machineryCount}+</div></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
