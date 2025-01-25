import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AgentList from './components/AgentList';
import TokenInfo from './components/TokenInfo';
import WhitePaper from './components/WhitePaper';
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <AgentList />
                    </>
                } />
                <Route path="/agents" element={<AgentList />} />
                <Route path="/token" element={<TokenInfo />} />
                <Route path="/whitepaper" element={<WhitePaper />} />
            </Routes>
            <footer className="py-3 mt-4 bg-dark text-white text-center">
                <p>&copy; 2025 AI Agents Directory. All rights reserved.</p>
            </footer>
            <Analytics />
        </div>
    );
}

export default App;
