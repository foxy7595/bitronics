import React from "react";
import { Metadata } from "next";
import Page from "@/containers/home";

export const metadata: Metadata = {
  title: "Home | Bitronics",
  description: "Web site created using create-react-app",
  //ogTitle:'...'
};

export default function TOPPage() {
  return <Page />;
}
