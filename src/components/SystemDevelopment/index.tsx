import { Button, Img, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  headingText?: React.ReactNode;
  systemText?: React.ReactNode;
  descriptionText?: React.ReactNode;
  detailedDescriptionText?: React.ReactNode;
  serviceText?: React.ReactNode;
}

export default function SystemDevelopmentComponent({
  headingText = "システム開発事業",
  systemText = (
    <>
      SYSTEM
      <br />
      DEVELOPMENT
    </>
  ),
  descriptionText = (
    <>
      Custom Software
      <br />
      Web App
      <br />
      Mobile App
      <br />
      Maintenance
      <br />
      Re-engineering
    </>
  ),
  detailedDescriptionText,
  serviceText = "Service",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center flex-1 container-xs`}>
      <div className="relative h-[978px] self-stretch">
        <div className="absolute bottom-[7%] left-0 right-0 m-auto w-[74%] bg-gradient py-[34px] sm:py-5">
          <Img
            src="img_1_2.png"
            width={714}
            height={620}
            alt="Image"
            className="mb-[30px] h-[620px] w-full object-cover sm:h-auto"
          />
        </div>
        <Heading
          size="headinglg"
          as="h2"
          className="absolute right-0 top-[20%] m-auto w-[4%] text-[32px] font-bold leading-[38px] text-gray-900 sm:w-[4%] sm:text-[27px]"
        >
          {headingText}
        </Heading>
        <Heading
          size="heading3xl"
          as="h1"
          className="absolute left-0 top-0 m-auto w-[68%] font-urbanist text-[90px] font-bold leading-[108px] tracking-[2.70px] text-light_blue-a200 sm:w-[68%] sm:text-[48px]"
        >
          {systemText}
        </Heading>
        <Heading
          size="heading2xl"
          as="h1"
          className="absolute bottom-0 right-px m-auto w-[42%] font-trirong text-[48px] font-semibold italic leading-[70px] tracking-[1.44px] text-light_blue-a200 sm:w-[42%] sm:text-[40px]"
        >
          {descriptionText}
        </Heading>
      </div>
      <div className="flex items-center self-stretch">
        <Heading
          size="headings"
          as="h5"
          className="w-[48%] font-notosanscjkjp text-[20px] font-bold leading-[200%] text-gray-900 sm:w-[48%] sm:text-[17px]"
        >
          <span>・カスタム</span>
          <span>
            <>
              ソフトウェア開発
              <br />
            </>
          </span>
          <span>・</span>
          <span>
            <>
              Webアプリケーション開発
              <br />
            </>
          </span>
          <span>・</span>
          <span>
            <>
              モバイルアプリケーション開発
              <br />
            </>
          </span>
          <span>・</span>
          <span>ソフトウェアメンテナンス／リエンジニアリング</span>
        </Heading>
        <div className="flex flex-1 items-center justify-end gap-[31px] self-end">
          <Heading
            size="headings"
            as="h5"
            className="self-end text-[20px] font-bold text-gray-900 underline sm:text-[17px]"
          >
            {serviceText}
          </Heading>
          <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-900 px-3">
            <Img src="img_tdesign_swap_right.svg" width={16} height={4} />
          </Button>
        </div>
      </div>
    </div>
  );
}
