import { Button } from "antd";
import React from "react";
import { Helmet } from "react-helmet";

const TopNavbar = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"
        />
      </Helmet>
      <div className="shadow-md w-full top-0 left-0 bg-white">
        <div className="md:flex py-2 items-center justify-between md:px-10 px-7">
          <div className="flex">
            <img src="/assets/images/logo.jpg" width={80} alt="Logo" />
            <div className="leading-5 text-xl ml-5 flex flex-col items-center justify-center text-gray-800">
              <p className="font-oswald font-medium">ЗАВХАН АЙМАГ</p>
              <p className="font-oswald">ШИЛҮҮСТЭЙ СУМ</p>
            </div>
          </div>
          <Button className="bg-blue-900 text-white">Нэвтрэх</Button>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
