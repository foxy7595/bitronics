import Page from "@/containers/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Bitronics",
  description: "Contact page",
  //ogTitle:'...'
};

export default function ContactPage() {
  return <Page />;
}
