import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Enter from "./pages/enter";
import Navbar from "./pages/Navbar";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Podcasts from "./pages/Podcasts";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
