import { Heading } from "../../components";
import React, { Suspense } from "react";
import Industry from "./industry";


export default function WhoItsFor({ data }: { data?: any }) {
  return (
    <div className="mt-[100px] mx-[100px] md:mx-6 sm:mx-4 sm:mt-8  flex justify-center self-stretch ">
      <div className=" flex items-start justify-between gap-5 md:flex-col ">
        <Heading
          size="heading3xl"
          as="h2"
          className="font-urbanist text-[48px] w-[32%] md:w-full font-semibold tracking-[1.44px] text-gray-900 md:text-[44px] sm:text-[38px]"
        >
          Who It&#39;s For
        </Heading>
        <div className=" grid w-full grid-cols-2 gap-[30px] sm:gap-3 self-center md:ml-0 md:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data?.whoItsFor.map((d: any, index: number) => (
              <Industry {...d} key={"grid" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
