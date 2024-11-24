import './mystyle.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      stars: 5.0,
      testimonial:
        'We hired JP Projects to build our IT office space, and they delivered beyond expectations. The design was innovative, and the execution was flawless. The project was completed on time, and the team was highly professional throughout.',
      personImagePath: '/images/testimonials/Einfochips.jpeg',
      name: 'Sudhir Naik',
      designation: 'Founder',
      companyName: 'Einfochips',
    },
    {
      id: 2,
      stars: 4.9,
      testimonial:
        'JP Projects transformed our workspace into a modern, functional, and aesthetically pleasing environment. Their attention to detail and commitment to quality were evident at every stage. I would definitely recommend them to anyone looking for reliable construction services.',
      personImagePath: 'https://pagedone.io/asset/uploads/1696229994.png',
      name: 'Nishant Dave',
      designation: 'CEO',
      companyName: 'Vagarro Technology',
    },
    {
      id: 3,
      stars: 4.9,
      testimonial:
        'The team at JP Projects was fantastic to work with. They understood our requirements perfectly and provided creative solutions that fit our budget. The result was a beautifully designed IT office that our team loves working in.',
      personImagePath: 'https://pagedone.io/asset/uploads/1696230027.png',
      name: 'Rajnikant Joshi',
      designation: 'Founder & CEO',
      companyName: '9 Series',
    },
  ];
  return (
    <div className="bg-primary">
      <div className="container mt-12 sm:mt-14 md:mt-20 lg:mt-28">
        <div className="relative  text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10 top-4 sm:top-8 md:top-12 lg:top-16 text-white">
          <p className="">TESTIMONIALS</p>
          <div
            id="clients"
            className=" absolute font-800 text-shadow-xl text-transparent text-5xl sm:text-7xl md:text-8xl lg:text-9xl right-0 left-10 bottom-2 lg:bottom-1 "
            style={{ WebkitTextStroke: '.3px white' }}
          >
            FEEDBACK
          </div>
        </div>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          // centeredSlides={true}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          style={{ marginTop: '10%' }}
        >
          {testimonials.map((currTestimonial) => (
            <SwiperSlide key={currTestimonial.id}>
              <div className="group bg-white border border-solid border-primary w-full flex justify-between flex-col rounded-xl p-6 transition-all duration-500  mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                <div className="">
                  <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-semibold text-indigo-600">
                      {currTestimonial.stars}
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800 text-ellipsis overflow-hidden min-h-56">
                    {currTestimonial.testimonial}
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={currTestimonial.personImagePath}
                    alt="avatar"
                    loading="lazy"
                  />
                  <div className="block">
                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                      {currTestimonial.name}
                    </h5>
                    <p className="text-sm text-gray-500 leading-none -mb-2">
                      {currTestimonial.designation}{' '}
                    </p>
                    <span className="text-sm text-gray-500 leading-none ">
                      {currTestimonial.companyName}{' '}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
