"use client"
import { Heading, Button, Img } from "@/components";
import React from "react";

interface Props {
  className?: string;
}

const techStackList = [
  { title: "<b>PHP Laravel</b>開発者", id: "job1" },
  { title: "<b>Java</b> スクリプトフルスタック開発者", id: "job2" },
  { title: "<b>Android</b> 開発者-<b>Kotlin</b>", id: "job3" },
  { title: "<b>iOS Swift</b> 開発者", id: "job4" },
  { title: "フラッター開発者", id: "job5" },
  { title: "<b>UI&UX</b>デザイナー", id: "job6" },
];

export default function TechStack({ ...props }: Props) {

  const handleScroll = (to: string) => {
    const element = document.getElementById(to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center relative z-30 items-center flex-wrap gap-y-6 lg:gap-x-10 gap-x-28 flex-1`}
    >
      {techStackList.map((item, index) => (

        <div key={index} className="flex items-center cursor-pointer gap-5" onClick={() => handleScroll(item.id)}>
          <Heading
            as="h6"
            className="!text-[18px] font-medium text-gray-900 underline sm:!text-[15px] whitespace-nowrap"
          >
            <div dangerouslySetInnerHTML={{ __html: item.title }} />
          </Heading>
          <Button className="flex h-[30px] w-[30px] items-center justify-center rounded-[14px] border group border-solid hover:!bg-gray-900 border-gray-900 px-2.5">
            <Img src="img_light_bulb.svg" className=" scale-[1.4] group-hover:scale-[1.6]   group-hover:hidden " width={6} height={8} />
            <Img src="img_light_bulb1.svg" className=" scale-[1.4] group-hover:scale-[1.6] hidden group-hover:block " width={6} height={8} />
          </Button>
        </div>
      ))}
    </div>
  );
}
