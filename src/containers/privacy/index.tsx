"use client";

import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import PrivacyHeader from "./header";
import PrivacyContent from "./content";
import HeadingAnimation from "../headingAnimation";

export default function PrivacyPage() {
  return (
    <MainContainer>
      <PrivacyHeader />
      <div className="mt-[80px] sm:mt-6 md:mt-6 mx-[100px] sm:mx-6 md:mx-6">
        <HeadingAnimation
          missionTitle="Privacy"
          missionSubtitle="プライバシーポリシー"
        />
        <PrivacyContent />
      </div>
    </MainContainer>
  );
}
