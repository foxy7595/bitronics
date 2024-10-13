import { Heading, Img } from '@/components';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/Breadcrumb';
import Link from 'next/link';
import React from 'react';
import { ServicePageProps } from '.';

const MissionHeader: React.FC<ServicePageProps> = ({ slug }) => {
    return (

        <div className="relative">
            <Heading
                size="heading4xl"
                as="h4"
                className="  !text-blue-800  !font-medium sm:text-[120px] -mt-8 md:!text-[150px] !leading-[50px] animate-slide-left-10 font-urbanist  whitespace-nowrap"
            >
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
                SERVICE <i className=" !font-trirong not-italic">INSIGHT {" "}</i>
            </Heading>
            <div className=" relative z-40">
                <Breadcrumb
                    separator={
                        <Img
                            src="img_group_10.svg"
                            width={10}
                            height={10}
                            alt="Material-symbols:play-arrow"
                            className="h-[10px] w-[10px]"
                        />
                    }
                    className=" mx-[100px]   my-auto flex flex-1 -mt-10 items-center gap-2.5 sm:mx-4 md:mx-6"
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" as={Link}>
                            <Heading
                                size="headinglg"
                                as="h1"
                                className="font-notosanscjkjp text-[14px] font-bold !text-gray-100"
                            >
                                Home
                            </Heading>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem >
                        <BreadcrumbLink href="/service" as={Link}>
                            <Heading size="headingxs" as="h2" className="font-notosanscjkjp text-[14px] font-bold !text-gray-100">
                                Service
                            </Heading>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem >
                        <BreadcrumbLink href={`/service/${slug}`} as={Link}>
                            <Heading size="headingxs" as="h2" className="font-notosanscjkjp text-[14px] font-bold text-gray-900">
                                Insight: {slug}
                            </Heading>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
    );
};

export default MissionHeader;
