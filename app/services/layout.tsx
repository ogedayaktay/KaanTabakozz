import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmetler | Kaan Tabaköz",
    description: "Bireysel Terapi, Çift Terapisi, Ergen Danışmanlığı ve Online Terapi hizmetleri hakkında detaylar.",
};

export default function ServicesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
