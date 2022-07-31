import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

// Components ----------------------------------
import MainSectionOutline from "../components/MainSectionOutline";

function Home() {
    // 1) Global States --------------------------------
    const { siteData, scrollToWork } = useContext(GlobalContext);

    return (
        <MainSectionOutline>
            <div className="flex w-screen flex-col gap-6 lg:w-4/5 sm-max:gap-3">
                <p className="text-custom-primary-button">{siteData.topLine}</p>
                <p className="font-bold leading-none text-custom-primary-font xsm:text-5xl md:text-6xl lg:text-7xl sm-max:text-3xl">
                    {siteData.brandName}
                </p>
                <p className="font-bold leading-none text-custom-primary-font xsm:text-5xl md:text-6xl lg:text-7xl sm-max:text-3xl">
                    {siteData.brandLine}
                </p>
                <p className="text-lg text-custom-secondary-font lg:w-3/5 sm-max:text-base">{siteData.brandDescription}</p>
                <div>
                    <button
                        className="mt-4 rounded border-[1px] border-custom-primary-button p-4 px-6 text-custom-primary-button transition-all duration-300 hover:bg-custom-secondary-button sm-max:mt-8"
                        onClick={() => scrollToWork.current.scrollIntoView({ behavior: "smooth" })}
                    >
                        {siteData.brandButton}
                    </button>
                </div>
            </div>
        </MainSectionOutline>
    );
}

export default Home;
