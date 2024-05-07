import React from 'react'
import "./mystyle.css"
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';



const Testimonial = () => {

  return (
    <div className="bg-primary">


      <div className="container mt-12 sm:mt-14 md:mt-20 lg:mt-28">
        <div className="relative  text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10 top-4 sm:top-8 md:top-12 lg:top-16 text-white">
          <p className='' >TESTIMONIALS</p>
          <div className=" absolute font-800 text-shadow-xl text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-2 lg:bottom-1 " style={{ WebkitTextStroke: ".3px white" }}>FEEDBACK</div>
        </div>
        <Swiper
          effect={'cards'}
          modules={[Pagination, Navigation, Autoplay, EffectCards]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          pagination={{ clickable: true, el: ".swiper-pagination", }}

          autoplay={{ delay: 2000, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 60,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          style={{ marginTop: "10%" }}

        >


          <SwiperSlide>
            <div
              className="group bg-white border border-solid border-primary w-full flex justify-between flex-col rounded-xl p-6 transition-all duration-500  mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
              <div className="">
                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                  <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor" />
                  </svg>
                  <span className="text-base font-semibold text-indigo-600">4.9</span>
                </div>
                <p
                  className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                  Pagedone has made it possible for me to stay on top of my portfolio and make
                  informed
                  decisions
                  quickly and easily.
                </p>
              </div>
              <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696229969.png"
                  alt="avatar" />
                <div className="block">
                  <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Jane D</h5>
                  <span className="text-sm leading-4 text-gray-500">CEO </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div
              className="group bg-white border border-solid border-gray-300 flex justify-between flex-col w-full rounded-xl p-6 transition-all duration-500 mx-auto hover:border-indigo-600 slide_active:border-indigo-600 hover:shadow-sm">
              <div className="">
                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                  <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor" />
                  </svg>
                  <span className="text-base font-semibold text-indigo-600">4.9</span>
                </div>
                <p
                  className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                  Thanks to pagedone, I feel more informed and confident about my investment decisions
                  than
                  ever
                  before.
                </p>
              </div>
              <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696229994.png"
                  alt="avatar" />
                <div className="block">
                  <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh P.
                  </h5>
                  <span className="text-sm leading-4 text-gray-500">Product Designer</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div
              className=" flex justify-between flex-col  group bg-white border border-solid border-gray-300 rounded-xl w-full p-6 transition-all duration-500  mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm">
              <div className="">
                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                  <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                      fill="currentColor" />
                  </svg>
                  <span className="text-base font-semibold text-indigo-600">4.9</span>
                </div>
                <p
                  className="text-base text-primary leading-6  transition-all duration-500  pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                  The customer service team at pagedone went above and beyond to help me resolve a
                  billing
                  issue. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nobis repellat dolorem eligendi delectus asperiores, commodi, ipsum numquam aliquam, animi mollitia praesentium? Explicabo quo veniam fuga doloribus. Dolorem, quas officia.
                </p>
              </div>
              <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                <img className="h-10 w-10" src="	https://pagedone.io/asset/uploads/1696230027.png"
                  alt="avatar" />
                <div className="block">
                  <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Alex K.</h5>
                  <span className="text-sm leading-4 text-gray-500">Design Lead</span>
                </div>
              </div>
            </div>
          </SwiperSlide>



          <div className="swiper-pagination"></div>
        </Swiper>

      </div>
    </div>
  )
}

export default Testimonial
