import Page from "@/containers/privacy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Bitronics",
  description: "Privacy page",
  //ogTitle:'...'
};

export default function PrivacyPage() {
  return <Page />;
}
