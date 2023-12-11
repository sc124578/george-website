import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/header";
import Home from "./Home/Home";
import Team from "./Team/Team";
import Goals from "./Goals/Goals";

export default function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/goals" element={<Goals />} />
                </Routes>
            </Router>
        </div>
    )
}
