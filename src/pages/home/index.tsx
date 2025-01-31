import Carousel from 'components/comman/carousel';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import { Certificate } from 'crypto';
import Certificates from 'pages/certificates';
import ContactUs from 'pages/contactUs';
import Projects from 'pages/ourProjects';
import OurServices from 'pages/ourServices';
import Team from 'pages/ourTeam';
import Testimonial from 'pages/testimonial';
import { useEffect } from 'react';

const Home = () => {
  // "./images/black-office.jpg",
  const slides = [
    '/images/carousel/class-meeting-room.jpg',
    '/images/carousel/empty-desk.jpg',
    '/images/carousel/blue-Sofa.jpg',
  ];

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://example.com/en/page';

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <div className="sticky z-50">
        <Header />
      </div>

      <div className="relative md-h-screen sm-h-10">
        <Carousel autoSlide={true}>{slides}</Carousel>
      </div>

      <div>
        <OurServices />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Testimonial />
      </div>
      <div className="">
        <Team />
      </div>
      <div className="">
        <ContactUs />
      </div>
      <div className="">
        <Certificates />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Home;
