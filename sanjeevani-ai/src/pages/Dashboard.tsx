

const symptoms = [
    { name: "Bloating", level: 3 },
    { name: "Urgency", level: 2 },
    { name: "Energy", level: 4 },
    { name: "Sleep", level: 5 },
];

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-lavender-200 to-purple-900 p-6 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">Your Healing Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {symptoms.map((symptom, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                        <h2 className="text-xl font-semibold mb-2">{symptom.name}</h2>
                        <div className="w-full bg-white/20 rounded-full h-4">
                            <div
                                className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out"
                                style={{ width: `${symptom.level * 20}%` }}
                            ></div>
                        </div>
                        <p className="mt-2 text-sm">Level: {symptom.level}/5</p>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <p className="text-lg">Healing Streak: <span className="font-bold">5 days</span> 🌿</p>
                <p className="text-lg mt-1">You’re doing amazing. Keep logging!</p>
            </div>
        </div>
    );
}
