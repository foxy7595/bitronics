import { Heading, Button, Img } from "@/components";
import React from "react";

interface Props {
  className?: string;
}

const techStackList = [
  { title: "<b>PHP Laravel</b>開発者" },
  { title: "<b>Java</b> スクリプトフルスタック開発者" },
  { title: "<b>Android</b> 開発者-<b>Kotlin</b>" },
  { title: "<b>iOS Swift</b> 開発者" },
  { title: "フラッター開発者" },
  { title: "<b>UI&UX</b>デザイナー" },
];

export default function TechStack({ ...props }: Props) {
  return (
    <div
      {...props}
      className={`${props.className} flex justify-center items-center flex-wrap gap-y-6 lg:gap-x-10 gap-x-28 flex-1`}
    >
      {techStackList.map((item, index) => (
        <div key={index} className="flex items-center gap-5">
          <Heading
            as="h6"
            className="text-[18px] font-medium text-gray-900 underline sm:text-[15px] whitespace-nowrap"
          >
            <div dangerouslySetInnerHTML={{ __html: item.title }} />
          </Heading>
          <Button className="flex h-[30px] w-[30px] items-center justify-center rounded-[14px] border border-solid border-gray-900 px-2.5">
            <Img src="img_light_bulb.svg" width={6} height={8} />
          </Button>
        </div>
      ))}
    </div>
  );
}
