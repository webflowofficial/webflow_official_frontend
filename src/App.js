import React from "react";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Experience from "./layouts/Experience";
import Home from "./layouts/Home";
import Navbar from "./layouts/Navbar";
import Work from "./layouts/Work";

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Experience />
            <Work />
            <Contact />
        </>
    );
}

export default App;
