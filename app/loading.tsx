export default function Loading() {
    return (
        <div className="flex h-[50vh] w-full items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-secondary rounded-full animate-spin" />
                <p className="text-gray-500 text-sm font-medium animate-pulse">Yükleniyor...</p>
            </div>
        </div>
    );
}
