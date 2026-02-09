import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-background text-center px-4">
            <h1 className="font-serif text-9xl font-bold text-primary opacity-10">404</h1>
            <div className="relative -mt-12 space-y-6">
                <h2 className="font-serif text-3xl font-bold text-primary">Sayfa Bulunamadı</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                    Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
                </p>
                <div className="pt-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-secondary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md"
                    >
                        <MoveLeft size={20} />
                        Anasayfaya Dön
                    </Link>
                </div>
            </div>
        </div>
    );
}
