import FluidContainer from "@/components/Layout/FluidContainer";
import { Img, Text } from "../../components";
import Works from "./Works";
import React from "react";
import MainContainer from "@/components/Layout/MainContainer";
import Main from "./Main";
import Service from "./Service";

export default function HomePage() {
  return (
    <MainContainer>
      <Main />
      <FluidContainer>
        <div className=" mt-[58px] flex flex-col items-center gap-[194px] md:gap-[145px]  sm:gap-[97px]">
          <Text
            size="textxl"
            as="p"
            className="text-center text-[18px] font-normal leading-[200%] text-gray-900 sm:text-[14px]"
          >
            <>
              システム開発、マーケティング、データ解析など包括的なデジタルサービスを提供しています。
              <br />
              また、プロジェクトとプロフェッショナルのマッチングプラットフォームを展開し
              <br />
              柔軟で革新的なアプローチでお客様のビジネスを未来へ導くパートナーです。
            </>
          </Text>

          <Service />
        </div>
      </FluidContainer>
      <div className=" relative sm:h-auto md:h-auto py-[71px]  mt-20 overflow-hidden  bg-[#f2faff]">
        <div className="w-full group animate-slide-left-20 sm:animate-slide-left-5 h-[105px] left-0 bottom-2 z-30 absolute justify-start items-center gap-[70px] inline-flex">
          <div className="text-blue-50  text-[150px] font-extrabold  font-urbanist tracking-[4.50px]">
            MISSION
          </div>
          <div className="text-blue-50  text-[150px] sm:text-[120px] font-bold font-['Trirong'] not-italic tracking-[4.50px]">
            MISSION
          </div>
          <div className="text-blue-50  text-[150px] sm:text-[120px]  font-extrabold font-urbanist tracking-[4.50px]">
            MISSION
          </div>
          <div className="text-blue-50  text-[150px] sm:text-[120px]  font-extrabold font-urbanist tracking-[4.50px]">
            MISSION
          </div>
          <div className="text-blue-50  text-[150px] sm:text-[120px]  font-bold font-['Trirong'] not-italic tracking-[4.50px]">
            MISSION
          </div>
          <div className="text-blue-50  text-[150px] sm:text-[120px]  font-extrabold font-urbanist tracking-[4.50px]">
            MISSION
          </div>
        </div>
        <div className="w-full flex justify-center items-center relative z-40 ">
          <div className="w-[960px] sm:w-full md:w-full max-w-[960px] sm:px-4 md:px-4   flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="h-[111px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch text-blue-800 text-4xl font-extrabold font-urbanist tracking-wide sm:text-[24px] md:text-[32px]">
                Misson
              </div>
              <div className="self-stretch text-gray-900 text-2xl sm:text-[16px] font-bold font-notosanscjkjp leading-[48px] sm:leading-normal">
                先進テクノロジーを駆使した
                <br className="hidden sm:block" />
                新たな可能性の提供
              </div>
            </div>
            <div className="self-stretch text-gray-900 text-lg sm:text-[14px] font-normal font-notosanscjkjp leading-9">
              クライアント様のパフォーマンス向上と成功の保証が、私たちの最優先のミッションです。
              <br />
              Bitronicsはどんな厳しい状況にも柔軟に対応し、ビジネスの可能性を広げ、強力な代替案を提供します。デジタルITサービスを丁寧に管理し、リスクをコントロールすることで、変革を円滑かつ安心して実現します。
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-[-2px] flex flex-col items-end self-stretch mb-8 ">
        <Img
          src="img_vector_blue_800_632x316.png"
          width={316}
          height={632}
          alt="Vector"
          className="h-[632px]  w-[22%] sm:w-[40%] md:w-[30%] object-contain mr-[-52px]"
        />
        <Works />
      </div>
    </MainContainer>
  );
}
