"use client";
import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import AboutHeader from "./header";
import { Heading, Img } from "@/components";
import Slide from "./slide";
import Profile from "./profile";
import Access from "./access";
import useIsMobile from "@/hooks/useIsMobile";

export default function ServicePage() {
    const isMobile = useIsMobile();
    return (
        <MainContainer>
            <AboutHeader />

            <div className="flex flex-col gap-[90px] mt-[80px] mx-[100px] sm:mx-6 md:mx-6 ">
                <div className="flex flex-col  gap-[100px] md:gap-[75px] sm:gap-[50px]">
                    <div className="flex flex-col gap-8 ">
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center gap-[20px] self-stretch ">
                                <Heading
                                    size="heading2xl"
                                    as="h2"
                                    className="font-urbanist not-italic text-[64px] font-semibold tracking-[1.92px] text-gray-900 md:text-[48px]"
                                >
                                    About
                                </Heading>
                                <div className="h-px flex-1 bg-gray-900 " />
                            </div>
                            <Heading
                                size="headinglg"
                                as="h3"
                                className="text-[24px] font-bold text-gray-900 md:text-[22px]"
                            >
                                制作実績
                            </Heading>
                        </div>
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
                    <div className="flex flex-col items-start gap-[22px]">
                        <Heading
                            size="heading2xl"
                            as="h4"
                            className="!text-[36px] !font-bold !font-notosanscjkjp leading-[53px] not-italic text-gray-900 md:!text-[34px] sm:!text-[32px]"
                        >
                            <>
                                Bitronicsはデジタルハイテクソリューションの
                                <br />
                                リーディングカンパニーです
                            </>
                        </Heading>
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
                    className="w-[68%] text-[16px] font-normal leading-[200%] text-black-900 md:w-full"
                >
                    <>
                        Bitronicsの強みは、先進のテクノロジーと深い専門知識に基づくシステム開発です。
                        <br />
                        クライアント様の課題に挑戦し、柔軟性と効率性を兼ね備えたソリューションを提供します。
                        <br />
                        <br />
                        そして、私たちは単なるサービス提供者ではなく、共にプロジェクトを築くパートナーとしての役割を果たします。
                        <br />
                        お客様の課題や目標を理解し、その実現に向けて協力し、最適なソリューションを共に構築していくことに誇りを持っています。
                        <br />
                        信頼と協力のもと、お客様のビジネスに価値を提供し続けることをお約束します。
                    </>
                </Heading>

                <div className="w-full relative overflow-hidden ">
                    {isMobile ? <Slide slidesPerView={1} /> : <Slide slidesPerView={3} />}
                </div>
                <Profile />
                <Access />
            </div>
        </MainContainer>
    );
}
