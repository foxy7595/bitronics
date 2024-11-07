import { Heading } from "@/components";
import React from "react";

interface Props {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  index: number;
  isLast: boolean;
}

export default function StepColumn({
  title = "ヒアリング",
  description = "お客様のビジョンと要件を共有し、プロジェクトを理解",
  index,
  isLast,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-start items-center sm:items-start gap-5 sm:gap-2 flex-1`}
    >
      <div
        className={`flex h-[116px]   flex-col items-center  bg-contain bg-no-repeat px-6 pb-4 pt-4 ${
          isLast
            ? "bg-[url(/images/img_group_16_1.svg)] "
            : "bg-[url(/images/img_group_16.svg)] "
        }`}
      >
        <Heading
          size="headings"
          as="h6"
          className="mb-4 text-center text-[16px] font-bold leading-[34px] text-black-900 sm:leading-[20px] sm:text-[13px]"
        >
          <span>
            <>
              STEP
              <br />
            </>
          </span>
          <span className="text-[32px] -mt-4 leading-[28px]">0{index}</span>
        </Heading>
      </div>
      <div className="flex flex-col items-start gap-2.5 sm:gap-1.5 sm:mt-4 -mt-3">
        <Heading
          size="headings"
          as="h6"
          className="!text-[16px] font-bold text-black-900 sm:!text-[13px]"
        >
          {title}
        </Heading>
        <Heading
          size="headingmd"
          as="h6"
          className="!text-[16px] font-normal text-black-900 sm:!text-[13px]"
        >
          {description}
        </Heading>
      </div>
    </div>
  );
}
