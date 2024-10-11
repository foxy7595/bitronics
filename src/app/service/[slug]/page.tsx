import { Metadata } from "next";
import ServicePage from "@/containers/serviceDetail";

export const metadata: Metadata = {
    title: "Service Detail",
    description: "Service detail page",
};

interface ServiceDetailPageProps {
    params: {
        slug: string;
    };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
    const { slug } = params;

    return (
        <ServicePage slug={slug} />
    );
}
