// src/pages/Blogs.tsx
export default function Blogs() {
    return (
        <div className="min-h-screen bg-white text-black p-8">
            <h1 className="text-3xl font-bold mb-6">📝 SANJEEVANI AI Blog</h1>
            <p className="mb-4">Explore stories of healing, AI development, gut research, and founder reflections.</p>
            <ul className="space-y-3">
                <li className="border p-4 rounded shadow">How we built SIA: A healing AI for colorectal survivors</li>
                <li className="border p-4 rounded shadow">Founder’s story: Post-cancer recovery, LARS, and coding with purpose</li>
                <li className="border p-4 rounded shadow">Using HuggingFace and LangChain to personalize healing</li>
            </ul>
        </div>
    );
}
