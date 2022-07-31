import React, { useEffect, useState } from "react";
import MainSectionOutline from "./components/MainSectionOutline";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Experience from "./layouts/Experience";
import Home from "./layouts/Home";
import Navbar from "./layouts/Navbar";
import Work from "./layouts/Work";

import { fetchSiteData } from "./api/apiFunctions";
import Footer from "./layouts/Footer";

function App() {
    const [startingAnimation, setStartingAnimation] = useState(true);

    async function handleFetchSiteData() {
        await fetchSiteData();
        setStartingAnimation(false);
    }

    useEffect(() => {
        handleFetchSiteData();
    }, []);

    return (
        <>
            {startingAnimation && (
                <MainSectionOutline>
                    <div className=" flex h-screen w-screen items-center justify-center overflow-hidden">
                        <img className="start_animation h-48 w-48" src="./Images/Complete Logo.png" alt="" />
                    </div>
                </MainSectionOutline>
            )}
            {!startingAnimation && (
                <>
                    <Navbar />
                    <Home />
                    <About />
                    <Experience />
                    <Work />
                    <Contact />
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
