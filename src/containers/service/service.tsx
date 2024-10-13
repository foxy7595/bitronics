import { Button, Heading, Img } from "@/components";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    mainHeading?: React.ReactNode;
    subHeading?: React.ReactNode;
    services?: Array<{
        id: number;
        image: string;
        name: string;
        description: string;
    }>;


}

export default function Service({
    mainHeading = (
        <>
            System
            <br />
            development
        </>
    ),
    subHeading = "システム開発事業",
    services = [],

    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex justify-center items-start  md:flex-col md:gap-6`}>
            <div className="flex w-[24%] flex-col items-start gap-[18px] md:w-full ">
                <Heading
                    size="heading2xl"
                    as="h11"
                    className="font-urbanist not-italic text-[36px] text-wrap font-bold leading-[48px] text-light_blue-a200 md:text-[34px] sm:text-[32px]"
                >
                    {mainHeading}
                </Heading>
                <Heading size="headings" as="h6" className="text-[16px] font-bold text-gray-900">
                    {subHeading}
                </Heading>
            </div>
            <div className="flex flex-1 flex-col items-end self-center md:self-stretch">
                {services.map((service, index) => (
                    <div key={index} className="hover:bg-[#F7FBFF] hover:border-b-[5px] transition-all duration-300 hover:border-b-[#1565C0] flex w-[90%] flex-col gap-5 border border-solid border-gray-200 p-[30px] md:w-full sm:p-5">
                        <div className="flex items-center gap-5 md:flex-col sm:items-start">
                            <Img
                                src={service.image}
                                width={90}
                                height={90}
                                alt={service.name}
                                className="h-[90px] w-[90px] md:w-full sm:w-[75px] scale-[1.3]"
                            />
                            <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                                <Heading size="headinglg" as="h5" className="text-[20px] font-bold text-gray-900 ">
                                    {service.name}
                                </Heading>
                                <Heading as="p" className="w-full text-[16px] font-normal leading-[200%] text-gray-900">
                                    {service.description}
                                </Heading>
                            </div>
                        </div>
                        <Link href={`/service/0${service.id}`} className="flex items-center justify-end gap-5">

                            <Heading as="h6" className="text-[18px] font-bold text-gray-900 underline">
                                View More
                            </Heading>

                            <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-900 px-3">
                                <Img src="img_tdesign_swap_right.svg" width={16} height={4} />
                            </Button>
                        </Link>

                    </div>
                ))}

            </div>
        </div>
    );
}
