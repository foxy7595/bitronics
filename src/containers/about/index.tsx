import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import AboutHeader from "./header";
import { Heading } from "@/components";






export default function ServicePage() {
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
                            <Heading size="headinglg" as="h3" className="text-[24px] font-bold text-gray-900 md:text-[22px]">
                                制作実績
                            </Heading>
                        </div>

                    </div>

                </div>
            </div>



        </MainContainer>
    );
}
