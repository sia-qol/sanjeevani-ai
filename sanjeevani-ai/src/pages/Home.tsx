import { Link } from "react-router-dom";

import { useSearchParams } from "react-router-dom";

const roleMessages: Record<string, { title: string; subtitle: string }> = {
    user: {
        title: "Welcome, dear Survivor",
        subtitle: "SIA is here to guide your healing journey — one step at a time.",
    },
    doctor: {
        title: "Welcome, Doctor",
        subtitle: "Access your patient dashboard and help personalize care with AI.",
    },
    researcher: {
        title: "Welcome, Researcher",
        subtitle: "Explore symptom trends, microbiome patterns, and logs for insights.",
    },
    default: {
        title: "Welcome to SANJEEVANI AI",
        subtitle: "Precision healing for every body, mind, and moment.",
    },
};

export default function Home() {
    const [searchParams] = useSearchParams();
    const role = searchParams.get("role") || "default";
    const { title, subtitle } = roleMessages[role] || roleMessages.default;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender-200 via-purple-400 to-purple-900 text-white p-4">
            <div className="max-w-md w-full text-center bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                <p className="text-lg mb-8">{subtitle}</p>
                <div className="flex flex-col gap-4">
                    <button className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-xl shadow hover:bg-purple-100 transition">
                        Explore
                    </button>
                    <Link
                        to="/dashboard"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl text-center transition"
                    >
                        Start Healing
                    </Link>

                    <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 text-white font-semibold py-2 px-4 rounded-xl transition">
                        Meet SIA
                    </button>
                </div>
            </div>
        </div>
    );
}
