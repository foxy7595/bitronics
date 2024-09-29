import React from 'react';
import { Heading } from '@/components';

const Main: React.FC = () => {
    return (
        <div className=" flex items-center justify-center self-stretch max-h-screen">
            <div className="w-full">

                <div className="relative  flex items-center md:flex-col">
                    <div className="flex flex-col items-start w-full  overflow-x-hidden  relative">
                        <img
                            src="/images/haft-logo.png"
                            alt="logo haft"
                            className="object-cover md:h-auto w-auto h-[calc(100vh-150px)] relative z-10 mt-[54px]"
                        />
                        <div className="absolute right-[20px] scale-75 ">
                            <Heading
                                size="headingxl"
                                as="h1"
                                className="w-[36px] self-center text-[12px] font-bold  leading-[38px] absolute right-[220px] text-gray-900 md:px-5 "
                            >
                                ビジネスを進化させよう
                            </Heading>

                            <Heading
                                size="headingxl"
                                as="h2"
                                className="w-[36px] text-[36px] font-bold leading-[42px] text-gray-900 md:px-5 md:text-[34px]  absolute right-[170px]  sm:text-[32px]"
                            >
                                システム開発で
                            </Heading>
                            <Heading
                                size="headingxl"
                                as="h3"
                                className="w-[36px] text-[36px] font-bold leading-[42px] text-gray-900 md:px-5 md:text-[34px] absolute right-[120px]  sm:text-[32px]"
                            >
                                革新的な
                            </Heading>


                        </div>

                        <Heading
                            size="heading4xl"
                            as="h4"
                            className=" !text-blue-800  !font-medium animate-slide-left absolute bottom-[calc(50%-100px)] left-[230px] whitespace-nowrap"
                        >
                            Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development. Empower Your Growth with Advanced System Development.  Empower Your Growth with Advanced System Development.
                        </Heading>


                        <div className="flex flex-col items-center w-full bottom-0 gap-[50px] self-stretch  sm:gap-[47px] absolute">
                            <Heading
                                size="headingxl"
                                as="h5"
                                className="text-center text-[36px] font-bold  text-gray-900 md:text-[34px] sm:text-[32px]"
                            >
                                Bitronicsはデジタル領域の専門家です
                            </Heading>
                            <Heading
                                size="heading3xl"
                                as="h6"
                                binary
                                className="font-urbanist w-[1150px] text-[90px] relative z-20 font-semibold tracking-[2.70px] text-light_blue-a200 md:text-[48px]"
                            >
                                Digital Domain Specialist
                            </Heading>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default Main;
