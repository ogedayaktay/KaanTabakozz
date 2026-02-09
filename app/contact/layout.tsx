import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim & Randevu | Kaan Tabaköz",
    description: "Lüleburgaz ve online terapi hizmetleri için randevu alın. İletişim bilgileri, adres ve ulaşım.",
};

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
