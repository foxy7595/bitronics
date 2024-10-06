import Page from "@/containers/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitronics",
  description: "Mission page",
  //ogTitle:'...'
};

export default function MissionPage() {
  return (
    <Page />
  );
}
