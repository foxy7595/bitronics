import Link from "next/link";
import { Button, Img, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const data = [
  {
    userImage: "画像",
    companyName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#カスタムソフトウェア開発",
  },
  {
    userImage: "画像",
    companyName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "先端技術開発事業",
    customSoftwareDevelopment: "#IoT",
  },
  {
    userImage: "画像",
    companyName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#カスタムソフトウェア開発",
  },
  {
    userImage: "画像",
    companyName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "先端技術開発事業",
    customSoftwareDevelopment: "#IoT",
  },
  {
    userImage: "画像",
    companyName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#カスタムソフトウェア開発",
  },
  {
    userImage: "画像",
    companyName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#カスタムソフトウェア開発",
  },
];

export default function Works() {
  return (
    <div className="relative mt-[-518px] flex flex-col items-center self-stretch">
      <div className="container-xs flex flex-col gap-[60px] md:px-5 sm:gap-[30px]">
        <div className="flex flex-col items-start gap-4">
          <Heading
            size="headingxl"
            as="h2"
            className="font-urbanist !text-[#1565C0] text-[36px] font-extrabold tracking-[1.08px] text-blue-800 md:text-[34px] sm:text-[24px]"
          >
            Works
          </Heading>
          <Heading
            size="headingmd"
            as="h3"
            className="text-[24px] font-bold leading-[200%] text-gray-900 md:text-[22px]"
          >
            <>
              Bitronicsが先進テクノロジーで課題に挑み
              <br />
              ビジネスを変革しました。
            </>
          </Heading>
        </div>
        <div className="grid grid-cols-3 justify-center gap-[30px] md:grid-cols-2 sm:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile {...d} key={"top" + index} />
            ))}
          </Suspense>
        </div>
        <Link href="/work" className="flex items-center justify-end gap-[30px]">
          <Heading
            size="headings"
            as="h4"
            className="self-end text-[20px] font-bold text-gray-900 underline"
          >
            Works
          </Heading>
          <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-900 px-3">
            <Img src="img_tdesign_swap_right.svg" width={16} height={4} />
          </Button>
        </Link>
      </div>
    </div>
  );
}
