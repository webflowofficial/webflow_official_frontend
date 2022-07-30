import React, { useState, useRef } from "react";
import GlobalContext from "./GlobalContext";

function Store({ children }) {
    // Global States -----------------------------------------
    const scrollToAbout = useRef();
    const scrollToExperience = useRef();
    const scrollToContact = useRef();
    const scrollToWork = useRef();

    return <GlobalContext.Provider value={{ scrollToAbout, scrollToExperience, scrollToContact, scrollToWork }}>{children}</GlobalContext.Provider>;
}

export default Store;
