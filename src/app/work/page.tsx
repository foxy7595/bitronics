import Page from "@/containers/works";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Works | Bitronics",
    description: "Works page",
    //ogTitle:'...'
};

export default function WorkPage() {
    return (
        <Page />
    );
}
