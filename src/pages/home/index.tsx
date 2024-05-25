import Carousel from "components/comman/carousel";
import Footer from "components/shared/footer";
import Header from "components/shared/header";
import { Certificate } from "crypto";
import Certificates from "pages/certificates";
import ContactUs from "pages/contactUs";
import Projects from "pages/ourProjects";
import OurServices from "pages/ourServices";
import Team from "pages/outTeam";
import Testimonial from "pages/testimonial";


const Home = () => {
  // "./images/black-office.jpg",
  const slides = [
    "./images/carousel/class-meeting-room.jpg",
    "./images/carousel/empty-desk.jpg",
    "./images/carousel/blue-Sofa.jpg",
  ];

  return (
    <>
      <div className="sticky z-50">
        <Header />
      </div>

      <div className="relative md-h-screen sm-h-10">
        <Carousel autoSlide={true}>
          {[
            ...slides.map((s,index) => (
              <img src={s} className="object-fill h-full w-full rounded-md" alt={s} key={index}/>
            )),
            //   <video src={vid} autoPlay muted loop />,
          ]}
        </Carousel>
      </div>

      <div className=""><OurServices/></div>
      <div className=""><Projects/></div>
      <div className=""><Testimonial/></div>
      <div className=""><Team/></div>
      <div className=""><ContactUs/></div>
      <div className=""><Certificates/></div>
      <div className=""><Footer/></div>
    </>
  );
};

export default Home;
