import React from "react";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Home from "./layouts/Home";
import Navbar from "./layouts/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Contact />
        </>
    );
}

export default App;
