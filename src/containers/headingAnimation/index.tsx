"use client";

import { Heading } from "@/components";
import React from "react";
import { useInView } from "react-hook-inview";

const HeadingAnimation: React.FC<{
  missionTitle: React.ReactNode;
  missionSubtitle: React.ReactNode;
}> = ({ missionTitle, missionSubtitle }) => {
  const [ref, inView] = useInView({
    threshold: 0.9,
  });

  return (
    <div className="flex flex-col items-start gap-1 min-h-[120px]" ref={ref}>
      {inView && (
        <>
          <div className="flex items-center gap-[30px] self-stretch ">
            <Heading
              size="heading2xl"
              as="h1"
              binary
              delay={0.5}
              className="text-[64px] not-italic font-semibold  text-gray-900 md:text-[48px]"
            >
              {missionTitle}
            </Heading>
            <div className="h-px  bg-gray-900 w-0 mt-2 animate-slide-left-100 " />
          </div>
          <Heading
            size="headinglg"
            as="h4"
            className="font-notosanscjkjp !text-[24px] font-bold text-gray-900 md:!text-[18px] sm:!text-[15px] -mt-3 opacity-0 animate-fade-in"
          >
            {missionSubtitle}
          </Heading>
        </>
      )}
    </div>
  );
};

export default HeadingAnimation;
