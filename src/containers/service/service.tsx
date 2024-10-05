import { Button, Heading, Img } from "@/components";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    mainHeading?: React.ReactNode;
    subHeading?: React.ReactNode;
    customSoftwareDevelopmentTitle?: React.ReactNode;
    customSoftwareDevelopmentDescription?: React.ReactNode;
    viewMoreLinkText?: React.ReactNode;
    webAppDevelopmentTitle?: React.ReactNode;
    webAppDevelopmentDescription?: React.ReactNode;
    viewMoreLinkTextOne?: React.ReactNode;
    mobileAppDevelopmentTitle?: React.ReactNode;
    mobileAppDevelopmentDescription?: React.ReactNode;
    viewMoreLinkTextTwo?: React.ReactNode;
    softwareMaintenanceTitle?: React.ReactNode;
    softwareMaintenanceDescription?: React.ReactNode;
    viewMoreLinkTextThree?: React.ReactNode;
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
    customSoftwareDevelopmentTitle = "カスタムソフトウェア開発",
    customSoftwareDevelopmentDescription = "お客様の独自のビジネスニーズに対応し、Webやモバイルアプリケーション、API、その他のソフトウェア製品のためのパーソナライズされたソリューションを提供します。",
    viewMoreLinkText = "View more",
    webAppDevelopmentTitle = "Webアプリケーション開発",
    webAppDevelopmentDescription = "ユーザビリティ、効率性、セキュリティに焦点を当て最新のWeb技術を活用してカスタムアプリケーションを構築します。",
    viewMoreLinkTextOne = "View more",
    mobileAppDevelopmentTitle = "モバイルアプリケーション開発",
    mobileAppDevelopmentDescription = "iOS、Android、およびクロスプラットフォーム向けに革新的で使いやすいモバイルアプリケーションを提供します。",
    viewMoreLinkTextTwo = "View more",
    softwareMaintenanceTitle = "ソフトウェアメンテナンスとリエンジニアリング",
    softwareMaintenanceDescription = "お客様の既存のソフトウェアを効果的にメンテナンスし、リエンジニアリングして最新の技術や要件にアップグレードします。",
    viewMoreLinkTextThree = "View more",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex justify-center items-start container-xs`}>
            <div className="flex w-[24%] flex-col items-start gap-[18px] md:w-full">
                <Heading
                    size="heading2xl"
                    as="h1"
                    className="font-urbanist text-[36px] font-bold leading-[43px] text-light_blue-a200 md:text-[34px] sm:text-[32px]"
                >
                    {mainHeading}
                </Heading>
                <Heading size="headings" as="h6" className="text-[16px] font-bold text-gray-900">
                    {subHeading}
                </Heading>
            </div>
            <div className="flex flex-1 flex-col items-end self-center md:self-stretch">
                <div className="flex w-[90%] flex-col gap-5 border border-solid border-blue_gray-200 p-[30px] md:w-full sm:p-5">
                    <div className="flex items-center gap-5 md:flex-col">
                        <Img
                            src="img_icon_service1.svg"
                            width={90}
                            height={90}
                            alt="Systemdevelopme"
                            className="h-[90px] w-[90px] md:w-full"
                        />
                        <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                            <Heading size="headinglg" as="h5" className="text-[20px] font-bold text-gray-900">
                                {customSoftwareDevelopmentTitle}
                            </Heading>
                            <Heading as="p" className="w-full text-[16px] font-normal leading-[200%] text-gray-900">
                                {customSoftwareDevelopmentDescription}
                            </Heading>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-5">
                        <Link href="#">
                            <Heading as="h6" className="text-[18px] font-bold text-gray-900 underline">
                                {viewMoreLinkText}
                            </Heading>
                        </Link>
                        <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-900 px-3">
                            <Img src="img_tdesign_swap_right.svg" width={16} height={4} />
                        </Button>
                    </div>
                </div>
                <div className="flex w-[90%] justify-end bg-gray-50 md:w-full">
                    <div className="mb-1 flex w-full flex-col gap-5 border border-solid border-blue_gray-200 p-[30px] sm:p-5">
                        <div className="flex items-center gap-5 md:flex-col">
                            <Img
                                src="img_icon_service2.svg"
                                width={90}
                                height={90}
                                alt="Webアプリケーション開発"
                                className="h-[90px] w-[90px] md:w-full"
                            />
                            <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                                <Heading size="headinglg" as="h5" className="text-[20px] font-bold text-gray-900">
                                    {webAppDevelopmentTitle}
                                </Heading>
                                <Heading as="p" className="w-full text-[16px] font-normal leading-[200%] text-gray-900">
                                    {webAppDevelopmentDescription}
                                </Heading>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-5">
                            <Link href="#">
                                <Heading as="h6" className="text-[18px] font-bold text-gray-900 underline">
                                    {viewMoreLinkTextOne}
                                </Heading>
                            </Link>
                            <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-900 px-3">
                                <Img src="img_tdesign_swap_right.svg" width={16} height={4} />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="relative mt-[-4px] flex w-[90%] flex-col gap-5 border border-solid border-blue_gray-200 p-[30px] md:w-full sm:p-5">
                    <div className="flex items-center gap-5 md:flex-col">
                        <Img
                            src="img_television.svg"
                            width={90}
                            height={90}
                            alt="モバイルアプリケーション開発"
                            className="h-[90px] w-[90px] md:w-full"
                        />
                        <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                            <Heading size="headinglg" as="h5" className="text-[20px] font-bold text-gray-900">
                                {mobileAppDevelopmentTitle}
                            </Heading>
                            <Heading as="p" className="w-full text-[16px] font-normal leading-[200%] text-gray-900">
                                {mobileAppDevelopmentDescription}
                            </Heading>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-5">
                        <Link href="#">
                            <Heading as="h6" className="text-[18px] font-bold text-gray-900 underline">
                                {viewMoreLinkTextTwo}
                            </Heading>
                        </Link>
                        <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-900 px-3">
                            <Img src="img_tdesign_swap_right.svg" width={16} height={4} />
                        </Button>
                    </div>
                </div>
                <div className="flex w-[90%] flex-col gap-5 border border-solid border-blue_gray-200 p-[30px] md:w-full sm:p-5">
                    <div className="flex items-center gap-5 md:flex-col">
                        <Img
                            src="img_icon_service4.svg"
                            width={90}
                            height={90}
                            alt="Image"
                            className="h-[90px] w-[90px] md:w-full"
                        />
                        <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                            <Heading size="headinglg" as="h5" className="text-[20px] font-bold text-gray-900">
                                {softwareMaintenanceTitle}
                            </Heading>
                            <Heading as="p" className="w-full text-[16px] font-normal leading-[200%] text-gray-900">
                                {softwareMaintenanceDescription}
                            </Heading>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-5">
                        <Link href="#">
                            <Heading as="h6" className="text-[18px] font-bold text-gray-900 underline">
                                {viewMoreLinkTextThree}
                            </Heading>
                        </Link>
                        <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-gray-900 px-3">
                            <Img src="img_tdesign_swap_right.svg" width={16} height={4} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
