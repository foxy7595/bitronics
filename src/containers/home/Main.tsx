import React from "react";
import { Heading } from "@/components";

const Main: React.FC = () => {
  return (
    <div className=" flex items-center justify-center self-stretch ">
      <div className="w-full">
        <div className="relative  flex items-center md:flex-col overflow-hidden">
          <div className="flex flex-col items-start w-full  overflow-hidden  relative">
            <img
              src="/images/haft-logo.png"
              alt="logo haft"
              className="object-cover  w-auto h-[calc(200vh-450px)] sm:h-[calc(100vh+200px)] sm:w-[50%] md:w-[50%] md:h-[calc(100vh+300px)]  sm:pb-[150px]  md:pb-[15vh] relative z-10 mt-[54px]"
            />
            <div className="absolute right-[20px] sm:right-[-60px] scale-75 ">
              <Heading
                size="headingxl"
                as="h1"
                textAnimate
                delay={1600}
                className="w-[36px] self-center text-[12px] font-bold  leading-[38px] absolute right-[220px] text-gray-900 md:px-5 "
              >
                ビジネスを進化させよう
              </Heading>

              <Heading
                size="headingxl"
                textAnimate
                as="h2"
                delay={700}
                className="w-[36px] text-[36px] font-bold leading-[42px] text-gray-900 md:px-5 md:text-[34px]  absolute right-[170px]  sm:text-[32px]"
              >
                システム開発で
              </Heading>
              <Heading
                size="headingxl"
                as="h3"
                textAnimate
                delay={0}
                className="w-[36px] text-[36px] font-bold leading-[42px] text-gray-900 md:px-5 md:text-[34px] absolute right-[120px]  sm:text-[32px]"
              >
                革新的な
              </Heading>
            </div>

            <Heading
              size="heading4xl"
              as="h4"
              className="  !text-blue-800  !font-medium sm:text-[120px] md:!text-[150px] animate-slide-left absolute bottom-[calc(50%-140px)] sm:bottom-0 sm:top-[calc(100vh-330px)]  md:bottom-[calc(50%-140px)] md:top-none font-urbanist left-[230px] whitespace-nowrap"
            >
              Empower Your <i className=" !font-trirong not-italic">Growth</i>{" "}
              with <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development. Empower Your{" "}
              <i className=" !font-trirong not-italic">Growth</i> with{" "}
              <i className="!font-trirong not-italic"> Advanced</i> System
              Development.
            </Heading>

            <div className="flex flex-col items-center w-full bottom-0 gap-[50px] self-stretch sm:bottom-[-20px]  md:bottom-[8vh]  sm:gap-[47px] z-40 absolute">
              <Heading
                size="headingxl"
                as="h5"
                className="text-center text-[36px] font-bold  text-gray-900 md:text-[36px] sm:text-[20px] sm:scale-90 whitespace-nowrap"
              >
                <span className="block sm:hidden md:hidden">
                  {" "}
                  Bitronicsはデジタル領域の専門家です
                </span>
                <span className="hidden sm:block md:block text-center">
                  {" "}
                  Bitronics
                  <br />
                  はデジタル領域の専門家です
                </span>
              </Heading>
              <Heading
                size="heading3xl"
                as="h6"
                binary
                className="font-urbanist  text-[90px] relative z-20 font-semibold tracking-[2.70px] text-light_blue-a200 md:text-[48px] text-center sm:mb-3"
              >
                Digital Domain Specialist
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
