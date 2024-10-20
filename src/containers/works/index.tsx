"use client";


import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import WorksHeader from "./header";
import WorksColumn from "./works";
import HeadingAnimation from "../headingAnimation";

export default function WorksPage() {


  React.useEffect(() => {
    // Ensure the component is mounted before scrolling
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 300);
    }
  }, []);

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
