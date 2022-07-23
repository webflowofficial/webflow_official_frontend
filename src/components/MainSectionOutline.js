import React from "react";

function MainSectionOutline({ refs = null, children }) {
    return (
        <div
            ref={refs}
            className={`box-border flex min-h-[calc(100vh)] w-[calc(100vw-6px)] flex-wrap justify-center overflow-x-hidden bg-custom-primary-background px-10 pt-7 sm-max:w-screen sm-max:pt-5 md-max:pr-3 md-max:pl-5`}
        >
            {children}
        </div>
    );
}

export default MainSectionOutline;
