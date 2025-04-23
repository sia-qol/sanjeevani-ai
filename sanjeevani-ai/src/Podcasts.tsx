export default function Podcasts() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-4">🎙️ Icons of Inspiration</h1>
            <p className="mb-6">Watch our full collection of healing and visionary stories on YouTube.</p>
            <a
                href="https://www.youtube.com/@IconsofInspiration-s"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-xl transition"
            >
                Visit YouTube Channel
            </a>
        </div>
    );
}
