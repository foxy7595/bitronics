import { Text, Heading } from "../../components";
import React from "react";
import { useInView } from "react-hook-inview";
export default function Profile() {
  const [ref, inView] = useInView({
    threshold: 0.9,
  });

  return (
    <div className=" flex items-start justify-center  w-full md:flex-col">
      <div className="min-w-[200px]">
        {inView ? (
          <Heading
            size="heading3xl"
            as="h2"
            binary
            className="font-urbanist min-w-[200px] !text-[48px] font-semibold tracking-[1.44px] text-gray-900 md:!text-[44px] sm:!text-[38px] md:pb-5 "
          >
            Profile
          </Heading>
        ) : (
          <Heading
            size="heading3xl"
            as="h2"
            className="font-urbanist !text-[48px] font-semibold tracking-[1.44px] !text-transparent md:!text-[44px] sm:!text-[38px] md:pb-5 "
          ></Heading>
        )}
      </div>
      <div className="flex flex-1 flex-col items-end self-center md:self-stretch">
        <div className="flex w-[78%] flex-wrap md:flex-col md:items-start items-center gap-[154px] border-b border-t-[3px] border-solid border-gray-200 px-5 py-[30px] md:w-full md:gap-5 sm:py-5 ">
          <Heading as="h3" className="text-[16px] font-bold text-black-900">
            会社名
          </Heading>
          <Text as="p" className="text-[16px] font-normal text-black-900">
            株式会社 Bitronics
          </Text>
        </div>
        <div ref={ref}></div>
        <div className="flex w-[78%] md:flex-col md:items-start flex-wrap items-center gap-[152px] border-b border-solid border-gray-200 px-5 py-[30px] md:w-full md:gap-5 sm:py-5">
          <Heading as="h4" className="text-[16px] font-bold text-black-900">
            所在地
          </Heading>
          <Text as="p" className="text-[16px] font-normal text-black-900">
            東京都江戸川区松江2-36-10
          </Text>
        </div>
        <div className="flex w-[78%] md:flex-col md:items-start flex-wrap items-center gap-[152px] border-b border-solid border-gray-200 px-5 py-[30px] md:w-full md:gap-5 sm:py-5">
          <Heading as="h5" className="text-[16px] font-bold text-black-900">
            代表者
          </Heading>
          <Text as="p" className="text-[16px] font-normal text-black-900">
            ⁨⁩山田 太郎
          </Text>
        </div>
        <div className="flex w-[78%] md:flex-col md:items-start flex-wrap items-center gap-[152px] border-b border-solid border-gray-200 px-5 py-[30px] md:w-full md:gap-5 sm:py-5">
          <Heading as="h6" className="text-[16px] font-bold text-black-900">
            資本金
          </Heading>
          <Text as="p" className=" text-[16px] font-normal text-black-900">
            500万円
          </Text>
        </div>
        <div className="flex w-[78%] md:flex-col md:items-start flex-wrap items-center gap-[168px] border-b border-solid border-gray-200 px-5 py-[30px] md:w-full md:gap-5 sm:py-5">
          <Heading as="h6" className="text-[16px] font-bold text-black-900">
            設立
          </Heading>
          <Text as="p" className="text-[16px] font-normal text-black-900">
            2020年1月11日
          </Text>
        </div>
        <div className="flex w-[78%] md:flex-col md:items-start items-start gap-[106px] md:gap-5 border-b-[3px] border-solid border-gray-200 px-5 py-[30px] md:w-full sm:py-5">
          <Heading as="h6" className="text-[16px] font-bold text-black-900">
            グループ企業
          </Heading>
          <Text
            as="p"
            className="w-[16%] md:w-full md:leading-normal self-center text-[16px] font-normal leading-[200%] text-black-900"
          >
            <>
              株式会社 山田
              <br />
              株式会社 佐々木
              <br />
              合同会社 佐藤
            </>
          </Text>
        </div>
      </div>
    </div>
  );
}
