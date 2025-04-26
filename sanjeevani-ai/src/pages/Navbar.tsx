// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-purple-800 text-white p-4 flex justify-between items-center shadow-md">
            <div className="text-xl font-bold">SANJEEVANI AI 🌿</div>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/chat" className="hover:underline">Chat</Link>
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                <Link to="/podcasts" className="hover:underline">Podcasts</Link>
                <Link to="/blogs" className="hover:underline">Blogs</Link>
            </div>
        </nav>
    );
}



