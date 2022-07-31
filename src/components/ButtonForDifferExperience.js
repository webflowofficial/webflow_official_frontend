import React from "react";

function ButtonForDifferExperience({ switchButtonAndContent, handleButtonSwitching, innerContent, children, minWidth = "min-w-[7rem]" }) {
    return (
        <button
            className={`box-content h-10 transition-all duration-300 hover:bg-custom-hover-effect hover:text-custom-primary-button ${minWidth} px-1 text-center md:border-l-2 md:pl-5 md:text-start md-max:border-b-2 ${
                switchButtonAndContent[innerContent] ? "border-custom-primary-button text-custom-primary-button " : " border-custom-hover-effect"
            }`}
            onClick={(evt) => handleButtonSwitching(evt, innerContent)}
        >
            {children}
        </button>
    );
}

export default ButtonForDifferExperience;
