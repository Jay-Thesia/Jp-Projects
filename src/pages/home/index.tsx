import Carousel from "components/comman/carousel";
import Header from "components/shared/header";
import OurServices from "pages/ourServices";
import { useState } from "react";

const Home = () => {
  // "./images/black-office.jpg",
  const slides = [
    "./images/class-meeting-room.jpg",
    "./images/empty-desk.jpg",
    "./images/blue-Sofa.jpg",
  ];

  return (
    <>
      <div className="z-10">
        <Header />
      </div>

      <div className="relative md-h-screen sm-h-10">
        <Carousel autoSlide={true}>
          {[
            ...slides.map((s) => (
              <img src={s} className="object-fill h-full w-full rounded-md" />
            )),
            //   <video src={vid} autoPlay muted loop />,
          ]}
        </Carousel>
      </div>

      <div className=""><OurServices/></div>
    </>
  );
};

export default Home;
