import { Button, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const data = [
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#カスタムソフトウェア開発",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "先端技術開発事業",
    customSoftwareDevelopment: "#IoT",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#Webアプリケーション開発",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "先端技術開発事業",
    customSoftwareDevelopment: "#IoT",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#Webアプリケーション開発",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#モバイルアプリケーション開発",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "先端技術開発事業",
    customSoftwareDevelopment: "#IoT",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#Webアプリケーション開発",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#モバイルアプリケーション開発",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "先端技術開発事業",
    customSoftwareDevelopment: "#IoT",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#Webアプリケーション開発",
  },
  {
    userImage: "画像",
    companyNameOrContentName: "会社名またはコンテンツ名",
    systemDevelopmentBusiness: "システム開発事業",
    customSoftwareDevelopment: "#モバイルアプリケーション開発",
  },
];

export default function Works() {
  return (
    <div className="container-xs flex flex-col gap-[60px] md:px-5 sm:gap-[30px]">
      <div className="ml-[92px] mr-[68px] flex justify-center gap-10 md:mx-0 md:flex-col">
        <Button className="flex h-[46px] min-w-[92px] flex-row items-center justify-center rounded-[22px] bg-blue-800 px-5 text-center text-[18px] text-white-a700">
          すべて
        </Button>
        <Button className="flex h-[46px] flex-1 flex-row items-center justify-center rounded-[22px] bg-gray-100 px-5 text-center text-[18px] text-gray-900 md:self-stretch">
          システム開発事業
        </Button>
        <Button className="flex h-[46px] flex-1 flex-row items-center justify-center rounded-[22px] bg-gray-100 px-5 text-center text-[18px] text-gray-900 md:self-stretch">
          先端技術開発事業
        </Button>
        <Button className="flex h-[46px] min-w-[220px] flex-row items-center justify-center rounded-[22px] bg-gray-100 px-5 text-center text-[18px] text-gray-900">
          ソフトウェア品質保証
        </Button>
      </div>
      <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
        <div className="grid grid-cols-3 justify-center gap-[30px] self-stretch md:grid-cols-2 sm:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile {...d} key={"works" + index} />
            ))}
          </Suspense>
        </div>
        <Button className="flex h-[44px] min-w-[300px] flex-row items-center justify-center rounded-[22px] border border-solid border-gray-900 px-[33px] text-center text-[16px] text-gray-900 sm:px-5">
          もっと見る
        </Button>
      </div>
    </div>
  );
}
