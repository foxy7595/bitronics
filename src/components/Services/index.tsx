"use client";

import { useInView } from "react-hook-inview";
import { Button, Img, Heading } from "..";
import React, { useEffect, useState } from "react";
import Viewer3D from "../3dViewer";

interface Props {
  className?: string;
  headingText?: React.ReactNode;
  systemText?: React.ReactNode;
  descriptionText?: React.ReactNode;
  detailedDescriptionText?: React.ReactNode;
  serviceText?: React.ReactNode;
  modelPath: string;
}

export default function Services({
  headingText = "システム開発事業",
  systemText = (
    <>
      SYSTEM
      <br />
      DEVELOPMENT
    </>
  ),
  descriptionText = (
    <>
      Custom Software
      <br />
      Web App
      <br />
      Mobile App
      <br />
      Maintenance
      <br />
      Re-engineering
    </>
  ),
  detailedDescriptionText,
  serviceText = "Service",
  ...props
}: Props) {
  const [ref1, inView1] = useInView({ threshold: 0.7 });
  const [show, setShow] = useState(false);
  const [mobileRatio, setIsMobile] = useState(0);

  useEffect(() => {
    // Function to update the state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768 ? window.innerWidth / 768 : 1);
    };

    // Initial check when the component mounts
    handleResize();

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (inView1 || mobileRatio) {
      setShow(true);
    }
  }, [inView1, mobileRatio]);

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center flex-1 container-xs`}
    >
      <div className="relative h-[850px] sm:h-[calc(100vw+100px)] md:h-[calc(100vw+100px)] md:max-h-[760px] max-h-none  self-stretch">
        <div
          ref={ref1}
          className="absolute bottom-[7%] left-0 right-0 m-auto w-[74%] sm:w-full bg-gradient "
        >
          <Viewer3D
            modelPath={props.modelPath}
            show={show}
            width={714}
            height={620}
            mobileRatio={mobileRatio}
          />
        </div>
        {show && mobileRatio === 1 && (
          <Heading
            size="headinglg"
            as="h2"
            textAnimate
            delay={200}
            className="absolute right-0 md:right-8 top-[20%] m-auto w-[4%] text-[32px] font-bold leading-[38px] text-gray-900  sm:leading-normal sm:text-[27px]"
          >
            {headingText}
          </Heading>
        )}

        {show && (
          <Heading
            size="heading3xl"
            as="pre"
            binary={true}
            delay={200}
            className={` absolute   left-0 top-0 m-auto w-[68%] font-urbanist text-[90px] font-bold leading-[108px] sm:leading-[50px] md:leading-[74px] tracking-[2.70px] text-light_blue-a200 sm:w-[68%] md:text-[70px] sm:text-[40px]`}
          >
            {systemText}
          </Heading>
        )}
        {show && (
          <Heading
            size="heading2xl"
            as="pre"
            binary={true}
            delay={200}
            className="absolute bottom-0 !z-40 right-px m-auto   !font-trirong text-[48px] font-semibold  leading-[70px] tracking-[1.44px] text-light_blue-a200  sm:text-[16px] sm:leading-[50px] "
          >
            {descriptionText}
          </Heading>
        )}
      </div>
      <div className="flex items-center self-stretch">
        <Heading
          size="headings"
          as="h5"
          className="w-[48%] sm:w-full md:w-full font-notosanscjkjp text-[20px] font-bold leading-[200%] text-gray-900  sm:text-[17px]"
        >
          {detailedDescriptionText}
        </Heading>
        <div className="flex flex-1 items-center justify-end gap-[31px] self-end">
          <Heading
            size="headings"
            as="h5"
            className="self-end text-[20px] font-bold text-gray-900 underline sm:text-[17px]"
          >
            {serviceText}
          </Heading>
          <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-900 px-3">
            <Img src="img_tdesign_swap_right.svg" width={16} height={4} />
          </Button>
        </div>
      </div>
    </div>
  );
}
