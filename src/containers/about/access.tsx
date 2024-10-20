import { useInView } from "react-hook-inview";
import { Text, Heading } from "../../components";
import React from "react";
import useIsMobile from "@/hooks/useIsMobile";

export default function Access() {
  const isMobile = useIsMobile();
  const [ref, inView] = useInView({
    threshold: 0.8,
  });
  return (
    <div className="flex items-start justify-between  w-full md:flex-col">
      <div className="min-w-[200px]">
        {inView || isMobile ? (
          <Heading
            size="heading3xl"
            as="h2"
            binary={!isMobile}
            className="font-urbanist !text-[48px] font-semibold tracking-[1.44px] text-gray-900 md:!text-[44px] sm:!text-[38px] md:pb-5 "
          >
            Access
          </Heading>
        ) : (
          <Heading
            size="heading3xl"
            as="h2"
            className="font-urbanist !text-[48px] font-semibold tracking-[1.44px] !text-transparent md:!text-[44px] sm:!text-[38px] md:pb-5 "
          ></Heading>
        )}
      </div>
      <div className=" flex-1 flex justify-end w-full relative">
        <div ref={ref} className=" absolute top-10"></div>
        <div className="flex w-[78%]  flex-col gap-[60px]  md:w-full sm:gap-[30px]">
          <div className=" flex justify-center bg-gray-300 items-center  py-[228px] relative overflow-hidden ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071027.2914225003!2d75.12999613896064!3d17.987826385441366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276decedf%3A0x2c12e79e6f9344e2!2sGachibowli%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2s!4v1729414853764!5m2!1sen!2s"
              width={1050}
              height={1000}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className=" absolute"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center">
              <Heading as="h2" className="text-[16px] font-bold text-black-900">
                住所
              </Heading>
              <Heading
                as="h3"
                className="ml-[26px] text-[16px] font-bold text-black-900"
              >
                ｜
              </Heading>
              <Text
                as="p"
                className="ml-[26px] text-[16px] font-normal text-black-900"
              >
                東京都江戸川区松江2-36-10
              </Text>
            </div>
            <div className="flex flex-wrap items-center">
              <Heading as="h4" className="text-[16px] font-bold text-black-900">
                最寄り駅からの所要時間
              </Heading>
              <Heading
                as="h5"
                className="ml-[26px] text-[16px] font-bold text-black-900"
              >
                ｜
              </Heading>
              <Text
                as="p"
                className="ml-[26px] self-end text-[16px] font-normal text-black-900"
              >
                JR総武線 / 新小岩駅 徒歩18分
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
