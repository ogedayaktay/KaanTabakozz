import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Yazılar | Kaan Tabaköz",
    description: "Psikoloji, zihinsel sağlık, iyi oluş ve terapi süreçleri hakkında güncel blog yazıları.",
};

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
