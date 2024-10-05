"use client";
import Header from "@/containers/header";
import React, { useEffect, useState } from "react";
import { Heading } from "../Heading";
import Contact from "@/containers/home/Contact";
import Footer from "../Footer";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return <main></main>;
  return (
    <main>
      <Header />
      <div className="w-screen overflow-x-hidden">{children}</div>

      <div className="relative h-24 mt-20  overflow-hidden">
        <Heading
          size="heading3xl"
          as="h4"
          className=" !text-blue-50  sm:text-[60px] md:text-[80px]  !font-medium animate-slide-left absolute bottom-[calc(50%-100px)] -top-8 sm:-top-0 md:-top-4 left-[230px] whitespace-nowrap"
        >
          Empower Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development. Empower
          Your <i className=" !font-trirong not-italic">Growth</i> with{" "}
          <i className="!font-trirong not-italic"> Advanced</i> System Development.
        </Heading>
      </div>
      <Contact />

      <div className="mt-20 overflow-x-hidden">
        <Footer />
      </div>
    </main>
  );
};

export default MainContainer;
