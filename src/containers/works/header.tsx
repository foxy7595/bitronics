import { Heading, Img } from "@/components";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/Breadcrumb";
import Link from "next/link";
import React from "react";

const MissionHeader: React.FC = () => {
  return (
    <div className="relative">
      <Heading
        size="heading4xl"
        as="h4"
        className="  !text-blue-800  !font-medium sm:!text-[120px] -mt-8 md:!text-[150px] !leading-[50px] animate-slide-left-10 font-urbanist  whitespace-nowrap"
      >
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
        WORKS <i className=" !font-trirong not-italic">WORKS </i>
      </Heading>

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
        className=" mx-[100px] my-auto flex flex-1 -mt-10 items-center gap-2.5 sm:mx-6 md:mx-6"
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" as={Link}>
            <Heading
              size="headingxs"
              as="h1"
              className="font-notosanscjkjp text-[14px] relative z-40 font-bold !text-gray-100"
            >
              Home
            </Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#" as={Link}>
            <Heading
              size="headingxs"
              as="h2"
              className="font-notosanscjkjp text-[14px] font-bold text-gray-900"
            >
              Works
            </Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default MissionHeader;
