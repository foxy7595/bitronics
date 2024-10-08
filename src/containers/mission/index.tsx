import FluidContainer from "@/components/Layout/FluidContainer";
import React, { Suspense } from "react";
import MainContainer from "@/components/Layout/MainContainer";

import MissionHeader from "./header";
import MissionStatement from "./statement";

const data = [
    {
        missionTitle: "Mission",
        missionSubtitle: "私たちの使命",
        techDrivenTitle: "Tech-Driven Success",
        missionImage: "img_low_angle_woman.png",
        techDrivenDescription: (
            <>
                BitronicsのMissionは、テクノロジーの力で成功ルートを創造し、クライアント様を豊かな未来へと導くことです。
                <br />
                柔軟な対応力、新しいアプローチでビジネスの可能性を広げ、持続可能な変革を提供します。
            </>
        ),
    },
    {
        missionTitle: "Vision",
        missionSubtitle: "目指す未来",
        techDrivenTitle: "Innovate to Elevate",
        missionImage: "vision.png",
        techDrivenDescription: (
            <>
                Bitronicsのビジョンは、革新を通じてビジネスを高めることにあります。<br />
                最新テクノロジーの活用と創造的なアプローチにより、我々は顧客体験を向上させ、業界の基準を引き上げ持続可能な成長を実現します。<br />
                お客様と共に未来を築くために、イノベーションを積極的に追求し、変革の牽引役となります。
            </>
        ),
    },
    {
        missionTitle: "Values",
        missionSubtitle: "私たちの価値と価値観",
        techDrivenTitle: "Crafted Integrity",
        missionImage: "value.png",
        techDrivenDescription: (
            <>
                革新、完全なコミットメント、協力とチームワーク、顧客満足度の最大化、そしてスピーディな対応、これらは私たちの価値観、信念であり、日々の判断や行動に深く根ざし、お客様との強い絆を築いています。
                <br />
                同時に、誠実なサービスと高潔なビジネスプラクティスも我々の価値観の中心に位置し、お客様との長期的な信頼関係を築く原動力となっています。
            </>
        ),
    },
];

export default function MissionPage() {
    return (
        <MainContainer>
            <MissionHeader />

            <div className="flex flex-col gap-[90px] mt-[80px] mx-[100px] sm:mx-6 md:mx-6">
                <Suspense fallback={<div>Loading feed...</div>}>
                    {data.map((d, index) => (
                        <MissionStatement {...d} key={"misson" + index} className="" />
                    ))}
                </Suspense>
            </div>


        </MainContainer>
    );
}
