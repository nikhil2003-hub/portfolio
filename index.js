import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaPhp, FaNodeJs, FaDatabase, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Sidebar = () => (
    <div className="bg-gray-900 text-white p-4 flex flex-col items-center h-full w-20 space-y-6">
    <div className="bg-black p-2 rounded-full">
        <span className="text-xl font-bold">🧠</span>
    </div>
    {['About', 'Resume', 'Projects', 'Blogs', 'Contact'].map((item) => (
        <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-cyan-400">
        {item}
        </Link>
    ))}
    </div>
);

const Profile = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-6 p-6">
    <img src="/profile.jpg" alt="Profile" className="rounded-2xl w-48 h-48 object-cover" />
    <div>
        <h1 className="text-3xl font-bold text-white">Nick Williams</h1>
        <p className="text-cyan-400">Full-Stack Web Developer</p>
    <div className="flex space-x-3 mt-4 text-white text-xl">
        <FaFacebook /> <FaInstagram /> <FaGithub /> <FaLinkedin />
        </div>
    </div>
    </motion.div>
);

const About = () => (
    <div className="text-white p-6">
    <h2 className="text-2xl font-bold text-cyan-400">Hey there! 👋</h2>
    <p className="mt-4">
        I'm thrilled to tell you a bit about myself. I have over six years of IT experience,
        specializing in <span className="text-cyan-400">PHP</span>, <span className="text-cyan-400">Database Development</span>, and
        <span className="text-cyan-400"> open-source frameworks</span>. If you're in need of a motivated team player,let's connect!
    </p>
    <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-800 p-4 rounded-xl">🚀 2K+ Websites Designed</div>
        <div className="bg-gray-800 p-4 rounded-xl">💼 5+ Years of Experience</div>
        <div className="bg-gray-800 p-4 rounded-xl">✅ 4K Completed Projects</div>
    </div>
    </div>
);

const Skills = () => (
    <div className="text-white p-6">
    <h2 className="text-2xl font-bold text-cyan-400">My Skills</h2>
    <div className="grid grid-cols-4 gap-4 mt-6 text-center">
        <div className="bg-gray-800 p-4 rounded-xl"><FaHtml5 size={40} /> HTML5</div>
        <div className="bg-gray-800 p-4 rounded-xl"><FaCss3Alt size={40} /> CSS</div>
        <div className="bg-gray-800 p-4 rounded-xl"><FaReact size={40} /> React</div>
        <div className="bg-gray-800 p-4 rounded-xl"><FaPython size={40} /> Python</div>
        <div className="bg-gray-800 p-4 rounded-xl"><FaDatabase size={40} /> MySQL (65%)</div>
        <div className="bg-gray-800 p-4 rounded-xl"><FaPhp size={40} /> PHP (85%)</div>
        <div className="bg-gray-800 p-4 rounded-xl"><FaNodeJs size={40} /> Node.js (90%)</div>
        <div className="bg-gray-800 p-4 rounded-xl">PostgreSQL (75%)</div>
    </div>
    </div>
);

const App = () => (
    <Router>
    <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <Sidebar />
        <div className="flex-1 overflow-y-auto">
        <Profile />
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Skills />} />
            <Route path="/projects" element={<Skills />} />
            <Route path="/blogs" element={<Skills />} />
            <Route path="/contact" element={<Skills />} />
        </Routes>
        </div>
    </div>
    </Router>
);

export default App;
