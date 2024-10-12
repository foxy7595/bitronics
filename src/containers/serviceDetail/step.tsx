import { Heading } from "../../components";
import React, { Suspense } from "react";
import StepColumn from "./stepColumn";


export default function Step({ data }: { data?: any }) {
  return (
    <div className="mt-[100px] mx-[100px] md:mx-6 sm:mx-4 sm:mt-8 flex ">
      <div className="flex items-start  w-full  justify-between gap-5 md:flex-col">
        <Heading
          size="heading3xl"
          as="h2"
          className="font-urbanist text-[48px] w-[32%] md:w-full sm:w-full  font-semibold tracking-[1.44px] text-gray-900 md:text-[44px] sm:text-[38px]"
        >
          Step
        </Heading>
        <div className=" flex w-full  flex-col gap-[30px] self-center md:ml-0 sm:gap-3">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data?.step.map((d: any, index: number) => (
              <StepColumn {...d} key={"liststepone" + index} index={index + 1} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
