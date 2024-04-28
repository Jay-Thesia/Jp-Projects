import Carousel from "components/comman/carousel";
import Header from "components/shared/header";
import { useState } from "react";

const Home = () => {
  const slides = [
    "./images/black-office.jpg",
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
    </>
  );
};

export default Home;
