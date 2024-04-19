import React from "react";
import Navbar from "../Components/Navbar";
import { FooterWithSocialLinks } from "../Components/Footer";
import "swiper/css";
import TopNavbar from "../Components/topNavbar";
import { Helmet } from "react-helmet";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const News = () => {
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
      <div className="mx-10 font-sans">
        <p className="font-oswald text-xl mt-5">Мэдээ</p>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2">
            <Card className="w-full flex-row m-5 shadow-xl rounded-md ">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="m-5">
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  “ҮНДЭСНИЙ ӨВ СОЁЛ-ҮНДЭСНИЙ ДАРХЛАА” СУРГАЛТ, ТЭМЦЭЭН 2024 ОНЫ
                  04 ДҮГЭЭР САРЫН 16-НЫ ӨДӨР ШИЛҮҮСТЭЙ СУМАНД ЗОХИОН
                  БАЙГУУЛАГДЛАА.{" "}
                </Typography>
                <a href="#" className="inline-block">
                  <Button variant="text" className="flex items-center gap-1">
                    Дэлгэрэнгүй
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
};
export default News;
