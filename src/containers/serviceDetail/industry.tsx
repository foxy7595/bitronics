import { Img, Heading } from "@/components";
import React from "react";

interface Props {
    className?: string;
    industryHeading?: React.ReactNode;
    industryDescription?: React.ReactNode;
}

export default function Industry({
    industryHeading = "業界特有のニーズに合わせたい方",
    industryDescription = "カスタムソフトウェア開発は、各企業に特有の業界要件にスムーズに適応し、最適なソリューションを提供します。",
    ...props
}: Props) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center w-full gap-2.5 px-[30px] py-[42px] md:py-5  sm:p-3 border-blue_gray-200 border border-solid`}
        >
            <div className="flex items-start gap-2.5 ">
                <Img
                    src="img_fluent_mdl2_pinned_solid.svg"
                    width={30}
                    height={30}
                    alt="業界特有のニーズに合わせたい方"
                    className="h-[30px] w-[30px] sm:!w-8 sm:!h-8"
                />

                <div>
                    <Heading as="h6" className="text-[18px] font-bold text-gray-900 sm:!text-[15px]">
                        {industryHeading}
                    </Heading>
                    <div className="flex justify-center self-stretch">
                        <Heading size="headingmd" as="h6" className=" text-[16px] sm:!text-[15px] font-normal leading-[200%] text-gray-900">
                            {industryDescription}
                        </Heading>
                    </div>

                </div>

            </div>

        </div>
    );
}
