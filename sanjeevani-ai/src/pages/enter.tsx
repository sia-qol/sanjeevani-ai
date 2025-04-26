import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Enter() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (!name || !email || !country) {
            alert("Please fill in all fields.");
            return;
        }

        console.log("User Data:", { name, email, country });
        setSubmitted(true);
    };

    return (
        <>
            <Helmet>
                <title>SANJEEVANI AI | Enter</title>
            </Helmet>

            <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Welcome to SANJEEVANI AI</h1>
                <p className="text-center mb-10 text-gray-400 max-w-md">
                    Please enter your name, email, and country so we can personalize your experience with SIA.
                </p>

                {!submitted ? (
                    <div className="w-full max-w-sm space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none"
                        />
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-md text-white font-semibold"
                        >
                            Submit
                        </button>
                    </div>
                ) : (
                    <p className="text-green-500 text-center">Thank you! Your info has been submitted 💫</p>
                )}
            </div>
        </>
    );
}
