import { Heading, Img } from "@/components";
import React from "react";

interface Props {
    className?: string;
    missionTitle?: React.ReactNode;
    missionSubtitle?: React.ReactNode;
    techDrivenTitle?: React.ReactNode;
    techDrivenDescription?: React.ReactNode;
    missionImage?: string;
}

export default function MissionStatement({
    missionTitle = "Mission",
    missionSubtitle = "私たちの使命",
    techDrivenTitle = "Tech-Driven Success",
    missionImage = "img_low_angle_woman.png",
    techDrivenDescription = (
        <>
            BitronicsのMissionは、テクノロジーの力で成功ルートを創造し、クライアント様を豊かな未来へと導くことです。
            <br />
            柔軟な対応力、新しいアプローチでビジネスの可能性を広げ、持続可能な変革を提供します。
        </>
    ),
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex flex-col  `}>
            <div className=" flex flex-col gap-[62px]  sm:gap-[31px]">
                <div className="flex flex-col items-start gap-1">
                    <div className="flex items-center gap-[30px] self-stretch ">
                        <Heading
                            size="heading2xl"
                            as="h1"
                            className="text-[64px] not-italic font-semibold  text-gray-900 md:text-[48px]"
                        >
                            {missionTitle}
                        </Heading>
                        <div className="h-px flex-1 bg-gray-900 " />
                    </div>
                    <Heading
                        size="headinglg"
                        as="h4"
                        className="font-notosanscjkjp text-[24px] font-bold text-gray-900 md:text-[22px]"
                    >
                        {missionSubtitle}
                    </Heading>
                </div>
                <div className="flex items-start justify-between gap-5 md:flex-col">
                    <Img
                        src={missionImage}
                        width={480}
                        height={300}
                        alt="Image"
                        className="h-[300px] w-[38%] self-center object-contain md:w-full md:h-full rounded-sm"
                    />
                    <div className="mt-3.5 flex w-[54%] flex-col items-start gap-4 md:w-full">
                        <Heading
                            size="headingxl"
                            as="h1"
                            className="text-[36px] font-bold text-light_blue-a200 md:text-[34px] sm:text-[32px]"
                        >
                            {techDrivenTitle}
                        </Heading>
                        <Heading as="p" className="w-full font-notosanscjkjp text-[16px] font-normal leading-[200%] text-gray-900">
                            {techDrivenDescription}
                        </Heading>
                    </div>
                </div>
            </div>
        </div>
    );
}