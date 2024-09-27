import FluidContainer from "@/components/Layout/FluidContainer";
import { Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import SystemDevelopmentComponent from "../../components/SystemDevelopment";
import Works from "./Works";
import Contact from "./Contact";
import React, { Suspense } from "react";

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
    <FluidContainer >
      <>
        <div className="flex items-center justify-between gap-5 bg-white-a700 self-stretch px-[30px] z-50 py-5 sm:px-5 sticky top-0">
          <Img src="img_logo.png" width={182} height={30} alt="Logo" className="h-[30px] w-[12%] object-contain" />
          <Img
            src="img_tdesign_menu_application.svg"
            width={50}
            height={50}
            alt="Tdesignmenu"
            className="h-[50px] w-[50px]"
          />
        </div>
        <div className=" flex items-center justify-center self-stretch max-h-screen">
          <div className="w-full">

            <div className="relative  flex items-center md:flex-col">
              <div className="flex flex-col items-start w-full  overflow-x-hidden  relative">
                <img
                  src="/images/haft-logo.png"
                  alt="logo haft"
                  className="object-cover md:h-auto w-auto h-[calc(100vh-150px)] relative z-10 mt-[54px]"
                />
                <div className="absolute right-[20px] scale-75 ">
                  <Heading
                    size="headingxl"
                    as="h1"
                    className="w-[36px] self-center text-[12px] font-bold  leading-[38px] absolute right-[220px] text-gray-900 md:px-5 "
                  >
                    ビジネスを進化させよう
                  </Heading>

                  <Heading
                    size="headingxl"
                    as="h2"
                    className="w-[36px] text-[36px] font-bold leading-[42px] text-gray-900 md:px-5 md:text-[34px]  absolute right-[170px]  sm:text-[32px]"
                  >
                    システム開発で
                  </Heading>
                  <Heading
                    size="headingxl"
                    as="h3"
                    className="w-[36px] text-[36px] font-bold leading-[42px] text-gray-900 md:px-5 md:text-[34px] absolute right-[120px]  sm:text-[32px]"
                  >
                    革新的な
                  </Heading>


                </div>

                <Heading
                  size="heading4xl"
                  as="h4"
                  className=" !text-blue-800  !font-medium animate-slide-left absolute bottom-[calc(50%-100px)] left-[230px] whitespace-nowrap"
                >
                  Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development.
                </Heading>


                <div className="flex flex-col items-center w-full bottom-0 gap-[50px] self-stretch  sm:gap-[47px] absolute">
                  <Heading
                    size="headingxl"
                    as="h5"
                    className="text-center text-[36px] font-bold  text-gray-900 md:text-[34px] sm:text-[32px]"
                  >
                    Bitronicsはデジタル領域の専門家です
                  </Heading>
                  <Heading
                    size="heading3xl"
                    as="h6"
                    className="font-urbanist text-[90px] relative z-20 font-semibold tracking-[2.70px] text-light_blue-a200 md:text-[48px]"
                  >
                    Digital Domain Specialist
                  </Heading>
                </div>

              </div>


            </div>
          </div>

        </div>
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

        <div className="relative h-24 mt-20 overflow-hidden">
          <Heading
            size="heading3xl"
            as="h4"
            className=" !text-blue-50  !font-medium animate-slide-left absolute bottom-[calc(50%-100px)] -top-4 left-[230px] whitespace-nowrap"
          >
            Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development.
          </Heading>
        </div>
        <Contact />
      </>

      <div className="mt-20">
        <Footer />
      </div>
    </FluidContainer>
  );
}
