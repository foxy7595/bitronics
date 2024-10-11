import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import ServiceHeader from "./header";
import Main from "./main";
import WhoItsFor from "./whoItsFor";
import Step from "./step";

export type ServicePageProps = {
    slug: string;
};




export default function ServicePage({ slug }: ServicePageProps) {
    return (
        <MainContainer>

            <ServiceHeader slug={slug} />

            <Main />

            <WhoItsFor />

            <Step />


        </MainContainer>
    );
}
