import React, { useState, useRef } from "react";
import GlobalContext from "./GlobalContext";

function Store({ children }) {
    // Global States -----------------------------------------
    const scrollToAbout = useRef();
    const scrollToExperience = useRef();
    const scrollToContact = useRef();
    const scrollToWork = useRef();

    const [siteData, setSiteData] = useState();

    return (
        <GlobalContext.Provider value={{ setSiteData, siteData, scrollToAbout, scrollToExperience, scrollToContact, scrollToWork }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default Store;
