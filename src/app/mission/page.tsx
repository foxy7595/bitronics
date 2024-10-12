import Page from "@/containers/mission";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission | Bitronics",
  description: "Mission page",
  //ogTitle:'...'
};

export default function MissionPage() {
  return (
    <Page />
  );
}
