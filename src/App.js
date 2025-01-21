import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AgentList from './components/AgentList';
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
            <AgentList />
            <footer className="py-3 mt-4 bg-dark text-white text-center">
                <p>&copy; 2025 AI Agents Directory. All rights reserved.</p>
            </footer>
            <Analytics />
        </div>
    );
}

export default App;
