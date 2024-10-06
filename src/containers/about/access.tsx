import { Text, Heading } from "../../components";
import React from "react";

export default function Access() {
  return (
    <div className="flex items-start justify-between  w-full">
      <Heading
        size="heading3xl"
        as="h2"
        className="font-urbanist !text-[48px] font-semibold tracking-[1.44px] text-gray-900 md:!text-[44px] sm:!text-[38px]"
      >
        Access
      </Heading>
      <div className="flex w-[68%] flex-col gap-[60px] flex-1 md:w-full sm:gap-[30px]">
        <div className=" flex justify-center bg-gray-300  py-[228px] ">
          <Text as="p" className="text-[16px] font-normal text-blue_gray-400">
            Google map
          </Text>
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
  );
}
