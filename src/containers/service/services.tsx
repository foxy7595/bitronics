import { Button, Img, Heading, Text } from "../../components";

import Link from "next/link";
import React from "react";
import Service from "./service";

export default function Services() {
  return (
    <div className="flex flex-col items-center gap-[100px] self-stretch md:gap-[75px] sm:gap-[50px]">
      <div className="flex flex-col gap-[100px] self-stretch">
        <Service className="mx-auto w-full max-w-[1240px] md:px-5 sm:flex-col" />
        <Service className="mx-auto w-full max-w-[1240px] md:px-5 sm:flex-col" />
      </div>
      {/* <div className="container-xs md:px-5">
        <div className="flex items-start md:flex-col">
          <div className="flex w-[30%] flex-col items-start gap-[18px] md:w-full">
            <Heading
              size="heading2xl"
              as="h2"
              className="font-urbanist text-[36px] font-bold leading-[43px] text-light_blue-a200 md:text-[34px] sm:text-[32px]"
            >
              <>
                Software
                <br />
                quality
                <br />
                assurance
              </>
            </Heading>
            <Heading size="headings" as="h3" className="text-[16px] font-bold text-gray-900">
              ソフトウェア品質保証
            </Heading>
          </div>
          <div className="flex flex-1 flex-col gap-5 self-center border border-solid border-blue_gray-200 p-[30px] md:self-stretch sm:p-5">
            <div className="flex items-center gap-5 md:flex-col">
              <Img
                src="img_icon_service9.svg"
                width={90}
                height={90}
                alt="Iconservicenine"
                className="h-[90px] w-[90px] md:w-full"
              />
              <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                <Heading size="headinglg" as="h4" className="text-[20px] font-bold text-gray-900">
                  ソフトウェアのQAとテスト
                </Heading>
                <Text as="p" className="w-full text-[16px] font-normal leading-[200%] text-gray-900">
                  卓越した品質保証（QA）とテストサービスを提供し、ソフトウェア製品の信頼性安全性、パフォーマンスを向上させます。
                </Text>
              </div>
            </div>
            <div className="flex items-center justify-end gap-5">
              <Link href="#">
                <Heading as="h5" className="text-[18px] font-bold text-gray-900 underline">
                  View more
                </Heading>
              </Link>
              <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-900 px-3">
                <Img src="img_tdesign_swap_right.svg" width={16} height={4} />
              </Button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
