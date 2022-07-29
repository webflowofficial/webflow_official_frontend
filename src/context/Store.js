import React, { useState, useRef } from "react";
import GlobalContext from "./GlobalContext";

function Store({ children }) {
    // Global States -----------------------------------------
    const [headerHeight, setHeaderHeight] = useState("80px");

    const scrollToAbout = useRef();
    const scrollToExperience = useRef();
    const scrollToContact = useRef();

    return (
        <GlobalContext.Provider value={{ headerHeight, setHeaderHeight, scrollToAbout, scrollToExperience, scrollToContact }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default Store;
