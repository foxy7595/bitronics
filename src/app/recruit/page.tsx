import Page from "@/containers/recruit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruit | Bitronics",
  description: "Recruit page",
  //ogTitle:'...'
};

export default function RecruitPage() {
  return <Page />;
}
