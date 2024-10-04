"use client"
import React, { Suspense } from 'react';
import { Heading } from '@/components';
import Services from '@/components/Services';
import { useInView } from 'react-hook-inview';

interface ServiceProps {

}

const data = [
    {
        headingText: "システム開発事業",
        modelPath: "/models/service-1.glb",
        systemText: (

            "SYSTEM\nDEVELOPMENT"

        ),
        descriptionText: (
            "Custom Software\nWeb App\nMobile App\nMaintenance\nRe-engineering"
        ),
        detailedDescriptionText: (
            <>
                ・カスタムソフトウェア開発
                <br />
                ・Webアプリケーション開発
                <br />
                ・モバイルアプリケーション開発
                <br />
                ・ソフトウェアメンテナンス／リエンジニアリング
            </>
        ),
        serviceText: "Service",
    },
    {
        modelPath: "/models/service-3.glb",
        headingText: "先端技術開発事業",
        systemText: (
            "ADVANCED\nTECHNOLOGY\nDEVELOPMENT"
        ),
        descriptionText: (
            "Artificial Intelligence\nInternet of Things\nBlockchain\nAR/VR/MR"
        ),
        detailedDescriptionText: (
            <>
                ・AIアプリケーション開発
                <br />
                ・ IoT
                <br />
                ・ブロックチェーン開発
                <br />
                ・VR開発

            </>
        ),
        serviceText: "Service",
    },
    {
        modelPath: "/models/service-2.glb",
        headingText: "ソフトウェア品質保証",
        systemText: (
            "SOFTWARE QUALITY\nASSURANCE"
        ),
        descriptionText: (
            "Manual testing\nTest automation\nSoftware QA\nTesting"
        ),
        detailedDescriptionText: (
            <>
                ・ソフトウェアのQAとテスト
            </>
        ),
        serviceText: "Service",
    },
];
const Service: React.FC<ServiceProps> = ({
}) => {

    const [ref, inView] = useInView({
        threshold: 0.8,
    });


    return (
        <div className="flex flex-col min-h-[300px] gap-[62px] self-stretch sm:gap-[31px]">
            <div ref={ref} className={`flex flex-col items-start gap-5 ${inView ? "opacity-100" : "opacity-0"}`}>
                <Heading
                    size="headingxl"
                    as="h2"

                    className="font-urbanist !text-[#1565C0] text-[36px] font-extrabold tracking-[1.08px] text-blue-800 md:text-[34px] sm:text-[32px]"
                >
                    Service
                </Heading>
                <Heading size="headingmd" as="h3" className="text-[24px] font-bold text-gray-900 md:text-[22px]">
                    ビジネスを加速するソリューション
                </Heading>
            </div>
            <div className="flex flex-col gap-[150px]">
                <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                        <Services {...d} key={"top" + index} />
                    ))}
                </Suspense>
            </div>
        </div>
    );
};

export default Service;
