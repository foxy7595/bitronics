import { Heading } from "../../components";
import React, { Suspense } from "react";
import Industry from "./industry";

const data = [
  {
    industryHeading: "業界特有のニーズに合わせたい方",
    industryDescription:
      "カスタムソフトウェア開発は、各企業に特有の業界要件にスムーズに適応し、最適なソリューションを提供します。",
  },
  {
    industryHeading: "既存のソフトウェアがビジネスにフィットしない方",
    industryDescription:
      "カスタムソフトウェア開発は、各企業に特有の業界要件にスムーズに適応し、最適なソリューションを提供します。",
  },
  {
    industryHeading: "高度な機能や処理が必要な方",
    industryDescription:
      "カスタムソフトウェア開発は、各企業に特有の業界要件にスムーズに適応し、最適なソリューションを提供します。",
  },
  {
    industryHeading: "既存のシステムとのスムーズな統合が必要な方",
    industryDescription:
      "カスタムソフトウェア開発は、各企業に特有の業界要件にスムーズに適応し、最適なソリューションを提供します。",
  },
  {
    industryHeading: "急成長するビジネスに対応したい方",
    industryDescription: "カスタムソフトウェアはビジネスの急成長に迅速に対応し、将来のスケーラビリティを確保します。",
  },
  {
    industryHeading: "セキュリティが最優先事項の方",
    industryDescription:
      "カスタムソフトウェア開発は、各企業に特有の業界要件にスムーズに適応し、最適なソリューションを提供します。",
  },
];

export default function WhoItsFor() {
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
            {data.map((d, index) => (
              <Industry {...d} key={"grid" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
