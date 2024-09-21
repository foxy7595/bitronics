import { Text, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: React.ReactNode;
  companyName?: React.ReactNode;
  systemDevelopmentBusiness?: React.ReactNode;
  customSoftwareDevelopment?: React.ReactNode;
}

export default function UserProfile({
  userImage = "画像",
  companyName = "会社名またはコンテンツ名",
  systemDevelopmentBusiness = "システム開発事業",
  customSoftwareDevelopment = "#カスタムソフトウェア開発",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start w-full gap-5`}>
      <div className="flex justify-center self-stretch bg-gray-300 px-14 py-24 md:p-5">
        <Text size="textlg" as="p" className="text-[16px] font-normal text-blue_gray-400">
          {userImage}
        </Text>
      </div>
      <Heading as="h6" className="text-[18px] font-bold text-gray-900">
        {companyName}
      </Heading>
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <Text
          as="p"
          className="flex items-center justify-center bg-light_blue-a200 px-1.5 text-[14px] font-normal text-gray-900"
        >
          {systemDevelopmentBusiness}
        </Text>
        <Text as="p" className="text-[14px] font-normal text-gray-900">
          {customSoftwareDevelopment}
        </Text>
      </div>
    </div>
  );
}
