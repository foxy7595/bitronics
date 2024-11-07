"use client";

import React from "react";
import MainContainer from "@/components/Layout/MainContainer";

import ServiceHeader from "./header";
import Main from "./main";
import WhoItsFor from "./whoItsFor";
import Step from "./step";
import Images from "./images";

export type ServicePageProps = {
  slug: string;
  data?: any;
};

export default function ServicePage({ slug, data }: ServicePageProps) {
  React.useEffect(() => {
    // Ensure the component is mounted before scrolling
    if (typeof window !== "undefined") {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);
    }
  }, []);

  return (
    <MainContainer>
      <ServiceHeader slug={slug} />

      <Main data={data} />

      <Images images={data.images || []} grid={data.grid} />

      <WhoItsFor data={data} />

      <Step data={data} />
    </MainContainer>
  );
}
