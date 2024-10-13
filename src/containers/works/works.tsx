"use client";

import { Button } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense, useEffect, useState } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [displayedData, setDisplayedData] = useState(data.slice(0, 9));
  const [page, setPage] = useState(0);
  const handleCategoryClick = (category: number) => {
    setSelectedCategory(category);
  };

  const handleMoreClick = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setDisplayedData(data.slice(0, (page + 1) * 9));
  }, [page]);

  return (
    <div className="container-xs flex flex-col gap-[60px] md:px-5 sm:gap-[30px]">
      <div className="ml-[92px] mr-[68px] flex justify-center gap-10 md:mx-0 sm:flex-col md:gap-4">
        <Button onClick={() => handleCategoryClick(1)} className={`flex h-[46px] sm:py-3 md:py-3 min-w-[92px] whitespace-nowrap flex-row items-center justify-center rounded-[22px]  bg-gray-100 px-5 text-center text-[18px] text-gray-900 ${selectedCategory === 1 ? "!bg-blue-800 text-white-a700" : ""}`}>
          すべて
        </Button>
        <Button onClick={() => handleCategoryClick(2)} className={`flex h-[46px] sm:py-3 md:py-3  flex-1 flex-row whitespace-nowrap items-center justify-center rounded-[22px] bg-gray-100 px-5 text-center text-[18px] text-gray-900 md:self-stretch ${selectedCategory === 2 ? "!bg-blue-800 text-white-a700" : ""}`}>
          システム開発事業
        </Button>
        <Button onClick={() => handleCategoryClick(3)} className={`flex h-[46px] sm:py-3 md:py-3 flex-1 flex-row whitespace-nowrap items-center justify-center rounded-[22px] bg-gray-100 px-5 text-center text-[18px] text-gray-900 md:self-stretch ${selectedCategory === 3 ? "!bg-blue-800 text-white-a700" : ""}`}>
          先端技術開発事業
        </Button>
        <Button onClick={() => handleCategoryClick(4)} className={`flex h-[46px] sm:py-3 md:py-3 min-w-[220px] whitespace-nowrap flex-row items-center justify-center rounded-[22px] bg-gray-100 px-5 text-center text-[18px] text-gray-900 ${selectedCategory === 4 ? "!bg-blue-800 text-white-a700" : ""}`}>
          ソフトウェア品質保証
        </Button>
      </div>
      <div className="flex flex-col items-center gap-[100px] md:gap-[75px] sm:gap-[50px]">
        <div className="grid grid-cols-3 justify-center gap-[30px] self-stretch md:grid-cols-2 sm:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {displayedData.map((d, index) => (
              <UserProfile {...d} key={"works" + index} />
            ))}
          </Suspense>
        </div>
        <Button onClick={() => handleMoreClick(page + 1)} className="flex h-[44px] hover:bg-blue-800 hover:text-white-a700 hover:border-blue-800 transition-colors duration-300 min-w-[300px] flex-row items-center justify-center rounded-[22px] border border-solid border-gray-900 px-[33px] text-center text-[16px] text-gray-900 sm:px-5">
          もっと見る
        </Button>
      </div>
    </div>
  );
}
