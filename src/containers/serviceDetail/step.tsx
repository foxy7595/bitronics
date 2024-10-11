import { Heading } from "../../components";
import React, { Suspense } from "react";
import StepColumn from "./stepColumn";

const data = [
  {
    index: 1,
    hearingTitle: "ヒアリング",
    customerVisionText: "お客様のビジョンと要件を共有し、プロジェクトを理解",
  },
  {
    index: 2,
    hearingTitle: "提案と計画",
    customerVisionText: "専門家チームが最適な開発計画を提案",
  },
  {
    index: 3,
    hearingTitle: "開発とテスト",
    customerVisionText: "アジャイルなプロセスでソフトウェアを開発し、定期的にテストを実施",
  },
  {
    index: 4,
    hearingTitle: "ヒアリング",
    customerVisionText: "お客様のビジョンと要件を共有し、プロジェクトを理解",
  },
];

export default function Step() {
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
            {data.map((d, index) => (
              <StepColumn {...d} key={"liststepone" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
