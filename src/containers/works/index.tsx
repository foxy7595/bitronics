import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import WorksHeader from "./header";
import WorksColumn from "./works";
import { Heading } from "@/components";

export default function WorksPage() {
  return (
    <MainContainer>
      <WorksHeader />

      <div className="flex flex-col gap-[90px] mt-[80px] mx-[100px] sm:mx-6 md:mx-6 mb-8">
        <div className="flex flex-col items-start gap-1 w-full">
          <div className="flex items-center gap-[30px] self-stretch w-full">
            <Heading
              size="heading2xl"
              as="h2"
              className="font-urbanist text-[64px] not-italic font-semibold tracking-[1.92px] text-gray-900 md:text-[48px]"
            >
              Works
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
        <WorksColumn />
      </div>
    </MainContainer>
  );
}
