import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import ServiceHeader from "./header";
import { Heading, Button, Img } from "@/components";
import Services from "./services";





export default function ServicePage() {
    return (
        <MainContainer>
            <ServiceHeader />

            <div className="flex flex-col gap-[90px] mt-[80px] mx-[100px] sm:mx-6 md:mx-6 ">
                <div className="flex flex-col  gap-[100px] md:gap-[75px] sm:gap-[50px]">
                    <div className="flex flex-col gap-8 ">
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex items-center gap-[30px] self-stretch md:flex-col md:items-start">
                                <Heading
                                    size="heading2xl"
                                    as="h2"
                                    className="font-urbanist not-italic text-[64px] font-semibold tracking-[1.92px] text-gray-900 md:text-[48px]"
                                >
                                    Service
                                </Heading>
                                <div className="h-px flex-1 bg-gray-900 md:self-stretch" />
                            </div>
                            <Heading size="headinglg" as="h3" className="text-[24px] font-bold text-gray-900 md:text-[22px]">
                                サービス
                            </Heading>
                        </div>
                        <div className="mx-[210px] flex  justify-center md:mx-0 md:flex-col">
                            <div className="flex w-full max-w-[818px] min-w-[700px] justify-between sm:flex-col sm:gap-2">
                                <div className="flex items-center gap-5 ">
                                    <Heading as="h4" className="text-[18px] font-bold text-gray-900 underline">
                                        システム開発事業
                                    </Heading>
                                    <Button className="flex h-[30px] w-[30px] items-center justify-center rounded-[14px] border border-solid border-gray-900 px-2.5">
                                        <Img src="img_light_bulb.svg" width={6} height={8} />
                                    </Button>
                                </div>
                                <div className="flex  items-center gap-5 ">
                                    <Heading as="h5" className="text-[18px] font-bold text-gray-900 underline">
                                        先端技術開発事業
                                    </Heading>
                                    <Button className="flex h-[30px] w-[30px] items-center justify-center rounded-[14px] border border-solid border-gray-900 px-2.5">
                                        <Img src="img_light_bulb.svg" width={6} height={8} />
                                    </Button>
                                </div>
                                <div className="flex  items-center gap-5 ">
                                    <Heading as="h6" className="text-[18px] font-bold text-gray-900 underline">
                                        ソフトウェア品質保証
                                    </Heading>
                                    <Button className="flex h-[30px] w-[30px] items-center justify-center rounded-[14px] border border-solid border-gray-900 px-2.5">
                                        <Img src="img_light_bulb.svg" width={6} height={8} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Services />
                </div>
            </div>


        </MainContainer>
    );
}
