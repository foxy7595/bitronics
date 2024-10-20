import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import WorksHeader from "./header";
import WorksColumn from "./works";
import HeadingAnimation from "../headingAnimation";

export default function WorksPage() {
  return (
    <MainContainer>
      <WorksHeader />

      <div className="flex flex-col gap-[90px] mt-[80px] mx-[100px] sm:mx-6 md:mx-6 mb-8">
        <HeadingAnimation missionTitle="Works" missionSubtitle="制作実績" />

        <WorksColumn />
      </div>
    </MainContainer>
  );
}
