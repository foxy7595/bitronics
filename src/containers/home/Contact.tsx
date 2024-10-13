import { Button, Img, Heading } from "../../components";
import React from "react";

export default function Contact() {
  return (
    <div className="self-stretch">
      <div className="flex justify-center bg-gradient py-[54px] w-full">
        <div className="max-w-[1200px] mx-auto w-full flex justify-center md:px-5">
          <div className="flex w-full items-center justify-between gap-5 md:flex-col">
            <div className="flex flex-1 flex-col items-start gap-3.5 md:self-stretch">
              <Heading
                size="headingxl"
                as="h2"
                className="font-urbanist text-[36px] font-extrabold tracking-[1.08px] text-light_blue-a200 md:text-[34px] sm:text-[32px]"
              >
                Contact
              </Heading>
              <Heading
                size="headings"
                as="h3"
                className="text-[20px] font-bold leading-[200%] text-white-a700"
              >
                <>
                  Bitronicsの専門サービスを体験してみませんか？
                  <br />
                  まずは、お気軽にご相談ください
                </>
              </Heading>
            </div>
            <div className="flex items-center gap-[31px] self-end ">
              <Heading
                size="headings"
                as="h4"
                className=" text-[20px] font-bold text-white-a700 underline"
              >
                Contact
              </Heading>
              <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-white-a700 px-3">
                <Img
                  src="img_tdesign_swap_right_gray_900.svg"
                  width={16}
                  height={4}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
