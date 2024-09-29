import FluidContainer from "@/components/Layout/FluidContainer";
import { Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import SystemDevelopmentComponent from "../../components/SystemDevelopment";
import Works from "./Works";
import Contact from "./Contact";
import React, { Suspense } from "react";
import Header from "../header";
import MainContainer from "@/components/Layout/MainContainer";
import Main from "./Main";

const data = [
  {
    headingText: "システム開発事業",
    systemText: (
      <>
        SYSTEM
        <br />
        DEVELOPMENT
      </>
    ),
    descriptionText: (
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
    detailedDescriptionText: (
      <>
        ・カスタムソフトウェア開発
        <br />
        ・Webアプリケーション開発
        <br />
        ・モバイルアプリケーション開発
        <br />
        ・ソフトウェアメンテナンス／リエンジニアリング
      </>
    ),
    serviceText: "Service",
  },
  {
    headingText: "システム開発事業",
    systemText: (
      <>
        SYSTEM
        <br />
        DEVELOPMENT
      </>
    ),
    descriptionText: (
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
    detailedDescriptionText: (
      <>
        ・カスタムソフトウェア開発
        <br />
        ・Webアプリケーション開発
        <br />
        ・モバイルアプリケーション開発
        <br />
        ・ソフトウェアメンテナンス／リエンジニアリング
      </>
    ),
    serviceText: "Service",
  },
  {
    headingText: "システム開発事業",
    systemText: (
      <>
        SYSTEM
        <br />
        DEVELOPMENT
      </>
    ),
    descriptionText: (
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
    detailedDescriptionText: (
      <>
        ・カスタムソフトウェア開発
        <br />
        ・Webアプリケーション開発
        <br />
        ・モバイルアプリケーション開発
        <br />
        ・ソフトウェアメンテナンス／リエンジニアリング
      </>
    ),
    serviceText: "Service",
  },
];

export default function HomePage() {
  return (
    <MainContainer>

      <FluidContainer >
        <Main />
        <div className="container-xs mt-[58px] flex flex-col items-center gap-[194px] md:gap-[145px] md:px-5 sm:gap-[97px]">
          <Text size="textxl" as="p" className="text-center text-[18px] font-normal leading-[200%] text-gray-900">
            <>
              システム開発、マーケティング、データ解析など包括的なデジタルサービスを提供しています。
              <br />
              また、プロジェクトとプロフェッショナルのマッチングプラットフォームを展開し
              <br />
              柔軟で革新的なアプローチでお客様のビジネスを未来へ導くパートナーです。
            </>
          </Text>
          <div className="flex flex-col gap-[62px] self-stretch sm:gap-[31px]">
            <div className="flex flex-col items-start gap-5">
              <Heading
                size="headingxl"
                as="h2"
                className="font-urbanist text-[36px] font-extrabold tracking-[1.08px] text-blue-800 md:text-[34px] sm:text-[32px]"
              >
                Service
              </Heading>
              <Heading size="headingmd" as="h3" className="text-[24px] font-bold text-gray-900 md:text-[22px]">
                ビジネスを加速するソリューション
              </Heading>
            </div>
            <div className="flex flex-col gap-[150px]">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <SystemDevelopmentComponent {...d} key={"top" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>

        <div className="h-[420px] relative mt-20 overflow-hidden">
          <div className="w-full h-[420px] left-0 top-0 absolute bg-[#f2faff]" />
          <div className="w-full animate-slide-left-20 h-[105px] left-0 top-[315px] absolute justify-start items-center gap-[70px] inline-flex">
            <div className="text-blue-50 text-[150px] font-extrabold font-urbanist tracking-[4.50px]">MISSON</div>
            <div className="text-blue-50 text-[150px] font-bold font-['Trirong'] tracking-[4.50px]">MISSON</div>
            <div className="text-blue-50 text-[150px] font-extrabold font-urbanist tracking-[4.50px]">MISSON</div>
            <div className="text-blue-50 text-[150px] font-extrabold font-urbanist tracking-[4.50px]">MISSON</div>
            <div className="text-blue-50 text-[150px] font-bold font-['Trirong'] tracking-[4.50px]">MISSON</div>
            <div className="text-blue-50 text-[150px] font-extrabold font-urbanist tracking-[4.50px]">MISSON</div>
          </div>
          <div className="w-[960px] h-[279px] left-[242px] top-[71px] absolute flex-col justify-start items-start gap-[60px] inline-flex">
            <div className="h-[111px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch text-blue-800 text-4xl font-extrabold font-urbanist tracking-wide">Misson</div>
              <div className="self-stretch text-gray-900 text-2xl font-bold font-notosanscjkjp leading-[48px]">先進テクノロジーを駆使した新たな可能性の提供</div>
            </div>
            <div className="self-stretch text-gray-900 text-lg font-normal font-notosanscjkjp leading-9">クライアント様のパフォーマンス向上と成功の保証が、私たちの最優先のミッションです。<br />Bitronicsはどんな厳しい状況にも柔軟に対応し、ビジネスの可能性を広げ、強力な代替案を提供します。デジタルITサービスを丁寧に管理し、リスクをコントロールすることで、変革を円滑かつ安心して実現します。</div>
          </div>
        </div>


        <div className="relative mt-[-2px] flex flex-col items-end self-stretch">
          <Img
            src="img_vector_blue_800_632x316.png"
            width={316}
            height={632}
            alt="Vector"
            className="h-[632px] w-[22%] object-contain"
          />
          <Works />
        </div>




      </FluidContainer>
    </MainContainer>
  );
}
