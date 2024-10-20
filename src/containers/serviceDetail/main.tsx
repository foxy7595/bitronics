import { Text, Img, Heading } from "../../components";
import React from "react";

export default function Main({ data }: { data?: any }) {
  return (
    <div className="mt-[40px] flex flex-col items-center self-stretch mx-[100px] md:mx-6 sm:mx-4 md:mt-6">
      <div className=" flex flex-col gap-9 w-full">
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-[30px]  w-full">
            <Heading
              size="heading4xl"
              as="h2"
              className="font-urbanist text-[64px] font-semibold tracking-[1.92px] text-gray-900 md:!text-[48px] sm:!text-[36px]"
            >
              {data?.title}
            </Heading>
            <div className="h-px flex-1 bg-gray-900 min-w-[120px] " />
          </div>
          <Heading
            size="headingxl"
            as="h3"
            className="text-[24px] font-bold text-gray-900 md:text-[20px] sm:!text-[15px]"
          >
            {data?.description}
          </Heading>
        </div>

        <Img
          src={data?.image}
          width={1240}
          height={700}
          alt="Teamprogrammer"
          className=" max-h-[700px] w-full object-cover"
        />
        <Text
          size="textxl"
          as="p"
          className="w-[68%] text-[18px] font-normal leading-[200%] sm:text-[14px] text-gray-900 md:w-full"
        >
          {data?.content}
        </Text>
      </div>
    </div>
  );
}
