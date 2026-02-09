import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımda | Kaan Tabaköz",
    description: "Klinik Psikolog Kaan Tabaköz hakkında detaylı bilgi, eğitim geçmişi, terapi yaklaşımı ve uzmanlık alanları.",
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
