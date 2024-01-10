import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/header";
import Home from "./Home/Home";
import Team from "./Team/Team";
import Goals from "./Goals/Goals";
import About from "./About/About.js";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>c
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/goals" element={<Goals />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </div>
    )
}
