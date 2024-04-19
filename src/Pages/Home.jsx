import React from "react";
import Navbar from "../Components/Navbar";
import Highlights from "../Components/Home/Highlights";
import { FooterWithSocialLinks } from "../Components/Footer";
import "swiper/css";
import Carousel from "../Components/Home/carousel";
import TopNavbar from "../Components/topNavbar";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"
        />
      </Helmet>
      <TopNavbar />
      <Navbar />
      <Carousel />
      <div className="mx-10 font-sans">
        <div className="">
          <p className="border-l-4  font-oswald   pl-4 text-2xl border-blue-900 mt-10">
            # ОНЦЛОХ МЭДЭЭЛЭЛ
          </p>
          <div className="my-5">
            <Highlights />
          </div>
        </div>
        <div className="">
          <p className="border-l-4 font-oswald  pl-4 text-2xl border-blue-900">
            # СҮҮЛД НЭМЭГДСЭН{" "}
          </p>
          <div className="my-5">
            <Highlights />
          </div>
        </div>
        <div className="grid md:grid-cols-5 md:gap-4 my-5  ">
          <div className=" bg-white shadow-md p-10 rounded-md transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
            <div className="flex justify-center">
              <p className="  bg-blue-200 text-blue-900 justify-center p-5 rounded-full text-xl">
                10
              </p>
            </div>
            <p className="flex justify-center">Газар нутаг</p>
          </div>
          <div className=" bg-white shadow-md p-10 rounded-md transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
            <div className="flex justify-center">
              <p className="  bg-blue-200 text-blue-900 justify-center p-5 rounded-full text-xl">
                10
              </p>
            </div>
            <p className="flex justify-center">Хүн ам</p>
          </div>
          <div className=" bg-white shadow-md p-10 rounded-md transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
            <div className="flex justify-center">
              <p className=" bg-blue-200 text-blue-900 justify-center p-5 rounded-full text-xl">
                10
              </p>
            </div>
            <p className="flex justify-center">Айл өрх</p>
          </div>
          <div className=" bg-white shadow-md p-10 rounded-md transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
            <div className="flex justify-center">
              <p className=" bg-blue-200 text-blue-900 justify-center p-5 rounded-full text-xl">
                10
              </p>
            </div>
            <p className="flex justify-center"> Аж ахуйн нэгж</p>
          </div>
          <div className=" bg-white shadow-md p-10 rounded-md transition ease-in-out delay-200 hover:-translate-y-2 duration-200">
            <div className="flex justify-center">
              <p className=" bg-blue-200 text-blue-900 justify-center p-5 rounded-full text-xl">
                10
              </p>
            </div>
            <p className="flex justify-center">Мал сүрэг</p>
          </div>
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
};
export default Home;
