"use client";
import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import AboutHeader from "./header";
import { Heading, Img } from "@/components";
import Slide from "./slide";
import Profile from "./profile";
import Access from "./access";
import useIsMobile from "@/hooks/useIsMobile";
import HeadingAnimation from "../headingAnimation";
import { useInView } from "react-hook-inview";
import SlideV2 from "./slidev2";

export default function ServicePage() {
  const isMobile = useIsMobile();

  const [ref, inView] = useInView({
    threshold: 0.9,
  });

  React.useEffect(() => {
    // Ensure the component is mounted before scrolling
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);
    }
  }, []);

  return (
    <MainContainer>
      <AboutHeader />

      <div className="flex flex-col gap-[90px] mt-[80px] sm:mt-8 mx-[100px] sm:mx-6 md:mx-6 ">
        <div className="flex flex-col  gap-[100px] md:gap-[75px] sm:gap-[50px]">
          <div className="flex flex-col gap-8 ">
            <HeadingAnimation missionTitle="About" missionSubtitle="制作実績" />
            <br />
          </div>
        </div>
      </div>

      <div className="px-[100px] flex flex-col items-end gap-[100px] md:gap-[75px] md:px-5 sm:gap-[50px]">
        <div className="flex flex-col gap-[30px] self-stretch">
          <Img
            src="img_young_colleague.png"
            width={1240}
            height={500}
            alt="Youngcolleague"
            className="!w-full object-cover"
          />
          <div className="flex flex-col items-start gap-[22px] " ref={ref}>
            <div className="min-h-[110px]">
              {inView && (
                <Heading
                  size="heading2xl"
                  as="pre"
                  binary
                  className="!text-[36px] !font-bold !font-notosanscjkjp sm:text-wrap leading-[53px] sm:leading-[34px] not-italic text-gray-900 md:!text-[28px] sm:!text-[20px]"
                >
                  {isMobile
                    ? `Bitronicsはデジタル\nハイテクソリューションの\nリーディングカンパニーです`
                    : `Bitronicsはデジタルハイテクソリューションの\nリーディングカンパニーです`}
                </Heading>
              )}
            </div>
            <Heading
              size="textxl"
              as="p"
              className="text-[18px] font-normal text-gray-900"
            >
              テクノロジーの進歩を促進し、ビジネスに柔軟性をもたらす先進のソフトウェアを提供しています。
            </Heading>
          </div>
        </div>
        <Heading
          as="p"
          className="w-[68%] !text-[16px] font-normal leading-[200%] text-black-900 md:w-full"
        >
          <>
            Bitronicsの強みは、先進のテクノロジーと深い専門知識に基づくシステム開発です。
            <br />
            クライアント様の課題に挑戦し、柔軟性と効率性を兼ね備えたソリューションを提供します。
            <br className="sm:hidden md:hidden" />
            <br />
            そして、私たちは単なるサービス提供者ではなく、共にプロジェクトを築くパートナーとしての役割を果たします。
            <br />
            お客様の課題や目標を理解し、その実現に向けて協力し、最適なソリューションを共に構築していくことに誇りを持っています。
            <br />
            信頼と協力のもと、お客様のビジネスに価値を提供し続けることをお約束します。
          </>
        </Heading>
      </div>

      <div className="w-full relative overflow-hidden  my-[100px] md:my-[75px]  sm:my-[50px] ">
        {/* {isMobile ? <Slide slidesPerView={1} /> : <Slide slidesPerView={3} />} */}
        <SlideV2 />
      </div>
      <div className="px-[100px] flex flex-col items-end gap-[100px] md:gap-[75px] md:px-5 sm:gap-[50px]">
        <Profile />
        <Access />
      </div>
    </MainContainer>
  );
}
