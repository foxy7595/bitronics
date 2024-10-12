import Page from "@/containers/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Bitronics",
  description: "About page",
  //ogTitle:'...'
};

export default function MissionPage() {
  return (
    <Page />
  );
}
